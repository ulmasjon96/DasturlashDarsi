// let x = prompt(`1 - Son Kiriting: `);
// let y = prompt(`2 - Son Kiriting: `);

// if (x > y) {
//     alert(`1 - son katta`);
// } else if (x < y) {
//     alert(`2 - son katta`);
// } else {
//     alert(`Bu sonlar teng`);
// }

// // Foydalanuvchidan qiymatlarni olish
// x = float(input("x ning qiymatini kiriting: "));
// y = float(input("y ning qiymatini kiriting: "));
// z = float(input("z ning qiymatini kiriting: "));

// // Maksimal va minimal qiymatlarni topish
// maximum = max(x, y, z);
// minimum = min(x, y, z);

// // Natijalarni chiqarish
// print("Maksimal qiymat:", maximum);
// print("Minimal qiymat:", minimum);

// let x = +prompt(`1 - Son Kiriting: `);
// let y = +prompt(`2 - Son Kiriting: `);
// let z = +prompt(`3 - Son Kiriting: `);

// if (isNaN(x) || isNaN(y) || isNaN(z)) {
//     alert("Iltimos, to'g'ri raqam kiriting!");
// } else {
//     if (x === y && y === z) {
//         alert(`Sonlar teng`);
//     } else if (x > y && x > z) {
//         alert(`1 - son eng katta`);
//     } else if (y > x && y > z) {
//         alert(`2 - son eng katta`);
//     } else if (z > x && z > y) {
//         alert(`3 - son eng katta`);
//     } else if (x < y && x < z) {
//         alert(`1 - son eng kichik`);
//     } else if (y < x && y < z) {
//         alert(`2 - son eng kichik`);
//     } else if (z < x && z < y) {
//         alert(`3 - son eng kichik`);
//     } else {
//         alert(`Sonlar teng`);
//     }
// }

// let a = +prompt("1-sonni kirit");
// let b = +prompt("2-sonni kirit");
// let c = +prompt("3-sonni kirit");

// // a < b < c
// if (a < b && b < c) {
//     alert(`${a} ${b} dan kichik ${b} ${c} dan kichik`);
// }

// // a > b > c
// else if (a > b && b > c) {
//     alert(`${a} ${b} dan katta ${b} ${c} dan katta`);
// }

// // a < b > c
// else if (a < b && b > c) {
//     alert(`${a} ${b} dan kichik ${b} ${c} dan katta`);
// }

// // a > b < c
// else if (a > b && b < c) {
//     alert(`${a} ${b} dan katta ${b} ${c} dan kichik`);
// }

// // a < b = c
// else if (a < b && b == c) {
//     alert(`${a} ${b} dan kichik ${b} ${c} ga teng`);
// }

// // a > b = c
// else if (a > b && b == c) {
//     alert(`${a} ${b} dan katta ${b} ${c} ga teng`);
// } else {
//     alert("Xatolik! Siz son kiritishingiz kerak");
// }

// let a = +prompt("1-sonni kirit");
// let b = +prompt("2-sonni kirit");
// let c = +prompt("3-sonni kirit");

// // a < b < c
// if (a < b && b < c) {
//     alert(`${a} < ${b} < ${c}`);
// }

// // a > b > c
// else if (a > b && b > c) {
//     alert(`${a} > ${b} > ${c}`);
// }

// // a < b > c
// else if (a < b && b > c) {
//     alert(`${a} < ${b} > ${c}`);
// }

// // a > b < c
// else if (a > b && b < c) {
//     alert(`${a} > ${b} < ${c}`);
// } else {
//     alert("Xatolik! Siz son kiritishingiz alertga");
// }

// 3 - masala

// let x = prompt("x: ");
// let y = prompt("y: ");
// let z = prompt("z: ");

// if (x + y + z > x * y * z) {
//     alert("x+y+z");
// } else if (x + y + z < x * y * z) {
//     alert("x*y*z");
// }

