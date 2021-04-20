const HAMBURGER_BUTTON = document.querySelector(".hamburger");
const MENU_CONTAINER = document.querySelector(".menu-container");
const HTML = document.getElementsByTagName("html");

export const menuAnimation = function () {
  HAMBURGER_BUTTON.addEventListener("click", function () {
    this.classList.toggle("is-active");
    MENU_CONTAINER.classList.toggle("is-active");

    if (HAMBURGER_BUTTON.classList.contains("is-active")) {
      HTML[0].style.overflow = "hidden";
    } else {
      HTML[0].style.overflow = "visible";
    }
  });
};
