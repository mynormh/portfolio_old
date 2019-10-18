const navButton = document.querySelector("button[aria-expanded]");

const tl = new TimelineMax({ paused: true });

tl.from("nav", 1, {
  x: 100,
  display: "none",
  delay: 0
})
  .to(
    "circle.one",
    1,
    {
      scale: 1,
      x: 0,
      y: -300,
      ease: Power2.easeOut
    },
    "-=0.9"
  )
  .duration(0.5);

function toggleNav() {
  const expanded =
    navButton.getAttribute("aria-expanded") === "true" ? true : false;
  if (!expanded) {
    tl.play();
  } else {
    tl.reverse();
  }
  navButton.setAttribute("aria-expanded", !expanded);
}
navButton.addEventListener("click", toggleNav);