// if ((x + y + z) ** 2 / 2 > x * y * z) {
//     alert("x+y+z");
// } else if ((x + y + z) ** 2 / 2 < x * y * z) {
//     alert("x*y*z");
// }

// 5 - masala

// // a, b, c haqiqiy sonlar kiritilsin
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let c = +prompt("c sonini kiriting:");

// // Tengsizlikni tekshirish: a >= b >= c
// if (a >= b && b >= c) {
//     // Agar tengsizlikni qanoatlantirsa, qiymatlarni 2 marta orttirish
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     // Agar tengsizlikni qanoatlantirmasa, har bir sonning absolyut qiymatini olish
//     a = a;
//     b = b;
//     c = c;
// }

// // Natijani chiqarish
// alert(`Natija: a = ${a}, b = ${b}, c = ${c}`);

// 6 - masala;

// let x = +prompt(`x Sonlarni Kiriting: `);
// let y = +prompt(`y Sonlarni Kiriting: `);
// if (x > y) {
//     alert("z=x-y");
// } else {
//     alert("y-x+1");
// }

// 7 - masala

// Foydalanuvchidan ikkita haqiqiy sonni olish
// let a = prompt("Birinchi sonni kiriting:");
// let b = prompt("Ikkinchi sonni kiriting:");

// // Shartni tekshirish
// if (a > b) {
//     alert("Birinchi son: " + a);
// } else {
//     alert('Birinchi son: ' + a + ' Ikkinchi son: ' + b)
// }

// alert(`a = ${a}, b = ${b}`)

// 🔁 2-Masala: 1 dan N gacha bo‘lgan toq sonlar
// Shart:
// Foydalanuvchi N sonini kiritadi. Dastur 1 dan N gacha bo‘lgan toq sonlarni chiqaradi.

// Masalan:
// Kirish: 10
// Chiqish: 1 3 5 7 9

// Izoh: Faqat while va if ishlatilsin. continue ishlatilmasin.

// let N = +prompt("N sonini kiriting:");

// let i = 1;
// while (i <= N) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }

// ⏳ 3-Masala: Son necha xonali?
// Shart:
// Foydalanuvchi musbat butun son kiritadi. while tsikli orqali ushbu son nechta xonali ekanligini aniqlang.

// Masalan:
// Kirish: 872
// Chiqish: Bu son 3 xonali

// let son = prompt("Musbat butun son kiriting:");

// let xonalarSoni = 0;

// while (son > 0) {
//     son = Math.floor(son / 10);
//     xonalarSoni++;
// }

// alert(`Bu son ${xonalarSoni} xonali.`);

// 🔄 4-Masala: Faktorial hisoblash
// Shart:
// Foydalanuvchi n sonini kiritadi. Dastur n! ya’ni faktorialni hisoblaydi (n * (n-1) * ... * 1).

// Masalan:
// Kirish: 5
// Chiqish: 5! = 120

// Izoh: Faqat while va if/else orqali.

// let n = prompt("Musbat butun sonni kiriting:");

// let faktorial = 1;
// let i = 1;

// if (n < 0) {
//     alert("Iltimos, musbat butun son kiriting.");
// } else {
//     while (i <= n) {
//         faktorial *= i;
//         i++;
//     }
//     alert(`${n}! = ${faktorial}`);
// }

// 10 ta baho kiritilishini so'raymiz
// for (let i = 1; i <= 10; i++) {
//     let baho = +prompt(`Baho ${i}:`);

//     if (baho === 5) {
//         alert("A'lo");
//     } else if (baho === 4) {
//         alert("Yaxshi");
//     } else if (baho === 3) {
//         alert("Qoniqarli");
//     } else if (baho === 2) {
//         prompt(
//             `qanaqa 2 blat gapimga tushunmayopsanmi 3 da 5 gacha belgila dedimku  `
//         );
//     } else if (baho === 1) {
//         prompt(`kallanga qo'tir chomosh qanaqa 1 blat 3 da 5 gacha belgila  `);
//     } else {
//         alert("Noto'g'ri baho");
//     }
// }

