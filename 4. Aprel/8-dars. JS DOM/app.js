console.log("document");

// Selectors

// querySelector()

const myButton = document.querySelector("button#abc");

myButton.textContent = "Hello";

const smallTitle = document.querySelector(".small-title");

const header = document.querySelector("header");

const myBox = document.querySelector(".box");

myBox.textContent = "Salom, men sariq qutiman";
myBox.innerHTML = "Xayr";

myBox.innerHTML = "<input type='text' placeholder='nimadir...'>";
myBox.innerHTML += "<a href='https://www.youtube.com'>YouTube sahifam</a>";
myBox.querySelector("a").style.color = "black";

// querySelectorAll()

const divlar = document.querySelectorAll("div");

const lilar = document.querySelectorAll("li.moshina");

for (let i = 0; i < lilar.length; i++) {
  lilar[i].style.borderBottom = "1px solid black";
}

lilar.forEach((li) => {
  li.style.borderBottom = "1px solid red";
});

// getElementsByTagName()

// const spanlar = document.getElementsByTagName("span");

// for (let span of spanlar) {
//   console.log(span);
// }

// getElementsByClassName()
const wrappers = document.getElementsByClassName("wrapper");

console.log(wrappers);

// getElementById()
const text = document.getElementById("text");

console.log(text);
