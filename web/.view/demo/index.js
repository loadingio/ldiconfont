 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, hashfile, libLoader, md5, scriptLoader, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
pug_html = pug_html + "\u003Chtml\u003E";
if (!(libLoader || scriptLoader)) {
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
if(!decache) { decache = (version? "?v=" + version : ""); }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
if(!cssLoader) { cssLoader = {url: {}}; }
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
cssLoader.config = (config ? config : {});
if (!cssLoader.url[url]) {
cssLoader.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }







}
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
function ellipsis(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
}

pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
for (var i = 0; i < count; i++)
{
pug_html = pug_html + "\u003Cbr\u003E";
}
};






var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













pug_html = pug_html + "\u003Chead\u003E\u003Cbase href=\"..\"\u003E";
pug_mixins["css"]("assets/lib/bootstrap/main/dist/css/bootstrap.min.css");
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
pug_mixins["css"]("assets/lib/choosefont.js/main/dist/choosefont.min.css");
pug_mixins["css"]("https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Mono");
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
pug_mixins["css"]("css/index.css");
pug_mixins["css"]("assets/lib/ldif/dev/ldif.css");
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Rubik:wght@300;400;500&amp;display=swap\" rel=\"stylesheet\"\u003E\u003Cstyle type=\"text\u002Fcss\"\u003E\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"ldcv\"\u003E\u003Cdiv class=\"base w-640 rwd\"\u003E\u003Cdiv class=\"inner card\"\u003E\u003Cdiv class=\"card-body text-center\"\u003E\u003Cdiv class=\"position-absolute\" style=\"line-height:1em;top:.5em;right:.5em\"\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-4\"\u003E\u003Ch1\u003EOoops, Incompatible.\u003C\u002Fh1\u003E\u003Cp\u003EWe don't support Internet Explorer and Edge.\u003C\u002Fp\u003E\u003Cbr\u003E\u003Cdiv class=\"m-auto text-left text-muted\"\u003E\u003Cp\u003ELoading.io is made possible with Animated SVG and other modern web technologies. Unfortunately IE and Edge\u003Cspan class=\"text-danger text-sm\"\u003E\u003Ci class=\"i-chevron-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E don't support them.\u003C\u002Fp\u003E\u003Cp\u003EYou can keep browsing our website with IE\u002FEdge, but things won't work and will break unexpectedly. We suggest you to use browsers like Google Chrome, Mozilla Firefox or Apple Safari.\u003C\u002Fp\u003E\u003Cbr\u003E\u003Cdiv class=\"btn btn-primary btn-block btn-lg mr-2\" data-ldcv-set=\"\"\u003E\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E Close This Popup\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-center mt-4 text-sm text-muted\"\u003E\u003Cspan class=\"text-danger\"\u003E\u003Ci class=\"i-chevron-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E SVG SMIL will be supported in \u003Ca href=\"https:\u002F\u002Fcaniuse.com\u002F#feat=svg-smil\"\u003Eupcoming version of Edge\u003C\u002Fa\u003E.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"navbar navbar-expand-lg navbar-dark bg-dark text-light\"\u003E\u003Ca class=\"navbar-brand\"\u003ENavbar\u003C\u002Fa\u003E\u003Cbutton class=\"navbar-toggler\"\u003E\u003Ci class=\"i-bars\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003Cul class=\"navbar-nav mr-auto\"\u003E\u003Cli class=\"nav-item active\"\u003E\u003Ca class=\"nav-link\"\u003Eitem\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cul class=\"navbar-nav\"\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"w-100 bg-light\"\u003E\u003Cdiv class=\"w-1024 rwd mx-auto py-4\"\u003E\u003Cdiv class=\"my-4\"\u003E\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1 d-flex\"\u003E\u003Ch1\u003EUse Case \u003Csup\u003E\u003Ci class=\"i-heart\"\u003E\u003C\u002Fi\u003E\u003C\u002Fsup\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary mr-2\"\u003E\u003Ci class=\"i-eye\"\u003E\u003C\u002Fi\u003E GitHub \u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary mr-2\"\u003E\u003Ci class=\"i-eye\"\u003E\u003C\u002Fi\u003E GitHub \u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary\"\u003E\u003Ci class=\"i-eye\"\u003E\u003C\u002Fi\u003E GitHub \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cp\u003Ethis page demonstrate the looks and feels when using ldiconfont.\u003C\u002Fp\u003E\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cdiv class=\"nav nav-pills mr-auto\"\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link active\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003EActive\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003EActive\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003EActive\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\u003EHello World\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow\" style=\"width:20em\"\u003E\u003Cdiv class=\"dropdown-item px-3\"\u003E\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1 mx-2 font-weight-bold\"\u003E Open in ...\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"input-group input-group-sm my-2\"\u003E\u003Cinput class=\"form-control\"\u003E\u003Cdiv class=\"input-group-append\"\u003E\u003Cdiv class=\"btn btn-outline-secondary\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm text-muted mb-3\"\u003Esome dummy text here\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
// iterate [1,2,3,4]
;(function(){
  var $$obj = [1,2,3,4];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var i = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item d-flex p-3 border-top\"\u003E\u003Cdiv\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1 mx-3\"\u003EOpen in Visual Studio\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var i = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item d-flex p-3 border-top\"\u003E\u003Cdiv\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1 mx-3\"\u003EOpen in Visual Studio\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-9\"\u003E\u003Cdiv class=\"nav nav-tabs\"\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link active\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E Active\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003EActive\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item\"\u003E\u003Ca class=\"nav-link\"\u003EActive\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"nav-item ml-auto\"\u003E\u003Ca class=\"nav-link\"\u003EActive \u003Ci class=\"i-question\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"border border-top-0 p-4 mb-4\"\u003E\u003Clabel\u003EAll include:\u003C\u002Flabel\u003E\u003Cdiv class=\"mb-4\"\u003E\u003Cdiv\u003E\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E Unlimited Access\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E Pro Features\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ci class=\"i-check text-success\"\u003E\u003C\u002Fi\u003E Priority Support\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-secondary mr-2\"\u003EEnable Plan \u003Ci class=\"i-check\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary\" ld=\"more-detail\"\u003EMore Detail \u003Ci class=\"i-chevron-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card mb-4\"\u003E\u003Cdiv class=\"card-header\"\u003E\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Ci class=\"i-home\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"ml-2\"\u003ESome description about this ...\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ci class=\"i-doc mr-1\"\u003E\u003C\u002Fi\u003E 20 minutes\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"list-group list-group-flush\"\u003E";
// iterate [1,2,3,4,5,6,7,8,9]
;(function(){
  var $$obj = [1,2,3,4,5,6,7,8,9];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var i = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Ci class=\"i-doc mr-2\"\u003E\u003C\u002Fi\u003E\u003Cspan\u003EItem 1\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003Esome descriptions... \u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003E22 minutes ago\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var i = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"list-group-item d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Ci class=\"i-doc mr-2\"\u003E\u003C\u002Fi\u003E\u003Cspan\u003EItem 1\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003Esome descriptions... \u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003E22 minutes ago\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card mb-4\"\u003E\u003Cdiv class=\"card-body\"\u003E\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003EREADME.md\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-2\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-2\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-2\"\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"px-4 pb-4\"\u003E\u003Cdiv\u003E\u003Ch1 id=\"ldview\"\u003EldView\u003C\u002Fh1\u003E\n\u003Cp\u003EA simple, logic-less client side template engine.\u003C\u002Fp\u003E\n\u003Ch2 id=\"usage\"\u003EUsage\u003C\u002Fh2\u003E\n\u003Cp\u003EldView works by defining what elements are and how should they be processed. Instead of defining how html should be rendered inside DOM, we name elements and assign processors in JavaScript according to their names.\u003C\u002Fp\u003E\n\u003Cp\u003EFor example, following code names three DIVs with &quot;ld&quot; attributes in &quot;plan free&quot;, &quot;plan month&quot;, and &quot;plan year&quot;:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Ebody\n  div(ld=&quot;plan free&quot;)\n  div(ld=&quot;plan month&quot;)\n  div(ld=&quot;plan year&quot;)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ETo bind the corresponding processor, create a new ldView object with a handler object:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eview = new ldView do\n  root: document.body\n  handler: do\n    # this example actually demonstrates how to do a if\u002Felse or switch\u002Fcase statement.\n    plan: ({node, names, name, container, idx, nodes, context, local}) -&gt;\n      node.style.display = (if currentPlan in names =&gt; &#39;block&#39; else &#39;none&#39;)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-3\"\u003E\u003Ch5 class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003EAbout\u003C\u002Fdiv\u003E \u003Ci class=\"i-gear\"\u003E\u003C\u002Fi\u003E\u003C\u002Fh5\u003E\u003Cp\u003Eno description, website, or tipcs provided.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cdiv class=\"d-flex text-truncate align-items-center\"\u003E\u003Ci class=\"i-link mr-2\"\u003E\u003C\u002Fi\u003E\u003Ca class=\"text-truncate\" href=\"https:\u002F\u002Fgithub.com\u002Floadingio\u002Fldiconfont\"\u003Ehttps:\u002F\u002Fgithub.com\u002Floadingio\u002Fldiconfont\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E Read More\u003C\u002Fp\u003E\u003Chr\u003E\u003Cbr\u003E\u003Ch5 class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003EOptions\u003C\u002Fdiv\u003E \u003Ci class=\"i-gear\"\u003E\u003C\u002Fi\u003E\u003C\u002Fh5\u003E\u003Cdiv class=\"form-chcek\"\u003E\u003Ci class=\"i-radio mr-1\"\u003E\u003C\u002Fi\u003E\u003Clabel class=\"form-check-label\"\u003ERadio ( Checked )\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-chcek\"\u003E\u003Ci class=\"i-circle mr-1\"\u003E\u003C\u002Fi\u003E\u003Clabel class=\"form-check-label\"\u003ERadio\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-chcek\"\u003E\u003Ci class=\"i-checkbox mr-1\"\u003E\u003C\u002Fi\u003E\u003Clabel class=\"form-check-label\"\u003ECheckbox ( Checked )\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-chcek\"\u003E\u003Ci class=\"i-square mr-1\"\u003E\u003C\u002Fi\u003E\u003Clabel class=\"form-check-label\"\u003ECheckbox\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"py-2\"\u003E\u003C\u002Fdiv\u003E\u003Ch4\u003EReference Site\u003C\u002Fh4\u003E\u003Cul\u003E\u003Cli\u003Ehttps:\u002F\u002Fgithub.com\u002Floadingio\u002Fldiconfont\u003C\u002Fli\u003E\u003Cli\u003Ehttps:\u002F\u002Fsentry.io\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
pug_mixins["nbr"](4);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_mixins["script"]("assets/lib/xfl/xfl.min.js");
pug_mixins["script"]("assets/lib/choosefont.js/main/dist/choosefont.min.js");
pug_mixins["script"]("assets/lib/bootstrap.native/main/dist/bootstrap-native-v4.min.js");
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/index.min.js");
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
pug_mixins["script"]("assets/lib/ldview/main/index.js");
pug_mixins["script"]("/js/demo/index.js");
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 