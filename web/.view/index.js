 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (JSON, blockLoader, cssLoader, decache, escape, scriptLoader, version) {;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";













;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap/main/css/bootstrap.min.css");
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.css");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/choosefont.js/main/choosefont.min.css");
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Mono");
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldcover/main/ldcv.min.css");
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldif/dev/ldif.css");
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("css/index.css");
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Goldman&amp;family=Noto+Sans+TC&amp;family=Roboto:wght@300&amp;family=Rubik&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + ".glyphs {\n  grid-template-columns: repeat(7, minmax(64px, 1fr));\n  display: grid;\n  gap: 10px;\n  color: #39414c;\n}\n.viewer {\n  font-family: Roboto;\n  font-size: 128px;\n}\n.viewer.active {\n  background: #ddd;\n}\n.viewer.active .inner {\n  background: #eee;\n}\n.viewer.active .inner i {\n  background: rgba(255,200,128,0.5);\n  outline: 1px solid #f00;\n}\n.viewer.active .inner i:before {\n  background: rgba(255,255,0,0.3);\n  outline: 1px solid #ff0;\n}\n.viewer.active .inner div {\n  background: rgba(128,200,255,0.5);\n  outline: 1px solid #09f;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1200 mx-auto rwd\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center my-4 py-4\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "ldIconFont\u003C\u002Fh1\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "icon font for loading.io UI\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"glyphs\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"glyph\" ld-each=\"glyph\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv ld=\"cell\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"icon\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci ld=\"icon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"mr-1\" ld=\"name\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci ld=\"icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"code\" ld=\"code\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv ldcv-font scroll\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base w-1024 rwd\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"chooser\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv ldcv-view\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"base w-1024 rwd\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Font Family\u003C\u002Flabel\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control\" ld=\"fontfamily\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
// iterate ["Roboto","Rubik","Goldman","Noto Sans TC"]
;(function(){
  var $$obj = ["Roboto","Rubik","Goldman","Noto Sans TC"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var n = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n=="Roboto"), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var n = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n=="Roboto"), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group-append\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" style=\"border-color:#ccc\" ld=\"morefont\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "...\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Icon\u003C\u002Flabel\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control\" ld=\"iconname\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
// iterate ["fb","google","upload","chevron-right","gear"]
;(function(){
  var $$obj = ["fb","google","upload","chevron-right","gear"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var n = $$obj[pug_index1];
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n=="fb"), true, true)) + "\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var n = $$obj[pug_index1];
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n=="fb"), true, true)) + "\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Font Size\u003C\u002Flabel\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control\" ld=\"fontsize\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
// iterate [12,16,24,32,64,128]
;(function(){
  var $$obj = [12,16,24,32,64,128];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var n = $$obj[pug_index2];
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n==128), true, true)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var n = $$obj[pug_index2];
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n==128), true, true)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Icon Size\u003C\u002Flabel\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control\" ld=\"iconsize\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
// iterate [0.5,0.8,1,1.2,2]
;(function(){
  var $$obj = [0.5,0.8,1,1.2,2];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var n = $$obj[pug_index3];
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n==1), true, true)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var n = $$obj[pug_index3];
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n==1), true, true)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Tweak Vertically\u003C\u002Flabel\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control\" ld=\"verticaloffset\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
// iterate [-5,-4,-3,-2,-1,0,1,2,3,4,5]
;(function(){
  var $$obj = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var n = $$obj[pug_index4];
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n==0), true, true)) + "\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var n = $$obj[pug_index4];
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", n, true, true)+pug_attr("selected", (n==0), true, true)) + "\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"bg-light p-4 border-top border-bottom\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"viewer\" ld=\"viewer\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner text-center\" ld=\"inner\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-inline-block\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "H\u003C\u002Fspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "g\u003C\u002Fspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "a\u003C\u002Fspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Ci class=\"i-fb\" ld=\"icon\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-inline-block\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "國一ば뮤\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-lg btn-block btn-primary\" ld=\"hint\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Toggle Hint: ";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cspan ld=\"hint-text\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Off\u003C\u002Fspan\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-lg btn-block btn-primary\" ld=\"useflexbox\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Align with Flexbox: ";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cspan ld=\"flexbox-text\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Off\u003C\u002Fspan\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-lg btn-block btn-outline-dark\" data-ldcv-set=\"\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fldcv.view.pug";
pug_html = pug_html + "Close Popup\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/xfl/xfl.min.js");
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/choosefont.js/main/choosefont.min.js");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.native/main/bootstrap-native.min.js");
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldcover/main/ldcv.min.js");
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldview/main/ldview.min.js");
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("/js/index.js");
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 