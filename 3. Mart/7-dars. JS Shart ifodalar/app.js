/**
 * Shart ifodalari:
 * if / else
 */

/**
 * string
 * number
 * boolean
 * undefined
 * null
 *
 * object
 */

/**
 * var
 * let
 * const
 */

/**
 * && va
 * || yoki
 * !  emas
 */

// if (false) {
//   console.log("Salom");
//   console.log("nimadir");

//   if (true) {
//     console.log("chiqadi");
//   }
// }

// if (25 > 20) {
//   console.log("nimadir kod");
// }

// let yosh = 32;
// let ruxsatEtilganYosh = 18;

// if (yosh > ruxsatEtilganYosh) {
//   console.log("Xush kelibsiz");
// } else {
//   console.log("Yosh chegarasi o'rnatilgan");
// }

// let ism = "Kamol";
// let familya = "Jo'rayev";

// if (ism === "Firdavs" && familya === "Usmonov") {
//   console.log("Ruxsat");
// } else if (ism === "Kamol" && familya === "Usmonov") {
//   console.log("Ruxsat");
// } else {
//   console.log("Sizga ruxsat etilmaydi");
// }

// let yosh = +prompt("Yoshingiz?");
// if (yosh > 16) {
//   console.log("Passport olib bo'lgansiz");
// } else if (yosh === 16) {
//   console.log("Passport oling");
// } else if (yosh < 16) {
//   if (confirm("Imtiyozingiz bormi?")) {
//     console.log("Passport oling");
//   } else {
//     console.log("Passport hali endi olasiz");
//   }
// } else {
//   console.log("Xato qiymat");
// }

/**
 * ProUnity o'quv markazi
 * ish grafigi:
 *
 * Ish vaqti:
 * 9.00 - 18.00
 *
 * Tushlik vaqti:
 * 12.00 - 13.30
 *
 * Dam olish kunlari:
 * Yakshanba.
 *
 * prompt("Hafta kuni:") // Dushanba
 * prompt("Saot nechi?") // 16.30
 *
 * ==> "ProUnity markazi ochiq."
 *
 * prompt("Hafta kuni:") // Seshanba
 * prompt("Saot nechi?") // 20.30
 *
 * ==> "ProUnity markazi yopiq."
 *
 * prompt("Hafta kuni:") // Seshanba
 * prompt("Saot nechi?") // 12.30
 *
 * ==> "ProUnity markazi tushlik qilyapti."
 *
 * prompt("Hafta kuni:") // Yakshaba
 * prompt("Saot nechi?") // 12.30
 *
 * ==> "ProUnity markazi yopiq."
 */

let haftaKuni = prompt("Hafta kuni:");
haftaKuni = haftaKuni[0].toUpperCase() + haftaKuni.slice(1).toLowerCase();

let vaqt;

if (haftaKuni === "Yakshanba") {
  console.log("ProUnity yopiq.");
} else if (
  haftaKuni === "Dushanba" ||
  haftaKuni === "Seshanba" ||
  haftaKuni === "Chorshanba" ||
  haftaKuni === "Payshanba" ||
  haftaKuni === "Juma" ||
  haftaKuni === "Shanba"
) {
  vaqt = prompt("Soat:");

  if (vaqt >= 12 && vaqt <= 13.3) {
    console.log("ProUnity tushlik qilmoqda.");
  } else if (vaqt >= 9 && vaqt <= 18) {
    console.log("ProUnity ochiq.");
  } else {
    console.log("ProUnity yopiq.");
  }
} else {
  console.log("Xato hafta kuni kiritildi");
}
