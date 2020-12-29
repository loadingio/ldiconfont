#!/usr/bin/env node
// Generated by LiveScript 1.6.0
var fs, fsExtra, stylus, uglifycss, path, svg2ttf, jsdom, progress, colors, svgo, yargs, ref$, offsetY, ascent, argv, config, mapfile, dist, srcdir, size, map, progressBar, optimize, svgs, bar, local, lc, glyphs, handle;
console.log("initializing...");
fs = require('fs');
fsExtra = require('fs-extra');
stylus = require('stylus');
uglifycss = require('uglifycss');
path = require('path');
svg2ttf = require('svg2ttf');
jsdom = require('jsdom');
progress = require('progress');
colors = require('colors');
svgo = require('svgo');
yargs = require('yargs');
ref$ = [-13, 70], offsetY = ref$[0], ascent = ref$[1];
argv = yargs.option('map', {
  alias: 'm',
  description: "unicode/icon name mapping file.auto assign if omitted",
  type: 'string'
}).option('input', {
  alias: 'i',
  description: "input directory of SVGs. default `src/svg`",
  type: 'string'
}).option('units-per-em', {
  alias: 'u',
  description: "units-per-em. default 900",
  type: 'number'
}).option('ascent', {
  alias: 'a',
  description: "ascent. tweak box vertical position based on desired font family. negative toward down, postive toward up. default 700",
  type: 'number'
}).option('offset-y', {
  alias: 'y',
  description: "adjust glyph vertical position. negative toward down, positive toward up. default -13",
  type: 'number'
}).option('dir', {
  alias: 'd',
  description: "output directory. default `dist` if omitted.",
  type: 'string'
}).help('help').alias('help', 'h').check(function(argv, options){
  return true;
}).argv;
config = {};
mapfile = argv.m;
dist = argv.d || 'dist';
srcdir = argv.i || 'src/svg';
if (fs.existsSync(path.join(srcdir, 'config.json'))) {
  config = JSON.parse(fs.readFileSync(path.join(srcdir, 'config.json')).toString());
  ascent = config["ascent"];
  offsetY = config["offset-y"];
  size = config["units-per-em"];
}
size = argv.u || size || 900;
ascent = argv.a != null
  ? +argv.a
  : ascent != null ? ascent : 700;
offsetY = argv.y != null
  ? +argv.y
  : offsetY != null
    ? offsetY
    : -130;
map = mapfile
  ? JSON.parse(fs.readFileSync(mapfile).toString())
  : {};
