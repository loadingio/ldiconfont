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
pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
for (var i = 0; i < count; i++)
{
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
}
};
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
pug_mixins["css"]("/assets/lib/bootstrap/main/css/bootstrap.min.css");
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
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"base w-640 rwd\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body text-center\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute\" style=\"line-height:1em;top:.5em;right:.5em\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "Ooops, Incompatible.\u003C\u002Fh1\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "We don't support Internet Explorer and Edge.\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-auto text-left text-muted\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "Loading.io is made possible with Animated SVG and other modern web technologies. Unfortunately IE and Edge";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger text-sm\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + " don't support them.\u003C\u002Fp\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "You can keep browsing our website with IE\u002FEdge, but things won't work and will break unexpectedly. We suggest you to use browsers like Google Chrome, Mozilla Firefox or Apple Safari.\u003C\u002Fp\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary btn-block btn-lg mr-2\" data-ldcv-set=\"\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + " Close This Popup\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center mt-4 text-sm text-muted\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + " SVG SMIL will be supported in ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fcaniuse.com\u002F#feat=svg-smil\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + "upcoming version of Edge\u003C\u002Fa\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Fldcv.pug";
pug_html = pug_html + ".\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cnav class=\"navbar navbar-expand-lg navbar-dark bg-dark text-light\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"navbar-brand\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Navbar\u003C\u002Fa\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cbutton class=\"navbar-toggler\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-bars\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cul class=\"navbar-nav mr-auto\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item active\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "item\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cul class=\"navbar-nav\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 bg-light\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto py-4\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-4\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 d-flex\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Use Case ";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Csup\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-heart\"\u003E\u003C\u002Fi\u003E\u003C\u002Fsup\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary mr-2\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-eye\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " GitHub \u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary mr-2\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-eye\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " GitHub \u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-eye\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " GitHub \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "this page demonstrate the looks and feels when using ldiconfont.\u003C\u002Fp\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav nav-pills mr-auto\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link active\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Hello World\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow\" style=\"width:20em\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item px-3\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 mx-2 font-weight-bold\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Open in ...\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group input-group-sm my-2\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group-append\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm text-muted mb-3\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "some dummy text here\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
// iterate [1,2,3,4]
;(function(){
  var $$obj = [1,2,3,4];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item d-flex p-3 border-top\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 mx-3\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Open in Visual Studio\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var i = $$obj[pug_index0];
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item d-flex p-3 border-top\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 mx-3\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Open in Visual Studio\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-9\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav nav-tabs\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link active\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-item ml-auto\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Active ";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-question\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"border border-top-0 p-4 mb-4\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "All include:\u003C\u002Flabel\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-4\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Unlimited Access\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Pro Features\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Priority Support\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-secondary mr-2\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Enable Plan ";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-check\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" ld=\"more-detail\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "More Detail ";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4\"\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-header\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-home\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"ml-2\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Some description about this ...\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " 20 minutes\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group list-group-flush\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7,8,9]
;(function(){
  var $$obj = [1,2,3,4,5,6,7,8,9];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var i = $$obj[pug_index1];
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-flex\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Item 1\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "some descriptions... ";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "22 minutes ago\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var i = $$obj[pug_index1];
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-flex\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Item 1\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "some descriptions... ";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "22 minutes ago\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "README.md\u003C\u002Fdiv\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-2\"\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-2\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-2\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-4 pb-4\"\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ch1 id=\"ldview\"\u003EldView\u003C\u002Fh1\u003E\n\u003Cp\u003EA simple, logic-less client side template engine.\u003C\u002Fp\u003E\n\u003Ch2 id=\"usage\"\u003EUsage\u003C\u002Fh2\u003E\n\u003Cp\u003EldView works by defining what elements are and how should they be processed. Instead of defining how html should be rendered inside DOM, we name elements and assign processors in JavaScript according to their names.\u003C\u002Fp\u003E\n\u003Cp\u003EFor example, following code names three DIVs with &quot;ld&quot; attributes in &quot;plan free&quot;, &quot;plan month&quot;, and &quot;plan year&quot;:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Ebody\n  div(ld=&quot;plan free&quot;)\n  div(ld=&quot;plan month&quot;)\n  div(ld=&quot;plan year&quot;)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003ETo bind the corresponding processor, create a new ldView object with a handler object:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eview = new ldView do\n  root: document.body\n  handler: do\n    # this example actually demonstrates how to do a if\u002Felse or switch\u002Fcase statement.\n    plan: ({node, names, name, container, idx, nodes, context, local}) -&gt;\n      node.style.display = (if currentPlan in names =&gt; &#39;block&#39; else &#39;none&#39;)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 123;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ch5 class=\"d-flex\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "About\u003C\u002Fdiv\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-gear\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fh5\u003E";
;pug_debug_line = 125;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 125;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "no description, website, or tipcs provided.\u003C\u002Fp\u003E";
;pug_debug_line = 126;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 126;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex text-truncate align-items-center\"\u003E";
;pug_debug_line = 127;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-link mr-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 128;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"text-truncate\" href=\"https:\u002F\u002Fgithub.com\u002Floadingio\u002Fldiconfont\"\u003E";
;pug_debug_line = 128;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "https:\u002F\u002Fgithub.com\u002Floadingio\u002Fldiconfont\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " Read More\u003C\u002Fp\u003E";
;pug_debug_line = 130;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 131;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ch5 class=\"d-flex\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Options\u003C\u002Fdiv\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-gear\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fh5\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-chcek\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-radio mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 135;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label\"\u003E";
;pug_debug_line = 135;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Radio ( Checked )\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 136;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-chcek\"\u003E";
;pug_debug_line = 137;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-circle mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label\"\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Radio\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 139;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-chcek\"\u003E";
;pug_debug_line = 140;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-checkbox mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 141;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Checkbox ( Checked )\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 142;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-chcek\"\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-square mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 144;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label\"\u003E";
;pug_debug_line = 144;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Checkbox\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 146;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-2\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "Reference Site\u003C\u002Fh4\u003E";
;pug_debug_line = 148;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 149;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 149;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "https:\u002F\u002Fgithub.com\u002Floadingio\u002Fldiconfont\u003C\u002Fli\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_html = pug_html + "https:\u002F\u002Fsentry.io\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 151;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_mixins["nbr"](4);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/bootstrap.native/main/bootstrap-native.min.js");
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/ldcover/main/ldcv.min.js");
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/ldview/main/ldview.min.js");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002Fldif\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 153;pug_debug_filename = "src\u002Fpug\u002Fdemo\u002Findex.pug";
pug_mixins["script"]("/js/demo/index.js");
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 