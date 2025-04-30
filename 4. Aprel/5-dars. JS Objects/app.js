/**
 * Objects
 */

// const fazoKema = {
//   "fuel type": "diesel",
//   color: "black",
//   homePlanet: "Earth",
//   numCrew: 7,
//   docks: 4,
//   mass: "1000 tonns",
// };

// let x = prompt("Fazo kemasi haqida nima bilishni xohlaysiz?");

// console.log(fazoKema[x]);

const student = {
  name: "Firdavs",
  age: 18,
  gender: "male",

  salomlash: function () {
    console.log("Assalom alaykum!");
  },

  xayrlash: function () {
    console.log("Xayr salomat bo'ling");
  },
};

student.lastName = "Usmonov";

student.fullName = student.name + " " + student.lastName;

console.log(student);

student.sana = function (num = 10) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

student.salomlash();

student.xayrlash();

student.sana();
