// Generated by LiveScript 1.3.1
var ldcv, view;
ldcv = new ldCover({
  root: '.ldcv'
});
view = new ldView({
  root: document.body,
  action: {
    click: {
      "more-detail": function(){
        return ldcv.toggle(true);
      }
    }
  }
});