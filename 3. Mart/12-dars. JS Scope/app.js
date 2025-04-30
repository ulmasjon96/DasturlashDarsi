/**
 * Scope - kod muhiti
 *
 * - Global scope
 * - Function scope
 * - Block scope
 *
 */

// let ism = "Kamol";

// function sayHello() {
//   let myFriend = "Firdavs";

//   if (true) {
//     let myCar = "Ferrari";
//     console.log(myCar);
//   }
// }

// sayHello();

// let ism = "Firdavs";

// if (true) {
//   console.log(ism);
// }

// while (true) {
//   let son = 5;

//   break;
// }

// console.log(son);

// function sayHello() {
//   let username = "Said";

//   if (false) {
//     while (false) {
//       break;
//     }

//     console.log(username);
//   }
// }

// sayHello();

function archa(etaj, bezak) {
  for (let qator = 1; qator <= etaj; qator++) {
    let jadval = "";

    for (let ustun = 1; ustun <= etaj; ustun++) {
      if (qator + ustun >= etaj + 1) {
        jadval += bezak;
      } else {
        jadval += " ";
      }
    }
    console.log(jadval);
  }
}

archa(10, "🤬");
archa(10, "% ");