// let n = +prompt("Son kiriting: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         alert(i);
//     }
// }

// let n = +prompt("Son kiriting: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         n += i;
//     }
//     console.log(n);
// }

// let n = +prompt('Son kiriting: ') // Misol uchun n = berilgan son
// let yigindi = 0

// for (let i = 1; i <= n; i++) {
// 	if (n % i === 0) {
// 		// Misol uchun n % i == 0 bo'lsa yigindi += i
// 		yigindi += i
// 	}
// }

// alert(`Sonning (${n}) bulinuvchilari yig'indisi: ${yigindi}`);

// if (yigindi == n) {
//     console.log(`${n} - mukammal son.`);
// } else {
//     console.log(`${n} - mukammal emas.`);
// }

// let N = prompt("Son: ");
// let sum = 0;

// for (let i = 1; i < N; i++) {
//     if (N % i == 0) {
//         sum += i;
//     }

//     if (n == a) {
//         alert(sum);
//     }
// }

// let N = +prompt("Son kirit: ");
// let sum = 0;

// for (let i = 1; i < N; i++) {
//     if (N % i === 0) {
//         sum += i;
//     }
// }
// console.log(`${N} ning bo‘luvchilari yig‘indisi: ${sum}`);

// if (sum === N) {
//     console.log(`${N} - mukammal son.`);
// } else {
//     console.log(`${N} - mukammal emas.`);
// }

// let N = +prompt('Son kirit: ');

// console.log(`1 dan ${N} gacha bo‘lgan, 3 ga bo‘linadigan, lekin 5 ga bo‘linmaydigan sonlar:`);

// for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log(i);
//     }
// }

// let n = +prompt("Son kiriting: "); // Misol uchun n = 29
// let tub = true;

// if (n <= 1) {
//     tub = false;
// } else {
//     for (let i = 2; i <= n / 2; i++) {
//         if (n % i === 0) {
//             tub = false;
//             break;
//         }
//     }
// }
// if (tub) {
//     console.log(`${n} tub sondir.`);
// } else {
//     console.log(`${n} tub son emas.`);
// }

// let number = +prompt("son: ");
// let isPrime = true;

// if (number <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("tub");
// } else {
//     console.log("tub emas");
// }

// let a = [1, 2, 3, 4, 5];
// let b = 0;
// for (let i = 0; i < a.length; i++) {
//     b += a[i];
// }
// let c = b / a.length;
// let d = [];
// for (g of a) {
//     if (c < g) {
//         d.push(g);
//     }
// }
// console.log(d);

// function juftToqAjratish(massiv) {
//     const juftSonlar = [];
//     const toqSonlar = [];

//     massiv.forEach((son) => {
//         if (son % 2 === 0) {
//             juftSonlar.push(son);
//         } else {
//             toqSonlar.push(son);
//         }
//     });

//     return [juftSonlar, toqSonlar];
// }

// // Misol uchun massiv
// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [juft, toq] = juftToqAjratish(massiv);

// console.log("Juft sonlar:", juft);
// console.log("Toq sonlar:", toq);

// function elementlarOrasidagiFarq(massiv) {
//     const farqlar = [];

//     for (let i = 0; i < massiv.length - 1; i++) {
//         const farq = massiv[i + 1] - massiv[i];
//         farqlar.push(farq);
//     }

//     return farqlar;
// }

// // Misol uchun massiv
// const massiv = [5, 10, 7, 4];

// const farqlar = elementlarOrasidagiFarq(massiv);

// alert(farqlar); // [5, -3, -3]

// let sonlar = [6, 12, 3, 5, 7, 18, 90, 1];

// console.log(sonlar);

// sonlar.sort((a, b) => a - b);

// console.log(sonlar);

// objects;

