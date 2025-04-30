/**
 * Functions
 */

// function myFunction(param) {
//   console.log(5 * param);
// }

// myFunction(2);
// myFunction(7);
// myFunction(92);
// myFunction("54");

// function ikkiHissa(x) {
//   console.log(x * 2);
// }

// ikkiHissa(95);

// ikkiHissa(6785);

// function multiply(a, b) {
//   console.log(a * b);
// }

// multiply(5, 8);

// multiply(33, 21);

// function myFunc(son1, son2) {
//   if (son1 == son2) {
//     console.log("Sonlar teng");
//   } else if (son1 > son2) {
//     console.log(son1 + " katta");
//   } else {
//     console.log(son2 + " katta");
//   }
// }

// let myAge = prompt("Son kiriting:");
// let firdavsAge = 18;

// myFunc(myAge, firdavsAge);

// let son = prompt("Son kiriting:");

// meningFunksiya(son);

// function meningFunksiya(n) {
//   let i = 1;
//   while (i <= n) {
//     console.log(i);
//     i++;
//   }
// }

function double(x) {
  return x * 2;
}

// let son = double(7);

// console.log(son);

// function makeSquareDiv(text) {
//   let quti = document.createElement("div");
//   quti.textContent = text;
//   quti.className = "box";

//   return quti;
// }

// let div = makeSquareDiv(prompt("Ism: "));

// document.body.append(div);

// function cube(x) {
//   return x ** 3;
// }

// let sixCube = cube(66);

// console.log(sixCube);

function jam(x, y) {
  let natija = 0;
  while (x <= y) {
    natija += x;
    x++;
  }
  while (x >= y) {
    natija += x;
    x--;
  }
  console.log(natija);
  return natija;
}

jam(3, 9);
jam(1, 3);
jam(11, 31);
jam(1, 100);
jam(10, 4);
jam(10, 444);
jam(1, 4);
