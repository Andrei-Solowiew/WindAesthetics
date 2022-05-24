$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("open__menu");
    $(".header__list").toggleClass("open__menu");
  });
  $(".header__burger").on("click", function (event) {
    $(".header__list").slideToggle(400);
    event.preventDefault();
  });
});

