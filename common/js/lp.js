$(function() {
  $("#js-hamburger-menu, .arrow").on("click", function() {
    var target = document.querySelector(".side-menu");
    target.classList.toggle("open-menu");
    $(".hamburger-menu").toggleClass("hamburger-menu--open");
  });
});
