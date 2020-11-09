ldcv = new ldCover root: \.ldcv
parse = (name) ->
  console.log 123
  ld$.find(".ldcv i").map (n,i) ->
    cls = n.getAttribute \class
    cls = cls.replace(/i-\S+/g, '')
    n.setAttribute \class, cls
    n.classList.add ("i-" + name)
  ldcv.toggle true
