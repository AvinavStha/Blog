const toTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

toTop.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
