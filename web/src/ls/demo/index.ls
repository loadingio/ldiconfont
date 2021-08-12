ldcv = new ldcover do
  root: '.ldcv'
view = new ldview do
  root: document.body
  action: click:
    "more-detail": -> ldcv.toggle(true)

