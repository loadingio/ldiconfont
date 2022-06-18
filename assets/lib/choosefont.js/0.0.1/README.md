# Choosefont.js

Resource packer and widget for super fast in-browser font picking experience.


## Build Resource

1. prepare your font files under ```tool/fonts``` directory.
    1. choosefont will traverse and find all ttf files automatically.
    2. font named after its filename.
    3. use METADATA.pb in the same folder for category. ( check google-fonts for example.
    4. use meta.json in root directory for additional font information ( check meta.json in this repo for example)
    5. for any font in the xl-fontset format, you can put a symlink to it as ```fontset``` directory under tool/.
2. execute following:

    lsc main

3. following files are generated under ```assets``` directory:
    1. a font meta json ( ```meta.json``` ),
    2. a minimized png sprite ( ```sprite.min.png``` )
    3. non-minimzed png and svg file


## Use Choosefont.js

xfl.js is required. include it at first.

then make a font chooser with following:

```
    var chooser = new ChooseFont(config);
```

Configurations:

 * root: root element for ChooseFont.
 * meta-url: URL for your meta.json.
 * base: URL for where to find all your fonts.
 * disable-filter(font, idx): filter function to decide whether to disable specific font. return true or false.
 * default-filter(font, idx): filter functino to decide whether to show specific font at all. return true or false.
 * type: type of chooser. either 'grid' or 'list'. default 'grid'.
 * itemClass: add additional classes to font list item. should be space separated string.
 * cols: how many item per line ( for grid view ). default 4.
 * disable-filter(f, idx) - if you want to disable some font, return true when f / idx matches the font.
   - f object:
     category: [ ... ] # e.g., HANDWRITING
     family: [...] # e.g., Regular
     name: "fontName"
 * default-filter(f, idx) - if you want to disable some font, return true when f / idx matches the font.
   - same f object as disable-filter.

Once created, you can interact with chooser programmatically with following methods:

 * filter: filter list by name or category. input: object, such as {name: "Abel", category: "Display"}.
   - example:
     ```
     chooser.filter({
       name: "<keyword-for-font-name>"
       category: "<category>"
     })
     ```
   - clear filter by passing nothing:
     ```
     chooser.filter();
     ```

For reading user's feedback, you can watching for specific events with ```choose.on('event-name', handler)```. Following are available events:

 * choose: fire when user choose an event. return font object.
   - example:
     ```
     chooser.on("choose", function(font) {
       /* font is loaded. just use font object */
     });
     ```
   - font object contains following members:
     * name - font name.
     * isSet - is a subsetted font.
     * category - list of category for this font
     * family - possible variant of this font.

   - Following is an example of using xl-fontload+ Choosefont.js:
     ```
     chooser.on("choose", function(font) {
       xfl.load("path-to-my-fontdir/", font, function(font) {
         document.body.style.fontFamily = font.name;
       });
     })
     ```


## DOM Structure

```
  .choosefont
    .choosefont-head     ( only if provided manually )
    .choosefont-content  ( will be added automatically if none )
```


## LICENSE

MIT License.

