let blue, green, red;
let cbox = document.querySelector(".cbox");
function genColorAndSet() {
  blue = Math.floor(Math.random() * 255 + 1);
  red = Math.floor(Math.random() * 255 + 1);
  green = Math.floor(Math.random() * 255 + 1);

  let color = `rgb(${red},${green},${blue})`;
  document.querySelector("h3").innerText = color;
  document.querySelector(".cbox").style.backgroundColor = `${color}`;
}
let btn = document.querySelector(".btn");
btn.onclick = genColorAndSet;
