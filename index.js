let links = document.querySelectorAll("a");

function onMouseEnter(e) {
  this.classList.add("rotate");
}

function onAnimationEnd(e) {
  this.classList.remove("rotate");
}

links.forEach((link) => {
  link.addEventListener("mouseenter", onMouseEnter);
  link.addEventListener("animationend", onAnimationEnd);
});
