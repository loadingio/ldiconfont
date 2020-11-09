ldcv = new ldCover do
  root: '.ldcv'
view = new ldView do
  root: document.body
  action: click:
    "more-detail": -> ldcv.toggle(true)