svgo = new svgo({
  plugins: [{
    convertShapeToPath: true
  }]
});
progressBar = function(total, text){
  var bar;
  total == null && (total = 10);
  text == null && (text = "converting");
  bar = new progress("   " + text + " [" + ':bar'.yellow + "] " + ':percent'.cyan + " :etas", {
    total: total,
    width: 60,
    complete: '#'
  });
  return bar;
};
optimize = function(d, i, code){
  return svgo.optimize(code).then(function(ret){
    var dom, path, e;
    dom = new jsdom.JSDOM(ret.data).window.document;
    try {
      path = dom.querySelector("path").getAttribute("d");
    } catch (e$) {
      e = e$;
      console.log("[FAILED] " + d.name + " parse failed.");
      path = null;
    }
    return {
      name: d.name,
      path: path,
      code: map[d.name] || (9728 + i).toString(16)
    };
  });
};
console.log("reading SVG folder...");
svgs = fs.readdirSync(srcdir).filter(function(it){
  return /\.svg$/.exec(it);
});
console.log("total " + svgs.length + " glyphs to parse.");
bar = progressBar(svgs.length);
local = lc = {};
local.symbols = [];
local.glyphs = glyphs = [];
svgs = svgs.map(function(it){
  return {
    name: it.replace(/\.svg$/, '').replace(/^[^_]+_/, '').replace(/-\d+$/, ''),
    svg: fs.readFileSync(path.join(srcdir, it)).toString()
  };
});
handle = function(list){
  return new Promise(function(res, rej){
    var _;
    _ = function(i){
      var d;
      i == null && (i = 0);
      d = list.splice(0, 1)[0];
      if (!d) {
        return res();
      }
      return optimize(d, i, d.svg).then(function(ret){
        var svgForGlyph;
        lc.symbols.push(ret);
        svgForGlyph = "<?xml version=\"1.0\"?>\n<svg viewBox=\"0 0 " + size + " " + size + "\" xmlns=\"http://www.w3.org/2000/svg\">\n<path transform=\"translate(0," + offsetY + ") translate(" + size / 2 + "," + size / 2 + ") scale(1,-1) translate(-" + size / 2 + ",-" + size / 2 + ")\" d=\"" + ret.path + "\"/>\n</svg>";
        return optimize(d, i, svgForGlyph);
      }).then(function(ret){
        glyphs.push(ret);
        return bar.tick();
      }).then(function(){
        return _(i + 1);
      });
    };
    return _();
  });
};
handle(svgs).then(function(){
  var glyphJson, stylusCode, glyphTags, glyphViews, fontSvg, iconSvg, ttf;
  console.log("parsed. generate pug and stylus code...");
  glyphs.sort(function(a, b){
    return parseInt(a.code, 16) - parseInt(b.code, 16);
  });
  glyphJson = JSON.stringify(glyphs);
  stylusCode = "//- module\n" + glyphs.map(function(d, i){
    var name, code;
    name = d.name, code = d.code;
    return "i.i-" + name + ":before\n  content: \"\\" + code + "\"";
  }).join('\n');
  console.log("from path to glyph...");
  glyphTags = glyphs.map(function(d, i){
    var code, name, path;
    code = d.code, name = d.name, path = d.path;
    return "  <glyph unicode=\"&#x" + code + ";\" glyph-name=\"" + name + "\" d=\"" + path + "\"/>";
  }).join('\n');
  glyphViews = lc.symbols.map(function(d, i){
    var code, name, path;
    code = d.code, name = d.name, path = d.path;
    return "<view id=\"" + name + "\" viewBox=\"" + size * i + " 0 " + size + " " + size + "\">\n</view>\n<g transform=\"translate(" + size * i + ",0)\"><path d=\"" + path + "\"/></g>";
  }).join('\n');
  console.log("generating SVG font...");
  fontSvg = "<?xml version=\"1.0\"?>\n<!-- While we use it to generate TTF file, SVG Font is deprecated. Don't use this in browser -->\n<svg xmlns=\"http://www.w3.org/2000/svg\">\n<defs>\n<font id=\"ldi\">\n  <font-face units-per-em=\"" + size + "\" ascent=\"" + ascent + "\" descent=\"" + (size - ascent) + "\"/>\n  <missing-glyph horiz-adv-x=\"" + size + "\"/>\n  " + glyphTags + "\n</font>\n</defs>\n</svg>";
  iconSvg = "<?xml version=\"1.0\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  " + glyphViews + "\n</svg>";
  fsExtra.ensureDirSync(dist);
  fs.writeFileSync(path.join(dist, "ldif.font.svg"), fontSvg);
  fs.writeFileSync(path.join(dist, "ldif.icon.svg"), iconSvg);
  console.log("generating TTF font...");
  ttf = svg2ttf(fontSvg, import$({}, config || {}));
  fs.writeFileSync(path.join(dist, 'ldif.ttf'), Buffer.from(ttf.buffer));
  console.log("generating ldif.css ...");
  stylusCode = fs.readFileSync(path.join(__dirname, "../src/font.styl")).toString() + stylusCode;
  fs.writeFileSync(path.join(dist, "ldif.json"), glyphJson);
  return stylus(stylusCode).set('filename', path.join(__dirname, "../src/font.styl")).render(function(e, code){
    var codeMin;
    if (e) {
      throw e;
    }
    console.log("generating ldif.min.css ...");
    codeMin = uglifycss.processString(code, {
      uglyComments: true
    });
    fs.writeFileSync(path.join(dist, "ldif.css"), code);
    return fs.writeFileSync(path.join(dist, "ldif.min.css"), codeMin);
  });
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
