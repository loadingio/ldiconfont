(function(it){
  return it.apply({});
})(function(){
  var ldcv, view, parse, choose, links;
  ldcv = {
    view: new ldcover({
      root: '.ldcv.ldcv-view'
    }),
    font: new ldcover({
      root: '.ldcv.ldcv-font'
    })
  };
  view = {};
  parse = function(name){
    ld$.find(ldcv.view.root(), ".ldcv.ldcv-view i").map(function(n, i){
      var cls;
      cls = n.getAttribute('class');
      cls = cls.replace(/i-\S+/g, '');
      n.setAttribute('class', cls);
      return n.classList.add("i-" + name);
    });
    return ldcv.view.toggle(true);
  };
  ld$.fetch("assets/lib/ldif/dev/ldif.json", {
    method: 'GET'
  }, {
    type: 'json'
  }).then(function(ldif){
    return view.glyphs = new ldview({
      root: document.body,
      handler: {
        glyph: {
          key: function(it){
            return it.name;
          },
          list: function(){
            return ldif;
          },
          view: {
            action: {
              click: {
                cell: function(arg$){
                  var context;
                  context = arg$.context;
                  return parse(context.name);
                }
              }
            },
            text: {
              name: function(arg$){
                var context;
                context = arg$.context;
                return context.name;
              },
              code: function(arg$){
                var context;
                context = arg$.context;
                return context.code;
              }
            },
            handler: {
              icon: function(arg$){
                var node, context;
                node = arg$.node, context = arg$.context;
                return node.classList.add("i-" + context.name);
              }
            }
          }
        }
      }
    });
  });
  view.ldcv = new ldview({
    root: ldcv.view.root(),
    action: {
      change: {
        fontfamily: function(arg$){
          var views, node;
          views = arg$.views, node = arg$.node;
          return views[0].get("viewer").style.fontFamily = node.value;
        },
        fontsize: function(arg$){
          var views, node;
          views = arg$.views, node = arg$.node;
          return views[0].get("viewer").style.fontSize = node.value + "px";
        },
        iconname: function(arg$){
          var views, node;
          views = arg$.views, node = arg$.node;
          return views[0].get("icon").setAttribute('class', "i-" + node.value);
        },
        iconsize: function(arg$){
          var views, node;
          views = arg$.views, node = arg$.node;
          return views[0].get("icon").style.fontSize = node.value + "em";
        },
        verticaloffset: function(arg$){
          var views, node, ref$;
          views = arg$.views, node = arg$.node;
          return ref$ = views[0].get("icon").style, ref$.position = 'relative', ref$.top = node.value + "px", ref$;
        }
      },
      click: {
        morefont: function(){
          return ldcv.font.toggle();
        },
        hint: function(arg$){
          var views;
          views = arg$.views;
          views[0].get("viewer").classList.toggle('active');
          return views[0].get("hint-text").innerText = views[0].get("viewer").classList.contains('active') ? "On" : "Off";
        },
        useflexbox: function(arg$){
          var views;
          views = arg$.views;
          views[0].get("inner").classList.toggle('d-flex');
          views[0].get("inner").classList.toggle('align-items-center');
          views[0].get("inner").classList.toggle('justify-content-center');
          return views[0].get("flexbox-text").innerText = views[0].get("inner").classList.contains('d-flex') ? "On" : "Off";
        }
      }
    }
  });
  choose = new ChooseFont({
    root: ld$.find(ldcv.font.root(), '.chooser', 0),
    metaUrl: 'assets/lib/choosefont.js/main/dist/fontinfo/meta.json',
    base: "https://plotdb.github.io/xl-fontset/alpha"
  });
  choose.on('choose', function(it){
    return xfl.load(it.path, {}, function(font){
      font.sync('Hga國一ば뮤');
      view.ldcv.get('viewer').style.fontFamily = it.name;
      return ldcv.font.toggle(false);
    });
  });
  choose.init();
  links = ['line-24-bold', 'line-16-light'].map(function(n){
    var link;
    link = document.createElement('link');
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    link.setAttribute('href', "assets/lib/ldif/dev/" + n + "/index.min.css");
    return {
      node: link,
      name: n
    };
  });
  document.head.appendChild(links[0].node);
  return view.body = new ldview({
    root: document.body,
    handler: {
      'switch': {
        list: function(){
          return links;
        },
        key: function(it){
          return it.name;
        },
        action: {
          click: function(arg$){
            var views, data;
            views = arg$.views, data = arg$.data;
            links.map(function(it){
              if (it.node.parentNode) {
                return it.node.parentNode.removeChild(it.node);
              }
            });
            document.head.appendChild(data.node);
            return views[0].render();
          }
        },
        text: function(arg$){
          var node, data;
          node = arg$.node, data = arg$.data;
          return data.name;
        },
        handler: function(arg$){
          var node, data;
          node = arg$.node, data = arg$.data;
          return node.classList.toggle('active', data.node.parentNode);
        }
      }
    }
  });
});