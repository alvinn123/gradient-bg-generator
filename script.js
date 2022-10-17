var css = document.querySelector("h3");
let firstColor = document.querySelector(".color1");
let secondColor = document.querySelector(".color2");
let body = document.getElementById("gradient");

function changeBackground() {
  body.style.background =
    "linear-gradient(to right, " +
    firstColor.value +
    ", " +
    secondColor.value +
    ")";
  css.textContent = body.style.background + ";";
}
firstColor.addEventListener("input", changeBackground);
secondColor.addEventListener("input", changeBackground);