// const students = {
//     surName: "Davlatov",
//     name: "John",
//     lastName: "",
// };

// console.log(students);
// 6-masala

// let n = prompt("son kiriting: ");

// let arr = [20, 30, 40, 50 ];
// let c = [];
// {
//     if (arr > i) arr.push(c);
//     arr.sort();
// }
// console.log(c);

// ================

// let n = +prompt("Son kiriting:");

// let arr = [20, 10, 50, 40, 80];
// let i = [];

// arr.sort(arr);
// arr.push(i);

// console.log(i);

// ====================

// const arr = [20, 10, 50, 40, 80];

// arr.sort((a, b) => a - b);

// let i = [...arr];

// console.log(i);

// ===================

// let a = [89,77,55,10,7,6]
// let c = 50
// let b = []
// for(let i of a){
//     if(c>i){
//         b.push(i)
//     }
// }
// b.sort()

// console.log(b)

// ===================

// 7-masala

// let arr = ["a", 12, 23, "b"];

// let c = [];
// for (let i of arr) {
//     if (typeof i == string) {
//         c.push(i);
//     }
// }

// console.log(c);

// 8-masala

// const a = [12, 12, 3, 5, 5, 8];
// let s = [];
// for (let i of a) {
//     if (a.includes())
//       s.push(i);
// }
// console.log(s);

// ================

// const a = [12, 12, 3, 5, 5, 8, 11, 11];
// let s = [];

// for (let i of a) {
//     if (a.indexOf(i) === a.lastIndexOf(i)) {
//         s.push(i);
//     }
// }

// console.log(s);

// 9-masala

// let c = +prompt("son kiriting iltimos: ");

// const a = [2, 5, 6, 8, 9, 15];
// let d = 0;
// let j = 0;

// for (let i of a) {
//     if (i > n) {
//         d++;
//         j += i;
//     }
// }
// if (d > 0) {
//     console.log("O‘rtacha:", j / d);
// } else {
//     console.log("Bunday son yo‘q.");
// }
// console.log("Sonlar soni:", d);

// =================

// 10-masala

// const a = [12, 15, 8, 20, 3, 25]
// let d = 0
// let j = 0

// let n = 10

// for (let i of a) {
// 	if (i > n) {
// 		d++
// 		j += i
// 	}
// }

// if (d > 0) {
// 	console.log('O‘rtacha:', j / d)
// } else {
// 	console.log('Bunday son yo‘q.')
// }
// console.log('Sonlar soni:', d)

// function juftSonlarniKvadratQilibAjrat(massiv) {
// 	return massiv
// 		.filter(son => son % 2 === 0) // juft sonlarni ajratish
// 		.map(son => son ** 2) // kvadrat qilish
// 		.filter(son => son < 100) // 100 dan kichiklarni ajratish
// }

// // Misol uchun massiv
// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const natija = juftSonlarniKvadratQilibAjrat(massiv)

// console.log(natija) // [4, 16, 36, 64]

// //Berilgan sondan kichik bo‘lgan elementlarni tartib bilan yangi massivga joylashtiring.

// // for, if, push, sort
// function kichikElementlarniJoylashtir(massiv, son) {
//   const yangiMassiv = [];

//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] < son) {
//       yangiMassiv.push(massiv[i]);
//     }
//   }

//   yangiMassiv.sort((a, b) => a - b);

//   return yangiMassiv;
// }

// // Misol uchun massiv
// const massiv = [5, 2, 8, 1, 9, 4, 7, 6, 3];

// const son = 5;

// const natija = kichikElementlarniJoylashtir(massiv, son);

// console.log(natija); // [1, 2, 3, 4]

// function stringVaRaqamlarniAjratish(massiv) {
//   const stringlar = massiv.filter(element => typeof element === 'string');
//   const raqamlar = massiv.filter(element => typeof element === 'number');

//   stringlar.sort((a, b) => a.length - b.length);

//   return { stringlar, raqamlar };
// }

