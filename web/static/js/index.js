var ldcv, parse, view, choose, links;
ldcv = {
  view: new ldcover({
    root: '.ldcv.ldcv-view'
  }),
  font: new ldcover({
    root: '.ldcv.ldcv-font'
  })
};
parse = function(name){
  ld$.find(".ldcv.ldcv-view i").map(function(n, i){
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
  var view;
  return view = new ldview({
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
view = new ldview({
  root: '.ldcv.ldcv-view',
  action: {
    change: {
      fontfamily: function(arg$){
        var node;
        node = arg$.node;
        return view.get("viewer").style.fontFamily = node.value;
      },
      fontsize: function(arg$){
        var node;
        node = arg$.node;
        return view.get("viewer").style.fontSize = node.value + "px";
      },
      iconname: function(arg$){
        var node;
        node = arg$.node;
        return view.get("icon").setAttribute('class', "i-" + node.value);
      },
      iconsize: function(arg$){
        var node;
        node = arg$.node;
        return view.get("icon").style.fontSize = node.value + "em";
      },
      verticaloffset: function(arg$){
        var node, ref$;
        node = arg$.node;
        return ref$ = view.get("icon").style, ref$.position = 'relative', ref$.top = node.value + "px", ref$;
      }
    },
    click: {
      morefont: function(){
        return ldcv.font.toggle();
      },
      hint: function(){
        view.get("viewer").classList.toggle('active');
        return view.get("hint-text").innerText = view.get("viewer").classList.contains('active') ? "On" : "Off";
      },
      useflexbox: function(){
        view.get("inner").classList.toggle('d-flex');
        view.get("inner").classList.toggle('align-items-center');
        view.get("inner").classList.toggle('justify-content-center');
        return view.get("flexbox-text").innerText = view.get("inner").classList.contains('d-flex') ? "On" : "Off";
      }
    }
  }
});
choose = new ChooseFont({
  root: '.ldcv.ldcv-font .chooser',
  metaUrl: 'assets/lib/choosefont.js/main/fontinfo/meta.json',
  base: "https://plotdb.github.io/xl-fontset/alpha"
});
choose.on('choose', function(it){
  return xfl.load(it.path, {}, function(font){
    font.sync('Hga國一ば뮤');
    view.get('viewer').style.fontFamily = it.name;
    return ldcv.font.toggle(false);
  });
});
choose.init();
links = ['line-24-bold', 'line-16-light'].map(function(n){
  var link;
  link = document.createElement('link');
  link.setAttribute('rel', "stylesheet");
  link.setAttribute('type', "text/css");
  link.setAttribute('href', "assets/lib/ldif/dev/" + n + "/ldif.css");
  return {
    node: link,
    name: n
  };
});
document.head.appendChild(links[0].node);
view = new ldview({
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
          var data;
          data = arg$.data;
          links.map(function(it){
            if (it.node.parentNode) {
              return it.node.parentNode.removeChild(it.node);
            }
          });
          document.head.appendChild(data.node);
          return view.render();
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