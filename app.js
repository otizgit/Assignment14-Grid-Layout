const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".links");
const user = document.querySelector(".user");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("display-nav");
  links.forEach(function (link) {
    link.classList.toggle("display-links");
  });
  user.classList.toggle("display-links");
});
