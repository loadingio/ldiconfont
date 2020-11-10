# ldIconFont

build icon font using SVG font. Reference:

 - [SVG 1.1 - Fonts](https://www.w3.org/TR/SVG11/fonts.html)
 - [SVG Font Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/font)
 - [SVG Font Related Attributes](https://docs.google.com/spreadsheets/d/1NBUILrdB3uDDPzyicEU8WApkTXL9sZVmta7yneXlKIA/edit?usp=sharing)
 - [Font's Measurement Units](https://i.stack.imgur.com/Z0TnA.png)


## Usage

include ldif.min.css file and specify font url ( if font file is not in the same directory of css file ):

    <link rel="stylesheet" type="text/css" href="ldif.min.css"/>
    <style type="text/css">
      @font-face {
        font-family: 'ldi';
        font-weight: normal;
        font-style: normal;
        src: url('path/to/your/ldif.ttf') format('truetype');
      }
    </style>

Then, use icon via classes:

    <i class="i-plus"></i>


## Tweak

You can make customized builds to tweak icon alignment, but even with the same font sometimes it doesn't align properly with different font size. 

You can customize icon vertical position with following CSS:

    i.ldif:before
      position: relative
      top: 0

replace `ldif` with your custom class and tweak `top` value to match your font.


## Custom build

run `./bin/makefont.js` to make a custom build. available parameters:

 - map ( -m ) - optional unicode / icon name mapping file. check src/unicode.json for format.
 - size ( -s ) - glyph size ( default 90 )
 - input ( -i ) - input directory of SVGs. file name of SVG will be its icon name.
 - ascent ( -a ) - ascent for tweaking icon vertical alignment.
 - y ( -y ) - ascent for tweaking icon vertical alignment.
 - dir ( -d ) - output directory. `dist` if omitted.

You can also use ldiconfont to build your own iconfont by installing ldiconfont then run:

    npm install --save ldiconfont
    npx ldif  ... ( parameters ) ...


## Verify Your Build

use `npx ldif-server -d <your-font-dist-folder>` to start up a test server for viewing the result of your customized build.



## Challenges

 - Correctly align vertically - https://christopheraue.net/design/vertical-align


## SVG Font

Basic construct of SVG Font:

    svg: defs: font
      font-face
      glyph
      ...
      missing-glyph


## License

MIT