// // Misol uchun massiv
// const massiv = ['hello', 1, 'world', 2, 'abc', 3, 'def', 4];

// const natija = stringVaRaqamlarniAjratish(massiv);

// console.log(natija);
// // {
// //   stringlar: ['abc', 'def', 'hello', 'world'],
// //   raqamlar: [1, 2, 3, 4]
// // }

// // 11-masala

// const olma = {
// 	rangi: "qizil",
// 	tam: "shirin",
// 	nav: "eshak olma",
// 	shakl: "oval",
// 	pishgan: true,
// 	qurt: 0
// }

// const spacesip = {
// 	homePlanet: 'Earth',
// 	color: 'silver',
// 	crew: {
// 		capitan: 'Otabek',
// 		members: [
// 			{
// 				name: "O'lmas",
// 				age: 29,
// 				quality: 'medic',
// 			},

// 			{
// 				name: 'Abdukarim',
// 				age: 18,
// 				quality: 'injener',
// 			},

// 			{
// 				name: "Boboxo'ja",
// 				age: 16,
// 				quality: 'mexanik',
// 			},

// 			{
// 				name: 'kamol',
// 				age: 18,
// 				quality: 'inspektor',
// 			},
// 		],
// 	},
// 	mission: 'Explore the solar system',
// 	secretMission: 'Destroy Mars',
// 	takeoff() {
// 		console.log("Bip bop blast...")
// 		console.log("Taking of from the ground!")
// 	},
// 	fly() {
// 		console.log("The ship is flying!")
// 	},
// 	land() {
// 		console.log("Prrrshshshshhhh...")
// 		console.log("landing...")
// 	},
// 	shoot(){
// 		console.log("Pew pew pew")
// 	},
// };

// const ekipaj = spaceship.crew.members;

// for(let i = 0; i<ekipaj.length)

// const salaries = {
// 	"O'lmas": 10000,
// 	"Boboxo'ja": 9000,
// 	Abdukarim: 10000,
// 	Kamol: 5000,
// 	Firdavs: 5000,
// 	aziz: 12000,
// 	javohir: 22000,
// }

// let summa = 0
// let sanash = 0
// for (let i in salaries) {
// 	summa += salaries[i]
// 	sanash++
// }

// const urtacha = summa / sanash

// console.log(urtacha)

// Math.floor()
// Math.random()
// Math.round()
// Math.max()
// Math.min()
// Math.abs()
// Math.

// const talabalar = [
// 	"O'lmas",
// 	"Boboxo'ja",
// 	'Abdukarim',
// 	'Kamol',
// 	'Firdavs',
// 	'aziz',
// 	'javohir',
// 	'Abdulaziz',
// 	'Muhammadali',
// 	'Marjona',
// 	'Tahmina',
// 	'Shahlo',
// 	'Amirshox',
// 	'Javohir',
// 	'Kamron',
// 	'Mirsaid',
// 	'Muhammadmirzo',
// ]

// const randomTalaba = talabalar[Math.min(Math.random() * talabalar.length)]

// console.log('Random talabani tanladim: ', randomTalaba)

// const person = {
// 	name: 'Alice',
// 	greet: function () {
// 		console.log("Hello, I'm " + this.name)
// 	},
// }

// person.greet() // Outputs: Hello, I'm Alice

// console.dir(document);=>

// const body = document.children[0].children[1];
// body.className = 'tana';
// console.dir(body.className);
// const myTitle = document.body.children[0].children[0].children[0];

// myTitle.style.color = 'gold';
// myTitle.style.fontSize = '50px';

// const talabalar = [
// 	"O'lmas",
// 	"Boboxo'ja",
// 	'Abdukarim',
// 	'Kamol',
// 	'Firdavs',
// 	'aziz',
// 	'javohir',
// 	'Abdulaziz',
// 	'Muhammadali',
// 	'Marjona',
// 	'Tahmina',
// 	'Shahlo',
// 	'Amirshox',
// 	'Javohir',
// 	'Kamron',
// 	'Mirsaid',
// 	'Muhammadmirzo',
// ];

