document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const middleNav = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      middleNav.classList.add("scrolled");
    } else {
      middleNav.classList.remove("scrolled");
    }
  });
});
