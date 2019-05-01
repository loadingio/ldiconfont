console.log "initializing..."
require! <[fs fs-extra svg2ttf jsdom progress colors svgo]>

map = JSON.parse(fs.read-file-sync \src/unicode.json .toString!)

svgo = new svgo({plugins: [{convertShapeToPath: true}]})

progress-bar = (total = 10, text = "converting") ->
  bar = new progress(
    "   #text [#{':bar'.yellow}] #{':percent'.cyan} :etas",
    { total: total, width: 60, complete: '#' }
  )
  return bar

console.log "reading SVG folder..."
svgs = fs.readdir-sync \src/svg
console.log "total #{svgs.length} glyphs to parse."
bar = progress-bar svgs.length
local = {}
local.glyphs = glyphs = []
svgs = svgs
  .map -> do
    name: it.replace(/\.svg$/,'').replace(/^[^_]+_/,'').replace(/-\d+$/, '')
    svg: fs.read-file-sync("src/svg/#it").toString!

handle = (list) -> new Promise (res, rej) ->
  _ = (i = 0)->
    d = list.splice(0, 1).0
    if !d => return res!
    svgo.optimize d.svg
      .then (ret) ->

        dom = new jsdom.JSDOM(ret.data).window.document
        try
          path = dom.querySelector("path").getAttribute("d")
        catch e
          console.log "[FAILED] #{d.name} parse failed."
          path = null

        svg = """<?xml version="1.0"?>
        <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <path transform="translate(0,90) scale(1,-1)" d="#path"/>
        </svg>
        """
        svgo.optimize svg
      .then (ret) ->

        dom = new jsdom.JSDOM(ret.data).window.document
        try
          path = dom.querySelector("path").getAttribute("d")
        catch e
          console.log "[FAILED] #{d.name} parse failed."
          path = null

        bar.tick!
        glyphs.push {name: d.name, path: path, code: map[d.name] or (9728 + i).toString(16)}
      .then -> _(i + 1)
  _!

handle svgs
  .then ->
    console.log "parsed. generate pug and stylus code..."
    glyphs.sort (a, b) -> parseInt(a.code,16) - parseInt(b.code,16)
    pug = glyphs
      .map (d,i) -> JSON.stringify(d)
      .join(',')

    pug = "//- module\n- var glyphs = [#pug];"

    stylus = "//- module\n" + glyphs
      .map (d,i) ->
        {name, code} = d
        """
        i.i-#name:before
          content: "\\#code"
        """
      .join('\n')

    console.log "from path to glyph..."
    glyphs := glyphs
      .map (d,i) ->
        {code, name, path} = d
        """  <glyph unicode="&\#x#code;" glyph-name="#name" horiz-adv-x="90" d="#path"/>"""
      .join('\n')

    console.log "generating SVG font..."
    font-svg = """
    <?xml version="1.0"?>
    <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
    <font id="ldi">
      <font-face units-per-em="90" ascent="70" descent="20"/>
      <missing-glyph horiz-adv-x="90"/>
      #glyphs
    </font>
    </defs>
    </svg>
    """
    fs-extra.ensure-dir-sync "dist/fonts"
    fs.write-file-sync "dist/fonts/ldi.svg", font-svg
    console.log "generating TTF font..."
    ttf = svg2ttf(font-svg, {})
    fs.write-file-sync 'dist/fonts/ldi.ttf', Buffer.from(ttf.buffer)
    console.log "generating glyphs.styl..."
    fs.write-file-sync 'src/glyphs.styl', stylus
    console.log "generating glyphs.pug..."
    fs.write-file-sync 'web/glyphs.pug', pug