// const randomTalaba = talabalar[Math.floor(Math.random() * talabalar.length)];

// myTitle.textContent = 'Xush kelibsiz ' + randomTalaba;

// console.dir(myTitle);

// const paragraf = document.body.children[1].children[0].children[0].children[1];

// paragraf.style.color = 'green';
// paragraf.style.fontSize = '20px';

// const sarlavha = document.body.children[1].children[0].children[0].children[0];

// sarlavha.style.fontSize = '25px';
// sarlavha.style.color = 'blue';

// const talabalar = {
//   name: "O'lmas",
//   age: 20,
//   isStudent: true,
//   friends: ["Boboxo'ja", "Abdukarim", "Kamol", "Firdavs"],

// }

// // Mahsulotlar ro'yxati: har bir obyekt mahsulot nomi, narxi va statusini o'z ichiga oladi
// let magazin = [
//   { name: 'PAMIDOR', narxi: 15, status: true },
//   { name: 'KARTOSHKA', narxi: 8, status: false },
//   { name: 'SABZI', narxi: 10, status: true },
// ];

// // Har bir mahsulotni alohida ko'rib chiqamiz
// for (let i of magazin) {
//   // Agar mahsulot statusi true bo'lsa (ya'ni mavjud bo'lsa)
//   if (i.status === true) {
//     console.log(i.name); // Mahsulot nomini chiqaramiz
//   } else {
//     // Aks holda, ya'ni status false bo'lsa
//     console.log("to'g'ri ma'lumotlar mavjud emas"); // Xabar chiqaramiz
//   }
// }

// let products = [
//     {name:'apple',narxi:500,status:true},
//     {name:'limon',narxi:200,status:false},
//     {name:'kivi',narxi:700,status:true}
// ]

// for(let i of products){
//     if(i.status==true){
//         console.log(i.name);

//     }
// }

// function CreateOb(marka,model,yili){
//     let car = {
//         marka:marka,
//         model:model,
//         yili:yili

//     }
//     console.log(car)
// }

// CreateOb(prompt('marka: '),prompt('model: '),prompt('yili: '))

// const kalit so‘zi bilan o‘zgarmas (doimiy) o‘zgaruvchi yaratilmoqda

// // O'zgaruvchi uchun qiymat berildi
// const teacher = {
// 	// Obyektning "ism" degan xususiyati. Qiymati: 'Ali'
// 	ism: 'Ali',

// 	// "fan" degan xususiyat. Qiymati: 'Matematika'
// 	fan: 'Matematika',

// 	// greet — bu obyekt ichidagi funksiya (metod)
// 	greet: function () {
// 		// Konsolga salomlashish matni chiqariladi this.ism -> 'Ali', this.fan -> 'Matematika'
// 		console.log(`Salom, men ${this.ism}, ${this.fan} fanidan dars beraman`);
// 	},
// };

// // Bu yerda greet funksiyasi chaqirilmoqda, va u salomlashuvchi matnni konsolga chiqaradi
// teacher.greet();

// // O'rtacha bahoni hisoblash funksiyasi
// const student = {
// 	// Student (talaba) obyektiga 'grades' nomli massiv (array) berilgan
// 	grades: [90, 85, 95, 88, 92],

// 	// 'averageGrade' — bu metod (funksiya) bo‘lib, o‘rtacha bahoni hisoblaydi
// 	urtachaBahoni: function () {
// 		// reduce yordamida barcha baholar yig‘indisi hisoblanadi
// 		const sum = this.grades.reduce((a, b) => a + b, 0);

// 		// Yig‘indini baholar soniga bo‘lib, o‘rtacha bahoni qaytaradi
// 		return sum / this.grades.length;
// 	},
// };

// // Konsolga o‘rtacha bahoni chiqaradi
// console.log(student.urtachaBahoni());

