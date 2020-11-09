 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
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
pug_mixins["css"]("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.css");
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Mono");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/ldcover/main/ldcv.min.css");
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/ldif/dev/ldif.css");
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/css/index.css");
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fgen\u002Fglyphs.pug";
var glyphs = [{"name":"heart","path":"M90 53.3C90 27.5 51.5 8 45-3.9 38.9 8.1 0 27.8 0 53.3 0 80.7 45 82 45 51.7c0 30.3 45 29 45 1.6z","code":"f000"},{"name":"home","path":"M87.9 30.6L45 66.9 30 54.2V62H18V44L2.1 30.6l7.8-9.2 8.1 6.9V2h19.6v17.6h14.8V2H72v26.3l8.1-6.9z","code":"f001"},{"name":"building","path":"M12 80v-90h66v90H12zm36-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zM36 68h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zM24 68h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zm0-12h6v-6h-6v6zM60-4H30V8h30V-4zm6 18h-6v6h6v-6zm0 12h-6v6h6v-6zm0 12h-6v6h6v-6zm0 12h-6v6h6v-6zm0 12h-6v6h6v-6z","code":"f002"},{"name":"dart-up","path":"M45 56.2c-1.6 0-3.1-.6-4.2-1.8L10.5 24.2c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0l26 26 26-26c2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5L49.2 54.5c-1.1 1.1-2.6 1.7-4.2 1.7z","code":"f003"},{"name":"dart-right","path":"M66.1 35.1c0-1.6-.6-3.1-1.8-4.2L34.1.6c-2.3-2.3-6.1-2.3-8.5 0-2.3 2.3-2.3 6.1 0 8.5l26 26-26 26c-2.3 2.3-2.3 6.1 0 8.5 2.3 2.3 6.1 2.3 8.5 0l30.2-30.2c1.2-1.2 1.8-2.7 1.8-4.3z","code":"f004"},{"name":"dart-down","path":"M45 14c1.6 0 3.1.6 4.2 1.8L79.5 46c2.3 2.3 2.3 6.1 0 8.5-2.3 2.3-6.1 2.3-8.5 0l-26-26-26 26c-2.3 2.3-6.1 2.3-8.5 0-2.3-2.3-2.3-6.1 0-8.5l30.2-30.2c1.2-1.2 2.7-1.8 4.3-1.8z","code":"f005"},{"name":"dart-left","path":"M23.9 35.1c0 1.6.6 3.1 1.8 4.2l30.2 30.2c2.3 2.3 6.1 2.3 8.5 0 2.3-2.3 2.3-6.1 0-8.5l-26-26 26-26c2.3-2.3 2.3-6.1 0-8.5-2.3-2.3-6.1-2.3-8.5 0L25.6 30.9c-1.1 1.1-1.7 2.6-1.7 4.2z","code":"f006"},{"name":"chevron-up","path":"M49.2 66.1l24-24c2.3-2.3 2.3-6.1 0-8.5-2.3-2.3-6.1-2.3-8.5 0L45 53.4 25.3 33.6c-2.3-2.3-6.1-2.3-8.5 0-2.3 2.3-2.3 6.1 0 8.5l24 24c1.2 1.2 2.7 1.8 4.2 1.8s3.1-.6 4.2-1.8zM45 38c-1.5 0-3.1-.6-4.2-1.8l-24-24c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0L45 23.5 64.7 3.8c2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5l-24 24C48.1 37.4 46.5 38 45 38z","code":"f007"},{"name":"chevron-right","path":"M77.9 34.9c0-1.5-.6-3.1-1.8-4.2l-24-24c-2.3-2.3-6.1-2.3-8.5 0-2.3 2.3-2.3 6.1 0 8.5l19.7 19.7-19.6 19.8c-2.3 2.3-2.3 6.1 0 8.5 2.3 2.3 6.1 2.3 8.5 0l24-24c1.1-1.2 1.7-2.7 1.7-4.3zm-31.6 4.3l-24 24c-2.3 2.3-6.1 2.3-8.5 0-2.3-2.3-2.3-6.1 0-8.5L33.5 35 13.8 15.2c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0l24 24c1.2 1.2 1.8 2.7 1.8 4.2s-.6 3.1-1.8 4.3z","code":"f008"},{"name":"chevron-down","path":"M40.8 3.8l-24 24c-2.3 2.3-2.3 6.1 0 8.5 2.3 2.3 6.1 2.3 8.5 0L45 16.5l19.7 19.7c2.3 2.3 6.1 2.3 8.5 0 2.3-2.3 2.3-6.1 0-8.5l-24-24C48.1 2.6 46.5 2 45 2s-3.1.6-4.2 1.8zM45 31.9c1.5 0 3.1.6 4.2 1.8l24 24c2.3 2.3 2.3 6.1 0 8.5-2.3 2.3-6.1 2.3-8.5 0L45 46.4 25.3 66.1c-2.3 2.3-6.1 2.3-8.5 0-2.3-2.3-2.3-6.1 0-8.5l24-24c1.1-1.1 2.7-1.7 4.2-1.7z","code":"f009"},{"name":"chevron-left","path":"M12.1 34.9c0 1.5.6 3.1 1.8 4.2l24 24c2.3 2.3 6.1 2.3 8.5 0 2.3-2.3 2.3-6.1 0-8.5L26.6 34.9l19.7-19.7c2.3-2.3 2.3-6.1 0-8.5-2.3-2.3-6.1-2.3-8.5 0l-24 24c-1.1 1.2-1.7 2.7-1.7 4.2zm31.6-4.2l24-24c2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5L56.4 34.9l19.7 19.7c2.3 2.3 2.3 6.1 0 8.5-2.3 2.3-6.1 2.3-8.5 0l-24-24C42.5 38 42 36.5 42 34.9s.5-3 1.7-4.2z","code":"f00a"},{"name":"save","path":"M66 80H5.8C2.6 80 0 77.4 0 74.2V-4.1C0-7.4 2.6-10 5.8-10h78.4c3.2 0 5.8 2.6 5.8 5.8V56L66 80zm-18-6V50.2c0-.1-.1-.2-.2-.2H36v24h12zM24-4v29.8c0 .1.1.2.2.2h41.7c.1 0 .2-.1.2-.2V-4H24zm60 0H72v29.8c0 3.4-2.8 6.2-6.2 6.2H24.2c-3.4 0-6.2-2.8-6.2-6.2V-4H6v78h12V50.2c0-3.4 2.8-6.2 6.2-6.2h23.6c3.4 0 6.2 2.8 6.2 6.2V74h9.5L84 53.5V-4z","code":"f00b"},{"name":"bars","path":"M78 59H12c-3.3 0-6 2.7-6 6s2.7 6 6 6h66c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0-60H12C8.7-1 6 1.7 6 5s2.7 6 6 6h66c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0 30H12c-3.3 0-6 2.7-6 6s2.7 6 6 6h66c3.3 0 6-2.7 6-6s-2.7-6-6-6z","code":"f00c"},{"name":"check","path":"M36.7 7.4L6.6 37.5l8.5 8.5 21.6-21.6 38.2 38.2 8.5-8.5z","code":"f00d"},{"name":"circle","path":"M45 68c18.2 0 33-14.8 33-33S63.2 2 45 2 12 16.8 12 35s14.8 33 33 33m0 6C23.5 74 6 56.5 6 35S23.5-4 45-4s39 17.5 39 39-17.5 39-39 39z","code":"f00e"},{"name":"radio","path":"M45 74C23.5 74 6 56.5 6 35S23.5-4 45-4s39 17.5 39 39-17.5 39-39 39zm0-72C26.8 2 12 16.8 12 35s14.8 33 33 33 33-14.8 33-33S63.2 2 45 2zm21 33c0-11.6-9.4-21-21-21s-21 9.4-21 21 9.4 21 21 21 21-9.4 21-21z","code":"f00f"},{"name":"question","path":"M51 8H39v12h12V8zm0 20.7c0 .7.9 1.8 2.6 2.6 6.6 2.9 10.6 8.9 10.3 15.3-.5 8.3-8.4 15-18.1 15.4-5.7.2-11.2-1.8-15-5.4-3.1-3-4.8-6.8-4.8-10.8h12c0 .9.6 1.7 1.1 2.2 1.4 1.4 3.7 2.1 6.2 2.1 3.6-.1 6.4-2.3 6.5-4.1.1-1.6-1.6-3-3.1-3.6-6.1-2.6-9.8-7.8-9.8-13.6V23h12v5.7zM84 35c0 21.5-17.5 39-39 39S6 56.5 6 35 23.5-4 45-4s39 17.5 39 39zm-6 0C78 16.8 63.2 2 45 2S12 16.8 12 35s14.8 33 33 33 33-14.8 33-33z","code":"f010"},{"name":"lock","path":"M71.9 44h.1v20c0 8.8-7.2 16-16 16H34c-8.8 0-16-7.2-16-16V44h.1c-3.4 0-6.1-2.7-6.1-6.1V-3.9c0-3.4 2.7-6.1 6.1-6.1h53.8c3.4 0 6.1 2.7 6.1 6.1v41.8c0 3.4-2.7 6.1-6.1 6.1zM30 64c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V44H30v20z","code":"f011"},{"name":"unlock","path":"M71.9 44H30v20c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4v-1.8c0-3.3 2.7-6 6-6s6 2.7 6 6V64c0 8.8-7.2 16-16 16H34c-8.8 0-16-7.2-16-16V44h.1c-3.4 0-6.1-2.7-6.1-6.1V-3.9c0-3.4 2.7-6.1 6.1-6.1h53.8c3.4 0 6.1 2.7 6.1 6.1v41.8c0 3.4-2.7 6.1-6.1 6.1z","code":"f012"},{"name":"mail","path":"M45 35L0 56v6c0 3.3 2.7 6 6 6h78c3.3 0 6-2.7 6-6v-6L45 35zM0 44V8c0-3.3 2.7-6 6-6h78c3.3 0 6 2.7 6 6v36L45 23 0 44z","code":"f013"},{"name":"pen","path":"M14.8 30.2l-.8-.7-1.7-1.7-1.8-1.8-.8-.8-2-2L6 21.5V-4h25.5l1.8 1.8 2 2 .8.8 4.2 4.2L74.5 39 49 64.5 14.8 30.2zM29 2H12v17l2 2L31 4l-2-2zm53.9 45.5l-4.2-4.2-25.4 25.4 4.2 4.2c2.3 2.3 6.1 2.3 8.5 0l17-17c2.3-2.3 2.3-6.1-.1-8.4z","code":"f014"},{"name":"phone","path":"M80.9 22.9l-6.3 6.3c-3.4 3.4-8.2 4.1-10.7 1.5L55.4 18C45 25.9 35.9 35 28 45.4l12.8 8.5c2.5 2.5 1.8 7.3-1.5 10.7L33 70.9c-3.4 3.4-8.2 4.1-10.8 1.6L9.8 60c-3.9-3.9-4.9-9.8-2.6-14.8C17.3 23.3 33.3 7.3 55.3-2.9c5-2.3 10.9-1.3 14.8 2.6l12.4 12.4c2.5 2.7 1.8 7.5-1.6 10.8z","code":"f015"},{"name":"gear","path":"M90 26v18H73.6c-.5 1.7-1.2 3.3-2 4.9l11.6 11.6-12.7 12.7-11.6-11.6c-1.6.8-3.2 1.5-4.9 2V80H36V63.6c-1.7-.5-3.3-1.2-4.9-2L19.5 73.2 6.8 60.5l11.6-11.6c-.8-1.6-1.5-3.2-2-4.9H0V26h16.4c.5-1.7 1.2-3.3 2-4.9L6.8 9.5 19.5-3.2 31.1 8.4c1.6-.8 3.2-1.5 4.9-2V-10h18V6.4c1.7.5 3.3 1.2 4.9 2L70.5-3.2 83.2 9.5 71.6 21.1c.8 1.6 1.5 3.2 2 4.9H90zm-45-6c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z","code":"f016"},{"name":"legal","path":"M66 80c-3.3 0-6-2.7-6-6H30c0 3.3-2.7 6-6 6s-6-2.7-6-6V50c0-3.3 2.7-6 6-6s6 2.7 6 6h12V32c-3.3 0-6-2.7-6-6V-4c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v30c0 3.3-2.7 6-6 6v18h12c0-3.3 2.7-6 6-6s6 2.7 6 6v24c0 3.3-2.7 6-6 6z","code":"f017"},{"name":"link","path":"M23.8-4.2c-4.8 0-9.3 1.9-12.7 5.3C7.7 4.5 5.8 9 5.8 13.8c0 4.8 1.9 9.3 5.3 12.7l8.5 8.5c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-8.5-8.5C13 20 11.8 17 11.8 13.8s1.2-6.2 3.5-8.5 5.3-3.5 8.5-3.5S30 3 32.3 5.3l18 18c4.7 4.7 4.7 12.3 0 17-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0 7-7 7-18.4 0-25.5l-18-18c-3.4-3.3-7.9-5.2-12.7-5.2zm15.9 29.7c1.2 1.2 1.2 3.1 0 4.2-4.7 4.7-4.7 12.3 0 17l18 18c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.2 8.5-3.5 3.5-5.3 3.5-8.5-1.2-6.2-3.5-8.5l-8.5-8.5C65 38 65 36.1 66.2 35c1.2-1.2 3.1-1.2 4.2 0l8.5 8.5c3.4 3.4 5.3 7.9 5.3 12.7 0 4.8-1.9 9.3-5.3 12.7-3.4 3.4-7.9 5.3-12.7 5.3-4.8 0-9.3-1.9-12.7-5.3l-18-18c-7-7-7-18.4 0-25.5.6-.6 1.4-.9 2.1-.9s1.5.4 2.1 1z","code":"f018"},{"name":"location","path":"M78 47c0 19-16.1 34.2-35.3 32.9-16.4-1.1-30.6-14.4-30.6-30.8C12 26 30-4 45-10c15 6 33 36 33 57zM45 65c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z","code":"f019"},{"name":"eye","path":"M86.7 39C80 46.5 63.8 62 45 62S10 46.5 3.3 39c-2-2.3-2-5.7 0-8C10 23.5 26.2 8 45 8s35 15.5 41.7 23c2 2.3 2 5.7 0 8zM41.6 55.6C45.3 54.5 48 51 48 47c0-5-4-9-9-9-4.1 0-7.5 2.7-8.6 6.4-.3.8-.4 1.7-.4 2.6 0 2.6 1.1 4.9 2.9 6.6 1.6 1.5 3.8 2.4 6.1 2.4.7 0 1.5-.1 2.1-.3.2 0 .4 0 .5-.1zM45 14C28.4 14 13.4 28.7 7.8 35c3.4 3.8 10 10.5 18.4 15.4-1.4-2.8-2.2-6-2.2-9.3 0-11.6 9.4-21 21-21s21 9.4 21 21c0 3.4-.8 6.5-2.2 9.3 8.4-4.8 15-11.6 18.4-15.3C76.6 28.7 61.6 14 45 14z","code":"f01a"},{"name":"eye-slash","path":"M86.7 31c-6-6.7-19.4-19.6-35.5-22.5l4.4 7.3C67.7 20 77.8 30.1 82.2 35c-2.1 2.3-5.4 5.8-9.6 9.2l3.1 5.2c4.7-3.8 8.5-7.6 11-10.4 2-2.3 2-5.7 0-8zM59.1 46L46.4 26.1l-1.9-3-1.8-2.9-3.5-5.5-3.4-5.4-6.6-10.4-10.1 6.4 5.5 8.6C14.9 19 7.4 26.5 3.3 31c-2 2.3-2 5.7 0 8C10 46.5 26.2 62 45 62h1.3c2.7-.1 5.4-.5 8-1.2l6.6 10.4L71 64.8l-5.5-8.6-2.7-4.3-.5-.8L61 49l-1.9-3zm-11.6 4c-1 2.7-3.1 4.7-5.8 5.6-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.3-2.4 0-4.5-.9-6.1-2.4-1.8-1.6-2.9-4-2.9-6.6 0-.9.1-1.8.4-2.6C31.5 40.7 35 38 39 38h.8l7.7 12zm-16-25.1C26.9 28.8 24 34.6 24 41c0 3.4.8 6.5 2.2 9.3-8.4-4.8-15-11.6-18.4-15.4 3.6-4 10.8-11.3 19.8-16.1l3.9 6.1z","code":"f01b"},{"name":"close","path":"M77.7 63.7l-4 4c-2.1 2.1-5.6 2.1-7.7 0l-21-21-21 21c-2.1 2.1-5.6 2.1-7.7 0l-4-4c-2.1-2.1-2.1-5.6 0-7.7l21-21-21-21c-2.1-2.1-2.1-5.6 0-7.7l4-4C18.4.2 21.9.2 24 2.3l21 21 21-21c2.1-2.1 5.6-2.1 7.7 0l4 4c2.1 2.1 2.1 5.6 0 7.7l-21 21 21 21c2.1 2.1 2.1 5.6 0 7.7z","code":"f01c"},{"name":"creditcard","path":"M6.1 2h77.8C87.3 2 90 4.7 90 8.1v53.8c0 3.4-2.7 6.1-6.1 6.1H6.1C2.7 68 0 65.3 0 61.9V8.1C0 4.7 2.7 2 6.1 2zM6 61.9c0 .1 0 .1.1.1h77.8c.1 0 .1 0 .1-.1V50H6v11.9zM84 38V8.1c0-.1 0-.1-.1-.1H6.1C6 8 6 8 6 8.1V38h78zM18 14h-6v12h6V14zm12 0h-6v12h6V14zm12 0h-6v12h6V14z","code":"f01d"},{"name":"drag","path":"M45 50c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm0-24c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm14.1 41.1c1.2-1.2 1.2-3.1 0-4.2-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9L48 69.8V59c0-1.7-1.3-3-3-3s-3 1.3-3 3v10.8l-6.9-6.9c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9c-1.2 1.2-1.2 3.1 0 4.2l12 12c.1.1.3.3.5.4.1 0 .1.1.2.1.1.1.2.1.3.2.1 0 .2.1.3.1.1 0 .2.1.3.1.4.1.8.1 1.2 0 .1 0 .2-.1.3-.1.1 0 .2-.1.3-.1.1 0 .2-.1.3-.2.1 0 .1-.1.2-.1.2-.1.3-.2.5-.4l11.8-12zM24 35c0-1.7-1.3-3-3-3H10.2l6.9-6.9c1.2-1.2 1.2-3.1 0-4.2-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9l-12 12c-.1.1-.3.3-.4.5 0 .1-.1.1-.1.2-.1.1-.1.2-.2.3 0 .1-.1.2-.1.3 0 .1-.1.2-.1.3-.1.4-.1.8 0 1.2 0 .1.1.2.1.3 0 .1.1.2.1.3 0 .1.1.2.2.3 0 .1.1.1.1.2.1.2.2.3.4.5l12 12c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2L10.2 38H21c1.7 0 3-1.3 3-3zM59.1 7.1c1.2-1.2 1.2-3.1 0-4.2l-12-12c-.1-.1-.3-.3-.5-.4-.1 0-.1-.1-.2-.1-.1-.1-.2-.1-.3-.2-.1 0-.2-.1-.3-.1-.1 0-.2-.1-.3-.1H45c-.2 0-.4 0-.6.1-.1 0-.2.1-.3.1-.1 0-.2.1-.3.1-.1 0-.2.1-.3.2-.1 0-.1.1-.2.1-.2.1-.3.2-.5.4l-12 12c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0L41.9.3V11c0 1.7 1.3 3 3 3s3-1.3 3-3V.2l6.9 6.9c1.3 1.2 3.1 1.2 4.3 0zm30 25.8l-12-12c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9c-1.2 1.2-1.2 3.1 0 4.2l6.9 6.9H69c-1.7 0-3 1.3-3 3s1.3 3 3 3h10.8l-6.9 6.9c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l12-12c.1-.1.3-.3.4-.5 0-.1.1-.1.1-.2.1-.1.1-.2.2-.3 0-.1.1-.2.1-.3 0-.1.1-.2.1-.3.1-.4.1-.8 0-1.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.2-.3 0-.1-.1-.1-.1-.2-.1 0-.2-.2-.4-.3z","code":"f01e"},{"name":"clone","path":"M18 14h-6c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-6h-6v6H12V20h6v-6zm60 36H30V2h48v48m0 6c3.3 0 6-2.7 6-6V2c0-3.3-2.7-6-6-6H30c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h48z","code":"f01f"},{"name":"google","path":"M78 74H16.6c-3.5 0-7.6.6-9.7-2.9-.9-1.3-.9-2.8-.9-4.3V3.3c0-1.4 0-2.8.7-4.1 2-3.8 6.2-3.2 9.8-3.2 5.3 0 59-.1 61.5 0 3.4.1 6 2.8 6 6.2v65.7c0 3.3-2.6 6.1-6 6.1zM65.2 12.5c-6.6-6.2-16.1-8.6-24.9-7-7.9 1.4-15.1 6.1-19.5 12.8-5.2 7.7-6.5 17.6-3.5 26.4 3 9.1 10.5 16.3 19.7 19 9.9 2.9 20.7.5 28.4-6.2l-8.7-8.7c-4.8 3.9-11.5 5-17.3 2.8-5.5-2.1-9.7-6.9-11-12.7-1.3-5.6.3-11.7 4.3-16 3.8-4.1 9.3-6 14.8-5.6 6.8.5 12.9 4.6 14.3 11.5H45.7v11.7h28c2.2-9.9-1.1-21.1-8.5-28z","code":"f020"},{"name":"fb","path":"M79.7 74H10.3C7.9 74 6 72.1 6 69.7V.3C6-2.1 7.9-4 10.3-4H48v30.2H37.5V38H48v8.7c0 10.1 5.8 15.6 14.8 15.6 4.3 0 8-.3 9.1-.5V51.3h-6.2c-4.9 0-5.8-2.3-5.8-5.8V38h11.7L70 26.2H59.8V-4h19.9C82.1-4 84-2.1 84 .3v69.4c0 2.4-1.9 4.3-4.3 4.3","code":"f021"},{"name":"twt","path":"M86.8 61c-3.1-1.4-6.4-2.3-9.9-2.7 3.6 2.1 6.3 5.5 7.6 9.5-3.3-1.9-7-3.4-10.9-4.1C70.4 67 66 69.1 61 69.1c-9.5 0-17.2-7.7-17.2-17.2 0-1.4.2-2.7.4-3.9-14.3.7-27 7.6-35.5 17.9-1.5-2.5-2.3-5.5-2.3-8.7 0-6 3-11.2 7.7-14.3-2.8.1-5.5.9-7.8 2.2v-.2c0-8.3 5.9-15.3 13.8-16.9-1.4-.4-3-.6-4.5-.6-1.1 0-2.2.1-3.2.3 2.2-6.8 8.6-11.8 16.1-12-5.9-4.6-13.3-7.4-21.4-7.4-1.4 0-2.7.1-4.1.2C10.7 3.6 19.7.8 29.4.8c31.7 0 49 26.2 49 49 0 .7 0 1.5-.1 2.2 3.4 2.4 6.3 5.5 8.6 8.9l-.1.1z","code":"f022"},{"name":"github","path":"M45 74C23.5 74 6 56.6 6 35 6 17.8 17.2 3.1 32.7-2c2-.4 2.7.8 2.7 1.9v6.6c-10.8-2.4-13.1 5.2-13.1 5.2-1.8 4.5-4.3 5.7-4.3 5.7-3.5 2.4.3 2.4.3 2.4 3.9-.3 6-4 6-4 3.5-6 9.1-4.2 11.4-3.2.4 2.5 1.4 4.2 2.5 5.2-8.7 1-17.8 4.3-17.8 19.3 0 4.3 1.5 7.7 4 10.5-.4 1-1.8 4.9.3 10.3 0 0 3.3 1 10.7-4 3.1.9 6.4 1.3 9.8 1.3 3.3 0 6.6-.4 9.8-1.3 7.4 5 10.7 4 10.7 4 2.1-5.4.8-9.3.4-10.3 2.5-2.7 4-6.2 4-10.5 0-15-9.1-18.3-17.8-19.2 1.4-1.2 2.6-3.6 2.6-7.2V0c0-1 .7-2.2 2.7-1.9C72.8 3.2 84 17.8 84 35c0 21.6-17.5 39-39 39","code":"f023"},{"name":"doc","path":"M71.5 74.5v-78h-54v78h54m0 6h-54c-3.3 0-6-2.7-6-6v-78c0-3.3 2.7-6 6-6h54c3.3 0 6 2.7 6 6v78c0 3.3-2.7 6-6 6zM63 68H27v-6h36v6zm0-12H27v-6h36v6zm0-12H27v-6h36v6zm0-12H27v-6h36v6zm0-12H27v-6h36v6zM45 8H27V2h18v6z","code":"f024"},{"name":"undo","path":"M72.6 62.6C65.2 69.9 55.4 74 45 74c-9.4 0-18.2-3.3-25.3-9.3L7.4 77V44h33L28.3 56.2c10.6 8.4 26.1 7.7 35.8-2.1 10.5-10.5 10.5-27.7 0-38.2s-27.7-10.5-38.2 0c-2.5 2.5-4.5 5.5-5.9 8.8L9 20.1c2-4.7 4.8-9 8.5-12.7C24.8.1 34.6-4 45-4S65.2.1 72.6 7.4c15.2 15.2 15.2 40 0 55.2z","code":"f025"},{"name":"print","path":"M84 56H72v18c0 3.3-2.7 6-6 6H24c-3.3 0-6-2.7-6-6V56H6c-3.3 0-6-2.7-6-6V20c0-3.3 2.7-6 6-6h12V-4c0-3.3 2.7-6 6-6h42c3.3 0 6 2.7 6 6v18h12c3.3 0 6 2.7 6 6v30c0 3.3-2.7 6-6 6zM24 74h42V56H24v18zM66-4H24v30h42V-4zm18 24H72v12H18V20H6v30h78V20zm-23.5-6.5h-31v6h31v-6zm-19-12h-12v6h12v-6zM60 44h12v-6H60v6z","code":"f026"},{"name":"check-o","path":"M45 68c18.2 0 33-14.8 33-33S63.2 2 45 2 12 16.8 12 35s14.8 33 33 33m0 6C23.5 74 6 56.5 6 35S23.5-4 45-4s39 17.5 39 39-17.5 39-39 39z","code":"f027"},{"name":"search","path":"M86.1-1.9L59.2 25c4.2 5.2 6.8 11.8 6.8 19 0 16.6-13.4 30-30 30S6 60.6 6 44s13.4-30 30-30c7.2 0 13.8 2.5 19 6.8L81.9-6.1c.6-.6 1.4-.9 2.1-.9s1.5.3 2.1.9c1.2 1.2 1.2 3 0 4.2zM36 20c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z","code":"f028"},{"name":"plus","path":"M78 44H54v24c0 3.3-2.7 6-6 6h-6c-3.3 0-6-2.7-6-6V44H12c-3.3 0-6-2.7-6-6v-6c0-3.3 2.7-6 6-6h24V2c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v24h24c3.3 0 6 2.7 6 6v6c0 3.3-2.7 6-6 6z","code":"f029"},{"name":"sync","path":"M82.2 47.3H53.3l10.1 10.1C58.3 61.7 51.8 64 45 64c-16 0-29-13-29-29H4c0 22.6 18.4 41 41 41 10 0 19.5-3.6 27-10.1l10.2 10.2V47.3zM7.8-6.1L18 4.1C25.5-2.4 35-6 45-6c22.6 0 41 18.4 41 41H74C74 19 61 6 45 6c-6.8 0-13.3 2.3-18.5 6.7l10.1 10.1H7.7l.1-28.9z","code":"f030"},{"name":"upload","path":"M90 20.2C90 10.2 82.7 2 73.7 2H54v6h19.7C79.4 8 84 13.5 84 20.2c0 11.2-7.7 12.1-9 12.2l-3-.2v3.2C71.8 49.6 60.1 62 46.9 62c-9.4 0-17.7-6.5-21.3-16.6l-.8-2.2-2.4.3c-.5.1-1 .1-1.4.1-8.3 0-15-8-15-17.7S12.7 8 21 8h15V2H21C9.4 2 0 12.6 0 25.7c0 13 9.3 23.6 20.8 23.7C25.6 60.8 35.7 68 46.9 68c15.5 0 29.4-13.7 30.9-30 2-.5 4.6-1.6 6.9-3.7 3.5-3.3 5.3-8 5.3-14.1zm-29.1.7c.6-.6 1.4-.9 2.1-.9s1.5.3 2.1.9c1.2 1.2 1.2 3.1 0 4.2L45 45.2 24.9 25.1c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0L42 33.8V-1c0-1.7 1.3-3 3-3s3 1.3 3 3v34.8l12.9-12.9z","code":"f031"},{"name":"html","path":"M24 5c-.9 0-1.8.4-2.4 1.2l-21 27c-.8 1.1-.8 2.6 0 3.7l21 27c1 1.3 2.9 1.5 4.2.5 1.3-1 1.5-2.9.5-4.2L6.8 35 26.4 9.8c1-1.3.8-3.2-.5-4.2-.6-.4-1.3-.6-1.9-.6zm44.4 1.2l21 27c.8 1.1.8 2.6 0 3.7l-21 27c-1 1.3-2.9 1.5-4.2.5-1.3-1-1.5-2.9-.5-4.2L83.2 35 63.6 9.8c-1-1.3-.8-3.2.5-4.2.5-.4 1.2-.6 1.8-.6 1 0 1.9.4 2.5 1.2zM35.8-1.9l24 72c.5 1.6-.3 3.3-1.9 3.8-1.6.5-3.3-.3-3.8-1.9l-24-72c-.5-1.6.3-3.3 1.9-3.8.4-.2.7-.2 1-.2 1.3 0 2.4.8 2.8 2.1z","code":"f032"},{"name":"square","path":"M78 68V2H12v66h66m0 6H12c-3.3 0-6-2.7-6-6V2c0-3.3 2.7-6 6-6h66c3.3 0 6 2.7 6 6v66c0 3.3-2.7 6-6 6z","code":"f033"},{"name":"checkbox","path":"M78 68V2H12v66h66m0 6H12c-3.3 0-6-2.7-6-6V2c0-3.3 2.7-6 6-6h66c3.3 0 6 2.7 6 6v66c0 3.3-2.7 6-6 6zm-9-57v36c0 3.3-2.7 6-6 6H27c-3.3 0-6-2.7-6-6V17c0-3.3 2.7-6 6-6h36c3.3 0 6 2.7 6 6z","code":"f034"},{"name":"stop","path":"M70.7 2H19.3C15.2 2 12 5.3 12 9.3v51.4c0 4.1 3.3 7.3 7.3 7.3h51.3c4.1 0 7.3-3.3 7.3-7.3V9.4C78 5.3 74.7 2 70.7 2z","code":"f035"},{"name":"play","path":"M11 2.7v64.6c0 5.2 5.6 8.4 10.1 5.8l54.7-32.3c4.4-2.6 4.4-8.9 0-11.5L21.1-3.1C16.6-5.7 11-2.5 11 2.7z","code":"f036"},{"name":"pause","path":"M30.9 68H21c-3.3 0-6.1-2.7-6.1-6.1V8c0-3.3 2.7-6.1 6.1-6.1h9.9C34.2 1.9 37 4.6 37 8v53.9c0 3.4-2.7 6.1-6.1 6.1zM53 61.9V8c0-3.3 2.7-6.1 6.1-6.1H69c3.3 0 6.1 2.7 6.1 6.1v53.9c0 3.3-2.7 6.1-6.1 6.1h-9.9c-3.4 0-6.1-2.7-6.1-6.1z","code":"f037"}];
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1200 m-auto\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "ldIconFont\u003C\u002Fh1\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "icon font for loading.io UI\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep mt-4 mb-4\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"glyphs\" style=\"justify-content: center\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate glyphs
;(function(){
  var $$obj = glyphs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var glyph = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"glyph\""+pug_attr("onclick", "parse('" + glyph.name + "')", true, true)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"icon\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes(["i-" + glyph.name], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = glyph.name) ? "" : pug_interp));
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes(["i-" + glyph.name], [true]), false, true)+" style=\"font-size:15px\"") + "\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"code\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = glyph.code) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var glyph = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"glyph\""+pug_attr("onclick", "parse('" + glyph.name + "')", true, true)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"icon\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes(["i-" + glyph.name], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = glyph.name) ? "" : pug_interp));
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes(["i-" + glyph.name], [true]), false, true)+" style=\"font-size:15px\"") + "\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"code\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = glyph.code) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var i = $$obj[pug_index1];
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"glyph\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var i = $$obj[pug_index1];
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"glyph\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv md\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card m-4 position-relative w-50 m-auto\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-close\" style=\"position:absolute;top:10px;right:10px\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"float-right\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Forget Password? ";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Password ";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-lock\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Flabel\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" placeholder=\"This is a demonstration of how icons look like in use\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-success btn-block\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Pay $100 ";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-creditcard ml-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-text mt-4 mb-4\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Or\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group mb-2\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-flex justify-content-between align-items-baseline\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Monthly Pass ";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-flex justify-content-between align-items-baseline\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Yearly Pass ";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"float-right\" style=\"position:relative;top:48px\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-mail\" style=\"font-size:15px;margin-right:5px\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-mail\" style=\"font-size:24px;margin-right:5px\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-mail\" style=\"font-size:36px;margin-right:5px\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-mail\" style=\"font-size:48px;margin-right:5px\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ml-2\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "All include:\u003C\u002Flabel\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " Unlimited Access\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " Pro Features\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " Priority Support\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"float-right\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Cancel ";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-left ml-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-success\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Subscribe ";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-heart ml-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mt-1 text-center\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "world ";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-heart text-danger\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " peace\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/ldcover/main/ldcv.min.js");
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("/js/index.js");
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 