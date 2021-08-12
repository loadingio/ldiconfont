ldcv = do
  view: new ldcover root: \.ldcv.ldcv-view
  font: new ldcover root: \.ldcv.ldcv-font
parse = (name) ->
  ld$.find(".ldcv.ldcv-view i").map (n,i) ->
    cls = n.getAttribute \class
    cls = cls.replace(/i-\S+/g, '')
    n.setAttribute \class, cls
    n.classList.add ("i-" + name)
  ldcv.view.toggle true

ld$.fetch "assets/lib/ldif/dev/ldif.json", {method: \GET}, {type: \json}
  .then (ldif) ->
    view = new ldview do
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

view = new ldview do
  root: \.ldcv.ldcv-view
  action: do
    change: do
      fontfamily: ({node}) -> view.get("viewer").style.fontFamily = node.value
      fontsize: ({node}) -> view.get("viewer").style.fontSize = "#{node.value}px"
      iconname: ({node}) -> view.get("icon").setAttribute 'class', "i-#{node.value}"
      iconsize: ({node}) -> view.get("icon").style.fontSize = "#{node.value}em"
      verticaloffset: ({node}) -> view.get("icon").style <<< position: \relative, top: "#{node.value}px"
    click: do
      morefont: -> ldcv.font.toggle!
      hint: ->
        view.get("viewer").classList.toggle(\active)
        view.get("hint-text").innerText = if view.get("viewer").classList.contains(\active) => "On" else "Off"
      useflexbox: ->
        view.get("inner").classList.toggle(\d-flex)
        view.get("inner").classList.toggle(\align-items-center)
        view.get("inner").classList.toggle(\justify-content-center)
        view.get("flexbox-text").innerText = if view.get("inner").classList.contains(\d-flex) => "On" else "Off"

choose = new ChooseFont do
  root: '.ldcv.ldcv-font .chooser'
  meta-url: \/assets/lib/choosefont.js/main/fontinfo/meta.json
  base: "https://plotdb.github.io/xl-fontset/alpha"
choose.on \choose, ->
  xfl.load it.path, {}, (font) ->
    font.sync 'Hga國一ば뮤'
    view.get('viewer').style.fontFamily = it.name
    ldcv.font.toggle false

choose.init!

links = <[line-24-bold line-16-light]>.map (n) ->
  link = document.createElement \link
  link.setAttribute \rel, "stylesheet"
  link.setAttribute \type, "text/css"
  link.setAttribute \href, "/assets/lib/ldif/dev/#n/ldif.css"
  {node: link, name: n}
document.head.appendChild links.0.node
view = new ldview do
  root: document.body
  handler:
    switch:
      list: -> links
      key: -> it.name
      action: click: ({data}) ->
        links.map -> if it.node.parentNode => it.node.parentNode.removeChild it.node
        document.head.appendChild data.node
        view.render!
      text: ({node, data}) -> return data.name
      handler: ({node, data}) -> node.classList.toggle \active, data.node.parentNode