// const student = {
//   grades: [], // Baholarni saqlash uchun bo‘sh massiv

//   // Tasodifiy baholar hosil qiluvchi funksiya
//   generateRandomGrades: function (count = 5) {
//     this.grades = []; // Avval massivni tozalaymiz
//     for (let i = 0; i < count; i++) {
//       const randomGrade = Math.floor(Math.random() * 101); // 0–100 oralig‘ida random baho
//       this.grades.push(randomGrade); // Massivga qo‘shamiz
//     }
//   },

//   // O‘rtacha bahoni hisoblaydigan funksiya
//   averageGrade: function () {
//     const sum = this.grades.reduce((a, b) => a + b, 0); // Barcha baholar yig‘indisi
//     return sum / this.grades.length; // O‘rtacha qiymat
//   }
// };

// // 👉 Bu qism obyekt tashqarisida bo‘lishi kerak
// student.generateRandomGrades(); // Random baholar hosil qilamiz
// console.log("Baholar:", student.grades); // Baholarni chiqaramiz
// console.log("O‘rtacha baho:", student.averageGrade()); // O‘rtacha bahoni chiqaramiz

/* Siz kiritgan kod student nomli obyektni yaratadi va unga grades nomli massiv va urtachaBahoni nomli metodni qo'shadi. Ushbu metod talabaning baholarining o'rtacha qiymatini hisoblaydi.

Mana qanday ishlaydi:

grades massivida talabaning baholari saqlanadi: [90, 85, 95, 88, 92].

urtachaBahoni metodida reduce funksiyasi ishlatiladi:

reduce() yordamida barcha baholar yig'indisi hisoblanadi. a (yig'uvchi) va b (hozirgi baho) parametrlar orqali barcha baholar qo'shiladi.

Yig'indi hisoblangandan so'ng, bu yig'indini this.grades.length (baholar soni) ga bo'lib, o'rtacha baho hisoblanadi.

console.log(student.urtachaBahoni()) bu metodni chaqiradi va konsolga o'rtacha bahoni chiqaradi.

Misol uchun:

Baholar: [90, 85, 95, 88, 92]

Yig'indi: 90 + 85 + 95 + 88 + 92 = 450

O'rtacha baho: 450 / 5 = 90

Natija: 90 bo'ladi.

Kodning ishlashi to'g'ri va har qanday xatolik yo'q. Bu kod o'rtacha bahoni hisoblash uchun mukammal yechim. */

// // Ishchilar ro'yxatini yaratamiz (har biri obyekt)
// const workers = [
// 	{ name: 'John', age: 30, lavozimi: 'Manager', tajriba: 5 }, // John - 30 yoshli manager
// 	{ name: 'Alice', age: 25, lavozimi: 'Developer', tajriba: 3 }, // Alice - 25 yoshli developer
// 	{ name: 'Bob', age: 35, lavozimi: 'Designer', tajriba: 8 }, // Bob - 35 yoshli designer
// 	{ name: 'Eve', age: 28, lavozimi: 'Manager', tajriba: 6 }, // Eve - 28 yoshli manager
// 	{ name: 'Charlie', age: 32, lavozimi: 'Developer', tajriba: 4 }, // Charlie - 32 yoshli developer
// 	{ name: 'David', age: 27, lavozimi: 'Designer', tajriba: 7 }, // David - 27 yoshli designer
// 	{ name: 'Frank', age: 29, lavozimi: 'Manager', tajriba: 5 }, // Frank - 29 yoshli manager
// ];

// // 'filter()' funksiyasi yordamida 30 yoshdan katta ishchilarni tanlab olamiz
// // 'worker' - bu massiv ichidagi har bir ishchini bildiradi
// const tajribaaliIshchilar = workers.filter(worker => worker.age > 30);

// // Natijani (filtrdan o‘tgan ishchilar ro'yxatini) konsolga chiqaramiz
// console.log(tajribaaliIshchilar);

