/**
 * Ma'lumot turlari:
 * string
 * number
 * boolean
 * null
 * undefined
 * object
 *
 * O'zgaruvchilar:
 * var
 * let
 * const
 *
 * Operatorlar:
 * - matematik operatorlar
 * - taqqoslash
 * - mantiqiy
 * - typeof
 *
 * 5 * 4
 *
 * Shart ifodalari:
 * if/else
 *
 * Loops ya'ni halqalar:
 * while
 * do{}while
 * for
 *
 * Funksiyalar:
 *
 * Scope:
 * - global
 * - function
 * - block
 */

/**
 * Array - bu JavaScriptda ro'yxatni bildiradi.
 */

// console.log(students[10]);
// console.log(students.length);

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

for (let i = 0; i < students.length; i++) {
  console.log(i + 1 + ": " + students[i]);
}
