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
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, hashfile, libLoader, md5, scriptLoader, tabs, url, version) {
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














var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













pug_html = pug_html + "\u003Chead\u003E\u003Cbase href=\"..\u002F\"\u003E";
pug_mixins["css"]("assets/lib/bootstrap/main/dist/css/bootstrap.min.css");
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
pug_mixins["css"]("assets/lib/choosefont.js/main/dist/choosefont.min.css");
pug_mixins["css"]("https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Mono");
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
pug_mixins["css"]("css/index.css");
pug_mixins["css"]("assets/lib/ldif/dev/index.min.css");
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{font-family:BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#334}.dropdown-menu{box-shadow:0 4px 12px rgba(0,0,0,0.1)}.fvac{display:flex;align-items:center}i.ldif{font-size:16px;opacity:.8;line-height:1}.icon{width:1em;height:1em;border-radius:.5em;background:#ddd;margin-right:.5em}.tabs{display:flex;align-items:center}.tabs .tab{padding:1em 1.6em 1em 1.4em;display:flex;align-items:center;border-bottom:2px solid transparent}.tabs .tab.active{border-bottom-color:#f72}.file-list .list-group-item{display:flex;align-items:center}.file-list .list-group-item .name{width:8em}.file-list .list-group-item .desc{width:8em;flex:1 0 auto}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
var tabs = [
  ["code","Code", 0],
  ["exclamation-circle","Issues", 0],
  ["merge","Pull requests", 0],
  ["play-circle","Actions", 0],
  ["kanban","Projects", 0],
  ["book","Wiki", 0],
  ["shield","Security", 1],
  ["line-chart","Insights", 0],
  ["gear","Settings", 0]
]

pug_html = pug_html + "\u003Cdiv class=\"w-100 bg-dark text-light fvac p-3\"\u003E\u003Cdiv class=\"icon\" style=\"font-size:2em\"\u003E\u003C\u002Fdiv\u003E\u003Cinput class=\"form-control form-control-sm bg-dark text-light border-secondary\" style=\"width:200px\" placeholder=\"search or jump to ...\"\u003E\u003Cdiv class=\"mx-3\"\u003EPull Requests\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-3\"\u003EIssues\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-3\"\u003ECodespace\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-3\"\u003EMarketplace\u003C\u002Fdiv\u003E\u003Cdiv class=\"mx-3\"\u003EExplore\u003C\u002Fdiv\u003E\u003Cdiv class=\"ml-auto\"\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"ldif i-bell mx-3\"\u003E\u003C\u002Fi\u003E\u003Ci class=\"ldif i-plus mx-3\"\u003E\u003C\u002Fi\u003E\u003Ci class=\"ldif i-question-circle mx-3\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"icon mx-3\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-100 bg-light\" style=\"border-bottom:1px solid #ccc\"\u003E\u003Cdiv class=\"w-1024 rwd mx-auto\"\u003E\u003Cdiv class=\"py-4\"\u003E\u003Cdiv class=\"fvac\"\u003E\u003Cdiv class=\"text-lg fvac flex-grow-1\"\u003E\u003Cdiv class=\"icon\"\u003E\u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003EPlotDB\u003C\u002Fa\u003E\u003Cspan class=\"mx-2\"\u003E\u002F\u003C\u002Fspan\u003E\u003Ca href=\"#\"\u003Eui.copycat\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-group ml-2 shadow-sm\"\u003E\u003Cdiv class=\"btn-group\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary fvac dropdown-toggle\" data-toggle=\"dropdown\"\u003E\u003Ci class=\"ldif i-eye-slash mr-1\"\u003E\u003C\u002Fi\u003E Unwatch\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary bg-white\"\u003E2\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-group ml-2 shadow-sm\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary fvac\"\u003E\u003Ci class=\"ldif i-star mr-1\"\u003E\u003C\u002Fi\u003E Star\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary bg-white\"\u003E56\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-group ml-2 shadow-sm\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary fvac\"\u003E\u003Ci class=\"ldif i-branch mr-1\"\u003E\u003C\u002Fi\u003E Fork\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary bg-white\"\u003E6\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tabs\"\u003E";
// iterate tabs
;(function(){
  var $$obj = tabs;
  if ('number' == typeof $$obj.length) {
      for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
        var n = $$obj[$index];
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["tab",($index == 1 ? "active" : "")], [false,true]), false, true)) + "\u003E\u003Ci" + (pug_attr("class", pug_classes(["ldif","mr-1",`i-${n[0]}`], [false,false,true]), false, true)) + "\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"name\"\u003E" + (pug_escape(null == (pug_interp = n[1]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"notify\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;
      var n = $$obj[$index];
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["tab",($index == 1 ? "active" : "")], [false,true]), false, true)) + "\u003E\u003Ci" + (pug_attr("class", pug_classes(["ldif","mr-1",`i-${n[0]}`], [false,false,true]), false, true)) + "\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"name\"\u003E" + (pug_escape(null == (pug_interp = n[1]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"notify\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-9\"\u003E\u003Cdiv class=\"alert alert-warning d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Ci class=\"ldif i-alert mr-1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003EWe found potential security vulnerabilities in your dependencies.\u003C\u002Fb\u003E\u003Cdiv class=\"text-sm text-muted\"\u003EOnly the owner of this repository can see this message.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary bg-light\"\u003ESee Dependabot alerts\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex align-items-center my-3\"\u003E\u003Cdiv class=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-outline-secondary fvac dropdown-toggle\" data-toggle=\"dropdown\"\u003E\u003Ci class=\"ldif i-branch mr-1\"\u003E\u003C\u002Fi\u003E master\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-text fvac\"\u003E\u003Ci class=\"ldif i-branch mr-1\"\u003E\u003C\u002Fi\u003E 4 \u003Cspan class=\"text-muted ml-1\"\u003Ebranches\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-text fvac\"\u003E\u003Ci class=\"ldif i-tag mr-1\"\u003E\u003C\u002Fi\u003E 0 \u003Cspan class=\"text-muted ml-1\"\u003Etags\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary mr-2\"\u003EGo to file\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-outline-secondary mr-2 dropdown-toggle\" data-toggle=\"dropdown\"\u003EAdd file\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right\"\u003E\u003Cdiv class=\"dropdown-item\"\u003ECreate new file\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item\"\u003EUpload files\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-success dropdown-toggle fvac\" data-toggle=\"dropdown\"\u003E\u003Ci class=\"ldif i-download mr-1\"\u003E\u003C\u002Fi\u003E Code\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right\" style=\"width:300px\"\u003E\u003Cdiv class=\"px-4 py-3 border-bottom\"\u003E\u003Cdiv class=\"fvac\"\u003E\u003Ci class=\"ldif i-terminal mr-3\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"flex-grow-1\"\u003EClone\u003C\u002Fdiv\u003E\u003Ci class=\"ldif-question-circle\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fvac text-sm\"\u003E\u003Cdiv class=\"py-2 mr-3\"\u003EHTTPS\u003C\u002Fdiv\u003E\u003Cdiv class=\"py-2 mr-3\"\u003ESSH\u003C\u002Fdiv\u003E\u003Cdiv class=\"py-2 mr-3\"\u003EGitHub CLI\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"input-group mb-2\"\u003E\u003Cinput class=\"form-control form-control-sm bg-light\"\u003E\u003Cdiv class=\"input-group-append\"\u003E\u003Cdiv class=\"btn btn-outline-secondary fvac py-0\"\u003E\u003Ci class=\"ldif i-clipboard\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-muted text-sm\"\u003EWork fast with our official CLI. \u003Ca href=\"#\"\u003ELearn more.\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item fvac py-3 border-bottom\"\u003E\u003Ci class=\"ldif i-desktop mr-3\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"flex-grow-1\"\u003EOpen with Codespaces\u003C\u002Fdiv\u003E \u003Ci class=\"ldif i-dart-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item fvac py-3\"\u003E\u003Ci class=\"ldif i-zip mr-3\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"flex-grow-1\"\u003EDownload ZIP\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card mb-4\"\u003E\u003Cdiv class=\"card-header py-3\" style=\"background:#def\"\u003E\u003Cdiv class=\"fvac\"\u003E\u003Cdiv class=\"icon\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003Ezbryikt\u003C\u002Fb\u003E move attribution of sound files in README\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-success mr-2\"\u003E\u003Ci class=\"ldif i-check\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-muted mr-2\"\u003E5739a19\u003C\u002Fdiv\u003E\u003Cspan class=\"mr-2\"\u003Eon Dec 16, 2015\u003C\u002Fspan\u003E\u003Ci class=\"ldif i-history mx-2\"\u003E\u003C\u002Fi\u003E\u003Cspan\u003E14 commits\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"file-list list-group list-group-flush\"\u003E";
// iterate ["assets","img","res","src","static/css"]
;(function(){
  var $$obj = ["assets","img","res","src","static/css"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var n = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"list-group-item\"\u003E\u003Ci class=\"ldif i-folder mr-2\" style=\"opacity:.6\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"name\"\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ESome Randome Description ...\u003C\u002Fdiv\u003E\u003Cdiv class=\"time\"\u003E5 years ago\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var n = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"list-group-item\"\u003E\u003Ci class=\"ldif i-folder mr-2\" style=\"opacity:.6\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"name\"\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ESome Randome Description ...\u003C\u002Fdiv\u003E\u003Cdiv class=\"time\"\u003E5 years ago\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

// iterate ["README.md","LICENSE","main.ls","package.json"]
;(function(){
  var $$obj = ["README.md","LICENSE","main.ls","package.json"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var n = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv class=\"list-group-item\"\u003E\u003Ci class=\"ldif i-file mr-2\" style=\"opacity:.6\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"name\"\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ESome Randome Description ...\u003C\u002Fdiv\u003E\u003Cdiv class=\"time\"\u003E5 years ago\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var n = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv class=\"list-group-item\"\u003E\u003Ci class=\"ldif i-file mr-2\" style=\"opacity:.6\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"name\"\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ESome Randome Description ...\u003C\u002Fdiv\u003E\u003Cdiv class=\"time\"\u003E5 years ago\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card mb-4\"\u003E\u003Cdiv class=\"card-body\"\u003E\u003Cdiv class=\"fvac mb-4 pb-4\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003EREADME.md\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"ldif i-pen\"\u003E\u003C\u002Fi\u003E\u003Ci class=\"ldif i-trashcan ml-4\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ch1 id=\"uicopycat\"\u003Eui.copycat\u003C\u002Fh1\u003E\n\u003Cp\u003Ecopy ui from various sites to learn how they design things.\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-3\"\u003E\u003Cdiv class=\"fvac my-3\" style=\"font-size:1.2em\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003EAbout\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"ldif i-gear\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"text-muted\"\u003ENo description, website, or topics provided.\u003C\u002Fp\u003E\u003Cdiv class=\"fvac my-3\"\u003E\u003Ci class=\"ldif i-link mr-2\"\u003E\u003C\u002Fi\u003E \u003Ca href=\"#\"\u003Ezbryikt.github.io\u002Fui.copycat\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex flex-wrap text-sm\"\u003E";
// iterate ["mockup","copycat","ui"]
;(function(){
  var $$obj = ["mockup","copycat","ui"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var n = $$obj[pug_index5];
pug_html = pug_html + "\u003Ca class=\"mr-2\" href=\"#\" style=\"padding:.125em 1em;border-radius:2em;background:#def\"\u003E\u003Cb\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var n = $$obj[pug_index5];
pug_html = pug_html + "\u003Ca class=\"mr-2\" href=\"#\" style=\"padding:.125em 1em;border-radius:2em;background:#def\"\u003E\u003Cb\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"fvac my-3\"\u003E\u003Ci class=\"ldif i-book mr-2\"\u003E\u003C\u002Fi\u003E Readme\u003C\u002Fdiv\u003E\u003Cdiv class=\"fvac my-3\"\u003E\u003Ci class=\"ldif i-certificate mr-2\"\u003E\u003C\u002Fi\u003E MIT License\u003C\u002Fdiv\u003E\u003Chr class=\"my-4\"\u003E\u003Cdiv class=\"fvac my-3\" style=\"font-size:1.2em\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003ERelease\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-muted\"\u003ENo releases published\u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003ECreate a new release\u003C\u002Fa\u003E\u003Chr class=\"my-4\"\u003E\u003Cdiv class=\"fvac my-3\" style=\"font-size:1.2em\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003EPackages\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-muted\"\u003ENo packages published\u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003EPublish your first package\u003C\u002Fa\u003E\u003Chr class=\"my-4\"\u003E\u003Cdiv class=\"fvac my-3\" style=\"font-size:1.2em\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003EContributors\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rounded-circle bg-light text-center\" style=\"line-height:1em;width:1em;height:1em;\"\u003E\u003Cdiv style=\"vertical-align:center;font-size:10px\"\u003E2\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fvac pb-2\"\u003E\u003Cdiv class=\"icon mr-2 text-lg\"\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003Ezbryikt\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fvac pb-2\"\u003E\u003Cdiv class=\"icon mr-2 text-lg\"\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003Etkirby\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Chr class=\"my-4\"\u003E\u003Cdiv class=\"fvac my-3\" style=\"font-size:1.2em\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cb\u003ELanguages\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"progress\"\u003E\u003Cdiv class=\"progress-bar\" style=\"width:50%\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"progress-bar\" style=\"width:30%;background:#9f9\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fvac flex-wrap\"\u003E";
// iterate ["HTML","CSS","JavaScript"]
;(function(){
  var $$obj = ["HTML","CSS","JavaScript"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var n = $$obj[pug_index6];
pug_html = pug_html + "\u003Cdiv class=\"item fvac text-sm mr-4 mt-2\"\u003E\u003Cdiv class=\"icon\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"name mx-1\"\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"percent text-muted\"\u003E55%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var n = $$obj[pug_index6];
pug_html = pug_html + "\u003Cdiv class=\"item fvac text-sm mr-4 mt-2\"\u003E\u003Cdiv class=\"icon\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"name mx-1\"\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"percent text-muted\"\u003E55%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-1024 rwd mx-auto border-top mt-4 py-4\"\u003E\u003Cdiv class=\"py-4 fvac justify-content-between\"\u003E\u003Cdiv class=\"fvac\"\u003E\u003Ci class=\"ldif i-github mr-2\"\u003E\u003C\u002Fi\u003E\u003Cdiv\u003E© 2020 GitHub, Inc.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ca href=\"#\"\u003ETerms\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EPrivacy\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003ESecurity\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EStatus\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EHelp\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EContact GitHub\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EPricing\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EAPI\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003ETraining\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EBlog\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]("assets/lib/xfl/xfl.min.js");
pug_mixins["script"]("assets/lib/choosefont.js/main/dist/choosefont.min.js");
pug_mixins["script"]("assets/lib/bootstrap.native/main/dist/bootstrap-native-v4.min.js");
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/index.min.js");
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
pug_mixins["script"]("assets/lib/ldview/main/index.js");
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
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "tabs" in locals_for_with ?
        locals_for_with.tabs :
        typeof tabs !== 'undefined' ? tabs : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 