/*
📌 Natija ekranda quyidagicha bo'ladi:
[
  { name: 'Bob', age: 35, lavozimi: 'Designer', tajriba: 8 },
  { name: 'Charlie', age: 32, lavozimi: 'Developer', tajriba: 4 }
]

📝 Chunki faqat Bob (35 yosh) va Charlie (32 yosh) 30 yoshdan katta.
Qolgan ishchilarning yoshi 30 yoki undan kichik.
*/

// telefonlar ro'yxatidagi har bir telefonning narxini olib 10% ni ayirib keyin yangi narxini chiqaramiz discountedPrice() funksiyasi yordamida
// const phone = [
// 	{ modelNomi: 'Iphone 14', ishlabChiqaruvchi: 'Apple', narxi: 1200000 },
// 	{ modelNomi: 'Samsung Galaxy S21', ishlabChiqaruvchi: 'Samsung', narxi: 1000000 },
// 	{ modelNomi: 'Google Pixel 6', ishlabChiqaruvchi: 'Google', narxi: 900000 },
// 	{ modelNomi: 'OnePlus 9 Pro', ishlabChiqaruvchi: 'OnePlus', narxi: 1100000 },
// 	{ modelNomi: 'Xiaomi Mi 11', ishlabChiqaruvchi: 'Xiaomi', narxi: 800000 },
// 	{ modelNomi: 'Huawei Mate 30 Pro', ishlabChiqaruvchi: 'Huawei', narxi: 1300000 },
// 	{ modelNomi: 'Nokia 8', ishlabChiqaruvchi: 'Nokia', narxi: 79564 },
// ];

// // telefonlar ro'yxatidagi har bir telefonning narxini olib 10% ni ayirib keyin yangi narxini qaytaruvchi funksiya
// // 10% chegirma hisoblaydigan funksiya
// function discountedPrice(phoneObj) {
// 	const discount = Math.floor(phoneObj.narxi * 0.1);
// 	return phoneObj.narxi - discount;
// }

// // Har bir telefon uchun yangi narxni chiqaramiz
// phone.forEach(telefon => {
// 	const yangiNarx = discountedPrice(telefon);
// 	// Natijani konsolga chiqaramiz
// 	console.log(
// 		`${telefon.modelNomi} (${telefon.ishlabChiqaruvchi}), Narxi: ${telefon.narxi} - Chegirmali narx: ${yangiNarx} so'm`,
// 	);
// });

// const body = document.children[0].children[1];
// body.className = 'tana';
// console.dir(body.className);
// const myTitle = document.body.children[0].children[0].children[0];

// myTitle.style.color = 'gold';
// myTitle.style.fontSize = '50px';

// const talabalar = [
// 	"O'lmas",
// 	"Boboxo'ja",
// 	'Abdukarim',
// 	'Kamol',
// 	'Firdavs',
// 	'aziz',
// 	'javohir',
// 	'Abdulaziz',
// 	'Muhammadali',
// 	'Marjona',
// 	'Tahmina',
// 	'Shahlo',
// 	'Amirshox',
// 	'Javohir',
// 	'Kamron',
// 	'Mirsaid',
// 	'Muhammadmirzo',
// ];

// const randomTalaba = talabalar[Math.floor(Math.random() * talabalar.length)];

// myTitle.textContent = 'Xush kelibsiz ' + randomTalaba;

// console.dir(myTitle);

// const paragraf = document.body.children[1].children[0].children[0].children[1];

// paragraf.style.color = 'green';
// paragraf.style.fontSize = '20px';

// const sarlavha = document.body.children[1].children[0].children[0].children[0];

// sarlavha.style.fontSize = '25px';
// sarlavha.style.color = 'blue';

// const styleLi = document.getElementsByClassName('moshina');
// styleLi.style.fontSize = '1rem';

// const styleLi = (document.getElementsById('#malibu').style.color = 'red');
