const navButton = document.querySelector("button[aria-expanded]");
function toggleNav() {
  const expanded =
    navButton.getAttribute("aria-expanded") === "true" ? true : false;
  navButton.setAttribute("aria-expanded", !expanded);
}
navButton.addEventListener("click", toggleNav);
