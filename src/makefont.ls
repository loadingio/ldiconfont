console.log "initializing..."
require! <[fs fs-extra stylus uglifycss path svg2ttf jsdom progress @plotdb/colors svgo yargs]>

# ascent - tweak box vertical position based on accompany font family
# offset-y - adjust vertical position. negative toward 'down', positive toward 'up'
# Even with this, we still have to adjust slightly ( by 'top' css style) in different font size.
# Goldman
# [offset-y,ascent] = [0,80]
# Rubik
# [offset-y,ascent] = [-6,77]
# Roboto
[offset-y,ascent] = [-13,70]

# expect to support following attributes
# - horiz-origin-x
# - horiz-origin-y
# - horiz-adv-x
# - vert-origin-x
# - vert-origin-y
# - vert-adv-y
# - units-per-em
# - ascent
# - descent

argv = yargs
  .option \map, do
    alias: \m
    description: "unicode/icon name mapping file.auto assign if omitted"
    type: \string
  .option \input, do
    alias: \i
    description: "input directory of SVGs. default `src/svg`"
    type: \string
  .option \units-per-em, do
    alias: \u
    description: "units-per-em. default 900"
    type: \number
  .option \ascent, do
    alias: \a
    description: "ascent. tweak box vertical position based on desired font family. negative toward down, postive toward up. default 700"
    type: \number
  .option \descent, do
    alias: \e
    description: "descent. tweak box vertical position based on desired font family. negative toward down, postive toward up. default 700"
    type: \number
  .option \offset-y, do
    alias: \y
    description: "adjust glyph vertical position. negative toward down, positive toward up. default -130"
    type: \number
  .option \dir, do
    alias: \d
    description: "output directory. default `dist` if omitted."
    type: \string
  .help \help
  .alias \help, \h
  .check (argv, options) -> return true
  .argv

config = {}
mapfile = argv.m
dist = argv.d or 'dist'
srcdir = argv.i or 'src/svg'

if fs.exists-sync path.join(srcdir, 'config.json') => 
  config = JSON.parse(fs.read-file-sync path.join(srcdir, 'config.json') .toString!)
  ascent = config["ascent"]
  descent = config["descent"]
  offset-y = config["offset-y"]
  size = config["units-per-em"]

size = argv.u or size or 900
ascent = if argv.a? => +argv.a else if ascent? => ascent else 800
descent = if argv.e? => +argv.e else if descent? => descent else 100
offset-y = if argv.y? => +argv.y else if offset-y? => offset-y else -100

# size: the size of grid
# ascent: baseline to topmost
# descent: baseline to bottommost
# offset-y: for aligning between different fonts. ( try `-descent` if possible )

map = if mapfile => JSON.parse(fs.read-file-sync mapfile .toString!) else {}

progress-bar = (total = 10, text = "converting") ->
  bar = new progress(
    "   #text [#{':bar'.yellow}] #{':percent'.cyan} :etas",
    { total: total, width: 60, complete: '#' }
  )
  return bar

optimize = (d, i, code) ->
  Promise.resolve!
    .then ->
      ret = svgo.optimize code, {convertShapeToPath: true}
      dom = new jsdom.JSDOM(ret.data).window.document
      try
        path = dom.querySelector("path").getAttribute("d")
      catch e
        console.log "[FAILED] #{d.name} parse failed."
        path = null
      return {name: d.name, path: path, code: map[d.name] or (9728 + i).toString(16)}

console.log "reading SVG folder..."
svgs = fs.readdir-sync srcdir .filter -> /\.svg$/.exec(it)
console.log "total #{svgs.length} glyphs to parse."
bar = progress-bar svgs.length
local = lc = {}
local.symbols = []
local.glyphs = glyphs = []
svgs = svgs
  .map -> do
    name: it.replace(/\.svg$/,'').replace(/^[^_]+_/,'').replace(/-\d+$/, '')
    svg: fs.read-file-sync(path.join(srcdir,it)).toString!

handle = (list) -> new Promise (res, rej) ->
  _ = (i = 0)->
    d = list.splice(0, 1).0
    if !d => return res!
    optimize d, i, d.svg
      .then (ret) ->
        lc.symbols.push ret
        # adjust y coord of the first translate ( translate(0,-13) ) to offset glyph while keeping its box untainted
        svg-for-glyph = """<?xml version="1.0"?>
        <svg viewBox="0 0 #{size} #{size}" xmlns="http://www.w3.org/2000/svg">
        <path transform="translate(0,#{offset-y}) translate(#{size/2},#{size/2}) scale(1,-1) translate(-#{size/2},-#{size/2})" d="#{ret.path}"/>
        </svg>
        """
        optimize d, i, svg-for-glyph
      .then (ret) ->
        glyphs.push ret
        bar.tick!
      .then -> _(i + 1)
  _!

handle svgs
  .then ->
    console.log "parsed. generate pug and stylus code..."
    glyphs.sort (a, b) -> parseInt(a.code,16) - parseInt(b.code,16)
    glyph-json = JSON.stringify(glyphs)
    stylus-code = "//- module\n" + glyphs
      .map (d,i) ->
        {name, code} = d
        """
        i.i-#name:before
          content: "\\#code"
        """
      .join('\n')

    console.log "from path to glyph..."
    glyph-tags = glyphs
      .map (d,i) ->
        {code, name, path} = d
        """  <glyph unicode="&\#x#code;" glyph-name="#name" d="#path"/>"""
      .join \\n
    glyph-views = lc.symbols
      .map (d,i) ->
        {code, name, path} = d
        """
        <view id="#name" viewBox="#{size * i} 0 #size #size">
        </view>
        <g transform="translate(#{size * i},0)"><path d="#path"/></g>
        """
      .join \\n

    console.log "generating SVG font..."
    font-svg = """
    <?xml version="1.0"?>
    <!-- While we use it to generate TTF file, SVG Font is deprecated. Don't use this in browser -->
    <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
    <font id="ldi">
      <font-face units-per-em="#{size}" ascent="#ascent" descent="#{descent}"/>
      <missing-glyph horiz-adv-x="#{size}"/>
      #glyph-tags
    </font>
    </defs>
    </svg>
    """
    icon-svg = """
    <?xml version="1.0"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      #glyph-views
    </svg>
    """
    fs-extra.ensure-dir-sync dist
    fs.write-file-sync path.join(dist,"ldif.font.svg"), font-svg
    fs.write-file-sync path.join(dist,"ldif.icon.svg"), icon-svg
    console.log "generating TTF font..."
    ttf = svg2ttf(font-svg, {} <<< (config or {}))
    fs.write-file-sync path.join(dist, 'ldif.ttf'), Buffer.from(ttf.buffer)
    console.log "generating ldif.css ..."
    stylus-code = fs.read-file-sync(path.join(__dirname,"../src/font.styl")).toString! + stylus-code
    fs.write-file-sync path.join(dist, "ldif.json"), glyph-json
    stylus stylus-code
      .set \filename, path.join(__dirname,"../src/font.styl")
      .render (e, code) ->
        if e => throw e
        console.log "generating ldif.min.css ..."
        code-min = uglifycss.processString(code, uglyComments: true)
        fs.write-file-sync path.join(dist, "ldif.css"), code
        fs.write-file-sync path.join(dist, "ldif.min.css"), code-min
