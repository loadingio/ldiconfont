<-(->it.apply {}) _

ldcv =
  view: new ldcover root: \.ldcv.ldcv-view
  font: new ldcover root: \.ldcv.ldcv-font

view = {}

parse = (name) ->
  ld$.find(ldcv.view.root!, ".ldcv.ldcv-view i").map (n,i) ->
    cls = n.getAttribute \class
    cls = cls.replace(/i-\S+/g, '')
    n.setAttribute \class, cls
    n.classList.add ("i-" + name)
  ldcv.view.toggle true

ld$.fetch "assets/lib/ldif/dev/ldif.json", {method: \GET}, {type: \json}
  .then (ldif) ->
    view.glyphs = new ldview do
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

view.ldcv = new ldview do
  root: ldcv.view.root!
  action: do
    change: do
      fontfamily: ({views, node}) -> views.0.get("viewer").style.fontFamily = node.value
      fontsize: ({views, node}) -> views.0.get("viewer").style.fontSize = "#{node.value}px"
      iconname: ({views, node}) ->
        views.0.get("icon").setAttribute 'class', "i-#{node.value}"
      iconsize: ({views, node}) -> views.0.get("icon").style.fontSize = "#{node.value}em"
      verticaloffset: ({views, node}) -> views.0.get("icon").style <<< position: \relative, top: "#{node.value}px"
    click: do
      morefont: -> ldcv.font.toggle!
      hint: ({views}) ->
        views.0.get("viewer").classList.toggle(\active)
        views.0.get("hint-text").innerText = if views.0.get("viewer").classList.contains(\active) => "On" else "Off"
      useflexbox: ({views}) ->
        views.0.get("inner").classList.toggle(\d-flex)
        views.0.get("inner").classList.toggle(\align-items-center)
        views.0.get("inner").classList.toggle(\justify-content-center)
        views.0.get("flexbox-text").innerText = if views.0.get("inner").classList.contains(\d-flex) => "On" else "Off"

choose = new ChooseFont do
  root: ld$.find(ldcv.font.root!, '.chooser', 0) #'.ldcv.ldcv-font .chooser'
  meta-url: \assets/lib/choosefont.js/main/dist/fontinfo/meta.json
  base: "https://plotdb.github.io/xl-fontset/alpha"
choose.on \choose, ->
  xfl.load it.path, {}, (font) ->
    font.sync 'Hga國一ば뮤'
    view.ldcv.get('viewer').style.fontFamily = it.name
    ldcv.font.toggle false

choose.init!

links = <[line-24-bold line-16-light claude-24-light legacy]>.map (n) ->
  link = document.createElement \link
  link.setAttribute \rel, "stylesheet"
  link.setAttribute \type, "text/css"
  link.setAttribute \href, "assets/lib/ldif/dev/#n/index.min.css"
  {node: link, name: n}
document.head.appendChild links.0.node
view.body = new ldview do
  root: document.body
  handler:
    switch:
      list: -> links
      key: -> it.name
      action: click: ({views, data}) ->
        links.map -> if it.node.parentNode => it.node.parentNode.removeChild it.node
        document.head.appendChild data.node
        views.0.render!
      text: ({node, data}) -> return data.name
      handler: ({node, data}) -> node.classList.toggle \active, data.node.parentNode

