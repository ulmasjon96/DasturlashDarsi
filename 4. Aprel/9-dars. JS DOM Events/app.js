/**
 * DOM Events - hodisalar
 *
 * Mouse events
 *
 * Keyboard events
 */

// function salom() {
//   console.log("Salom, meni button yubordi.");

//   button.classList.add("btn-red");

//   document.body.style.color = "black";
// }

// function sumka() {
//   console.log("sotilsin");
// }

// function matn() {
//   const text = document.querySelector(".text");

//   text.style.fontFamily = "monospace";
//   text.style.fontSize = "2em";
// }

// addEventListener()

// const wrapper = document.querySelector(".salom");

// wrapper.addEventListener("dblclick", function () {
//   wrapper.classList.toggle("dark-mode");
// });

// list.addEventListener("mouseenter", function () {
//   console.log("salom");
// });
// list.addEventListener("mouseleave", function () {
//   console.log("xayr");
// });
// list.addEventListener("mouseover", function () {
//   console.log("sumka");
// });
// list.addEventListener("click", function () {
//   const randomColor = `rgb(${Math.floor(Math.random() * 255)},
//                            ${Math.floor(Math.random() * 255)},
//                            ${Math.floor(Math.random() * 255)})`;

//   list.style.background = randomColor;
// });

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (hodisa) {
  console.log(hodisa.target.textContent);

  hodisa.target.textContent = "Yangi button";
});
