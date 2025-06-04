'use strict';

// let value;

// value = 10;

// value = 13;
// value = -13;
// value = 13.13;
// value = -13.13;
// value = Infinity;
// value = -Infinity;

// value = 15 + 13;
// value = 15 - 13;
// value = 15 * 13;
// value = 15 / 13;
// value = 15 % 2; // sonni 2 ga bo'lganda qoldig'ini aniqlash
// value = 17 % 2;
// value = 15 ** 13; // darajaga ko'paytirish
// value = 2 ** 8;
// value = 64 ** (1 / 2); // 64 ni kvadrat ildizga qo'yish

// value = value + 3;
// value = value - 3;
// value = value * 3;
// value = value / 3;
// value = value % 3;

// value += 3;
// value -= 3;
// value *= 3;
// value %= 3;
// value **= 2;
// value /= 3; //ikki maarta takroriy bo'lish
// value /= 3;

// value = 3 + '3';// javob '33'
// value = 6 - '3'; // javob 3
// value = 8 * '4'; // javob 32
// value = '5' * '4'; // javob 30
// value = 18 / '2'; // javob 9

// value = 5 * '2a'; // NaN
// value = '5' * '6'; // 30
// value += 3; // 33

// inkrement va dekrement

// value += 1
// value -= 1

// ++value; // inkrement o'zgaruvchisini 1 ga oshirib beradi
// --value; // dekrement o'zgaruvchisini 1 ga kamaytirib beradi

// console.log(++value);
// console.log(--value);

// value++;

// console.log(value++);
// console.log(value);

// value--;

// console.log(value--);
// console.log(value);

/**
 * agar inkrement va dekrementdan o'zgaruvchiga turgan bo'lsa u shu zahoti ishlabn beradi
 * Agar inkrement va dekrementdan o'zgaruvchidan keyin turgan bo'lsa u shu protswssdagi barcha amallar tugallanganidan keyin ishlab beradi
 */

// Kasr sonlar bilan amallar

// value = 3.3 * 3.3;
// value = (33 * 33) / 100;
// value = (3.3 * 3.3).toFixed(2); // kasrdan keyingi sonni 2 ta raqamdan iborat qiladi va uni matn holatga olib keladi
// value = +(3.3 * 3.3).toFixed(2); // kasrdan keyingi sonni 2 ta raqamdan iborat qiladi va uni son holatga olib keladi
// value = Number((3.3 * 3.3).toFixed(2)); // kasrdan keyingi sonni 2 ta raqamdan iborat qiladi va uni son holatga olib keladi
// value = parseInt((3.3 * 3.3).toFixed(2)); // kasrdan keyingi sonni 2 ta raqamdan iborat qiladi va uni son holatga olib keladi

// // Object Math

// value = Math;
// value = Math.PI // pi raqami olib beradi
// value = Math.E; // e raqami olib beradi

// value = Math.SQRT2; // kvadrat ildiz olib beradi
// value = Math.SQRT1_2; // kvadrat ildiz olib beradi
// value = Math.min(1, 2, 3, 4, 5); // eng kichik sonni olib beradi
// value = Math.max(1, 2, 3, 4, 5); // eng katta sonni olib beradi
// value = Math.random(); // tasodifiy son olib beradi
// value = Math.random() * 10; // 0 dan 10 gacha bo'lgan tasodifiy son olib beradi
// value = parseInt(Math.random() * 10); // 0 dan 9 gacha bo'lgan tasodifiy son olib beradi
// value = +(Math.random() * 10).toFixed(0); // 0 dan 10 gacha bo'lgan tasodifiy son olib beradi
// value = Math.round(2.3); // 2.3 ni 2 ga oshirib beradi
// value = Math.round(2.7); // 2.7 ni 3 ga oshirib beradi
// value = Math.ceil(2.1); // 2.1 ni 3 ga oshirib beradi
// value = Math.floor(2.9999); // 2.9999 ni 2 ga oshirib beradi
// value = Math.ceil(-3.3); // -3.3 ni -3 ga oshirib beradi
// value = Math.floor(-3.3); // -3.3 ni -4 ga oshirib beradi
// value = Math.floor(Math.random() * 10 + 1);

// console.log(value);

// 1 chi masala
let value; // O'zgaruvchi yaratildi
value = (Math.PI).toFixed(2); // O'zgaruvchiga qiymat berildi va nuqtadan keyin 2 ta raqamdan iborat qilindi
console.log(value); // javobi 3.14 chiqadi

// 2 chi masala
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51); // O'zgaruvchiga qiymat berildi va max qiymatini olib berildi
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51); // O'zgaruvchiga qiymat berildi va min qiymatini olib berildi
console.log(max, min); // javobi 51 va 11 chiqadi

// 3 chi masala
let a_value = (Math.random()).toFixed(2); // O'zgaruvchiga (0 dan 1 gacha) bo'lgan qiymat berildi va nuqtadan keyin 2 ta raqamdan iborat qilindi
let b_value = Math.floor(Math.random() * 10); // O'zgaruvchiga (0 dan 9 gacha) bo'lgan qiymat berildi va butun sonni olib berildi
console.log(a_value, b_value);

// 4 chi masala
let num = 0.6 + 0.7; // O'zgaruvchiga qiymat berildi
console.log(parseFloat(num)); // javobi 1.3 chiqadi

// 5 chi masala
value = '100$'; // O'zgaruvchiga matn (string) ko'rinishidagi qiymat berildi
console.log(parseInt(value)); // Natija: 100


// parseInt() funksiyasi matn (string) ichidan boshlanishidan boshlab raqamlarni o‘qib, ularni butun songa aylantiradi. Agar birinchi belgilar raqam bo‘lsa, o‘sha raqamlar o‘qiladi va qolgan belgilar e’tiborga olinmaydi. Agar matn raqam bilan boshlanmasa, NaN (Not a Number) qaytaradi.
