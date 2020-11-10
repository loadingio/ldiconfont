// Generated by LiveScript 1.3.1
var ldcv, parse, view;
ldcv = new ldCover({
  root: '.ldcv'
});
parse = function(name){
  ld$.find(".ldcv i").map(function(n, i){
    var cls;
    cls = n.getAttribute('class');
    cls = cls.replace(/i-\S+/g, '');
    n.setAttribute('class', cls);
    return n.classList.add("i-" + name);
  });
  return ldcv.toggle(true);
};
ld$.fetch("assets/lib/ldif/dev/ldif.json", {
  method: 'GET'
}, {
  type: 'json'
}).then(function(ldif){
  var view;
  return view = new ldView({
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
ldcv = new ldCover({
  root: '.ldcv'
});
view = new ldView({
  root: '.ldcv',
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