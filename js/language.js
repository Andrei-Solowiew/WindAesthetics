window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__language").addEventListener("click", function () {
      document.querySelector(".header__language").classList.toggle("open");
    });
  $(".header__language").on("click", function (event) {
    $(".header__language-link").slideToggle(400);
    event.preventDefault();
  });
});
