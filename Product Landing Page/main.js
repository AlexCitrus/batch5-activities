$(function () {
  $(".menu-toggle, .fa-times").on("click", function () {
    $("#nav-bar").toggleClass("active");
    $(".overlay").toggleClass("menu-open");
  });

  $(".overlay").on("click", function () {
    $("#nav-bar").removeClass("active");
    $(".overlay").removeClass("menu-open");
  });
});
