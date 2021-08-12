var ldcv, view;
ldcv = new ldcover({
  root: '.ldcv'
});
view = new ldview({
  root: document.body,
  action: {
    click: {
      "more-detail": function(){
        return ldcv.toggle(true);
      }
    }
  }
});