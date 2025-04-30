// Primitive

// let a = "firdavs";
// let b = "o'lmas";

// b = a;

// a = "kamol";

// b = a;

// Non-primitive

// let a = { name: "o'lmas", age: 29 };

// let b = a;

// a = { city: "bukhara", zip: 200100 };

// console.log("a:", a);
// console.log("b:", b);

/**
 * DOM - Document Object Model
 */

console.dir(document);

const body = document.children[0].children[1];

body.className = "tana";

console.dir(body.className);

const myTitle = document.body.children[0].children[0].children[0];

myTitle.style.color = "gold";
myTitle.style.fontSize = "50px";

const students = [
  "Abdukarim",
  "Boboxo'ja",
  "Kamol",
  "Firdavs",
  "O'lmas",
  "Abdulaziz",
  "Muhammadali",
  "Marjona",
  "Tahmina",
  "Shahlo",
  "Amirshox",
  "Javohir",
  "Kamron",
  "Mirsaid",
  "Muhammadmirzo",
];

const randomSon = Math.floor(Math.random() * students.length);

myTitle.textContent = "Xush kelibsiz " + students[randomSon];

const matn = document.body.children[1].children[0].children[0].children[1];
matn.style.color = "rgb(250,0,250)";

const tugma = document.getElementById("abc");

tugma.style.width = "200px";
console.dir();
