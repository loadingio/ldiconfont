ldcv = new ldCover root: \.ldcv
parse = (name) ->
  ld$.find(".ldcv i").map (n,i) ->
    cls = n.getAttribute \class
    cls = cls.replace(/i-\S+/g, '')
    n.setAttribute \class, cls
    n.classList.add ("i-" + name)
  ldcv.toggle true

ld$.fetch "assets/lib/ldif/dev/ldif.json", {method: \GET}, {type: \json}
  .then (ldif) ->
    view = new ldView do
      root: document.body
      handler:
        glyph: do
          key: -> it.name
          list: -> ldif
          view: do
            action: click: cell: ({context}) -> parse(context.name)
            text:
              name: ({context}) -> context.name
              code: ({context}) -> context.code
            handler:
              icon: ({node,context}) -> node.classList.add "i-#{context.name}"

ldcv = new ldCover do
  root: \.ldcv
view = new ldView do
  root: \.ldcv
  action: do
    change: do
      fontfamily: ({node}) -> view.get("viewer").style.fontFamily = node.value
      fontsize: ({node}) -> view.get("viewer").style.fontSize = "#{node.value}px"
      iconname: ({node}) -> view.get("icon").setAttribute 'class', "i-#{node.value}"
      iconsize: ({node}) -> view.get("icon").style.fontSize = "#{node.value}em"
      verticaloffset: ({node}) -> view.get("icon").style <<< position: \relative, top: "#{node.value}px"
    click: do
      hint: ->
        view.get("viewer").classList.toggle(\active)
        view.get("hint-text").innerText = if view.get("viewer").classList.contains(\active) => "On" else "Off"
