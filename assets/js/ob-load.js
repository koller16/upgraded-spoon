$.get("ob-head.html", function (data) {
  $("#ob-head").html(data);
});
$.get("ob-foot.html", function (data) {
  $("#ob-foot").html(data);
});
$.get("ob-side.html", function (data) {
  $("#sidebar").html(data);
});