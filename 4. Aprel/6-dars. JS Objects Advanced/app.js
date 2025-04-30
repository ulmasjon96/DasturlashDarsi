// const olma = {
//   rang: "yashil",
//   tam: "nordon",
//   nav: "eshak olma",
//   shakl: "oval",
//   qurt: 0,
//   pishgan: true,
// };

// const person = {
//   name: "Abdukarim",
//   age: 17,
//   isDriver: false,
//   friends: ["Kamol", "Firdavs", "O'lmas", "Boboxo'ja"],
//   laptop: {
//     model: "Acer",
//     price: 1000,
//   },
//   location: {
//     country: "Uzbekistan",
//     city: "Bukhara",
//     zipcode: 200100,
//   },
// };

// console.log(person.friends[0]);

// const spaceship = {
//   homePlanet: "Earth",
//   color: "silver",
//   crew: {
//     capitan: "Otabek",
//     members: [
//       {
//         name: "O'lmas",
//         age: 29,
//         quality: "Medic",
//       },
//       {
//         name: "Firdavs",
//         age: 18,
//         quality: "Mechanic",
//       },
//       {
//         name: "Kamol",
//         age: 18,
//         quality: "Engineer",
//       },
//       {
//         name: "Najim",
//         age: 20,
//         quality: "Medic",
//       },
//       {
//         name: "Boboxo'ja",
//         age: 16,
//         quality: "Operator",
//       },
//       {
//         name: "Abdukarim",
//         age: 17,
//         quality: "Inspector",
//       },
//     ],
//   },
//   mission: "Explore the Solar system",
//   secretMission: "Destroy Mars",

//   takeOff() {
//     console.log("Bip bop blast...");
//     console.log("Taking off from the ground!");
//   },
//   fly() {
//     console.log("The ship is flying!");
//   },
//   land() {
//     console.log("Prrrshshshshhhh...");
//     console.log("Landing...");
//   },
//   shoot() {
//     console.log("Pew pew pew...");
//   },
// };

// spaceship.takeOff();
// spaceship.fly();
// spaceship.shoot();
// spaceship.land();

// spaceship.land();

// const ekipaj = spaceship.crew.members;

// for (let i = 0; i < ekipaj.length; i++) {
//   if (ekipaj[i].quality === "Medic") {
//     console.log(ekipaj[i].name);
//   }
// }

// Objectlar ichida halqa

// const person = {
//   name: "Abdukarim",
//   surname: "Istamov",
//   age: 17,
//   hobby: "football",
//   university: "Moliya",
//   city: "Bukhara",
// };

// console.log(person.name);

// for (let x in person) {
//   // x = "name"
//   // x = "surname"
//   // x = "age"
//   // ...

//   console.log(person[x]);
// }

// const salaries = {
//   "o'lmas": 10000,
//   "boboxo'ja": 9000,
//   abdukarim: 10000,
//   kamol: 5000,
//   firdavs: 5000,
//   aziz: 12000,
//   javohir: 22000,
// };

// let total = 0;
// let sanoq = 0;
// for (let ishchi in salaries) {
//   total += salaries[ishchi];
//   sanoq++;
// }

// console.log(Math.floor(total / sanoq));

// Math
// console.log(Math);

// let value = Math.max(4, 51, 12, 9);

// value = Math.min(4, 51, 12, 9);

// value = Math.round(12.904);

// value = Math.floor(12.904);

// value = Math.trunc(10.1);

// value = Math.floor(0.3);
// value = Math.trunc(0.3);

// value = Math.trunc(-7.7);
// value = Math.ceil(3.1);

// value = Math.floor(Math.random() * 100);

// console.log(value);

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
// console.log(randomSon);

console.log(students[randomSon]);
