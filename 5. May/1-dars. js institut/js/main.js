// let users = [
// 	{ id: 1, name: 'Karim', age: 25, status: true },
// 	{ id: 2, name: 'Alisher', age: 20, status: true },
// 	{ id: 3, name: 'Ali', age: 18, status: false },
// 	{ id: 4, name: 'Karima', age: 30, status: false },
// 	{ id: 5, name: 'Mulim', age: 54, status: true },
// ];

// for (let i = 0; i < users.length; i++) {
// 	if (users[i].status === false) {
// 		console.log(users[i].name);
// 	}
// }

// let users = [
// 	{ id: 1, name: 'Karim', age: 25, status: true },
// 	{ id: 2, name: 'Alisher', age: 20, status: true },
// 	{ id: 3, name: 'Ali', age: 18, status: false },
// 	{ id: 4, name: 'Karima', age: 30, status: false },
// 	{ id: 5, name: 'Mulim', age: 54, status: true },
// ];

// let b = [];
// let a = 0;
// for (let i of users) {
// 	if (i.status === true) {
// 		a += i.id;
// 	}
// }
// console.log(a);

// let users = [
// 	{ id: 1, name: 'Karim', age: 25, status: true },
// 	{ id: 2, name: 'Alisher', age: 20, status: true },
// 	{ id: 3, name: 'Ali', age: 18, status: false },
// 	{ id: 4, name: 'Karima', age: 30, status: false },
// 	{ id: 5, name: 'Mulim', age: 54, status: true },
// ];

// let a = users.filter(user => user.status).reduce((sum, user) => sum + user.id, 0);

// console.log(a);

// let users = [
// 	{ id: 1, name: 'Karim', age: 25, status: true },
// 	{ id: 2, name: 'Alisher', age: 20, status: true },
// 	{ id: 3, name: 'Ali', age: 18, status: false },
// 	{ id: 4, name: 'Karima', age: 30, status: false },
// 	{ id: 5, name: 'Mulim', age: 54, status: true },
// ];

// let activeUsers = users.filter(user => user.status);
// let averageAge = activeUsers.reduce((sum, user) => sum + user.age, 0) / activeUsers.length;

// console.log(averageAge);

// let users = [
// 	{ id: 1, name: 'Karim', age: 25, status: true },
// 	{ id: 2, name: 'Alisher', age: 20, status: true },
// 	{ id: 3, name: 'Ali', age: 18, status: false },
// 	{ id: 4, name: 'Karima', age: 30, status: false },
// 	{ id: 5, name: 'Mulim', age: 54, status: true },
// ];

// let totalAge = 0;
// let count = 0;

// for (let user of users) {
// 	if (user.status === true) {
// 		totalAge += user.age;
// 		count++;
// 	}
// }

// let averageAge = totalAge + count;
// console.log(averageAge);

// function names(a, b = 8) {
// 	console.log(a + b);
// 	return a + b;
// }
// names(10);

// function words(a) {
// 	let max = a[0].length;
// 	for (let i = 1; i < a.length; i++) {
// 		if (a[i].length > max) {
// 			max = a[i];
// 		}
// 	}
// 	console.log(max);
// }

// words(['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']);

// function isValidEmail(email) {
// 	// @ va . mavjudligini va ularning to‘g‘ri tartibda ekanligini tekshiramiz
// 	const atIndex = email.indexOf('@'); // email ichidan birinchi @ belgisining indeksini topadi
// 	const dotIndex = email.lastIndexOf('.'); // email ichidan oxirgi . belgisining indeksini topadi

// 	// Shartlarni tekshiramiz:
// 	return (
// 		atIndex > 0 && // @ belgisi birinchi belgidan keyin bo‘lishi kerak (ya’ni, boshida emas)
// 		dotIndex > atIndex + 1 && // . belgisi @ dan keyin bo‘lishi kerak, va ikkalasining orasida kamida bitta belgi bo‘lishi kerak
// 		dotIndex < email.length - 1
// 	); // . belgisi email oxirida bo‘lmasligi kerak
// }

// // Namuna
// console.log(isValidEmail('user@example.com')); // true
// console.log(isValidEmail('userexample.com')); // false
// console.log(isValidEmail('dasfasdf@mail.ru')); // false
// console.log(isValidEmail('user@.com')); // false

// function countWords(text) {
// 	const trimmedText = text.trim(); // 1. Boshi-oxiridagi bo‘sh joylarni olib tashlash
// 	const words = trimmedText.split(/\s+/); // 2. Bo‘sh joylarga qarab bo‘lish (1 yoki undan ko‘p probel)
// 	return trimmedText === '' ? 0 : words.length; // 3. Agar matn bo‘sh bo‘lsa, 0 qaytar, aks holda uzunlik
// }

// console.log(countWords('Bu JavaScript funksiyasi uchun test matni')); // 6
// console.log(countWords('  Salom               dunyo  ')); // 2
// console.log(countWords('   ')); // 0
// console.log(countWords('')); // 0

let number = 42;
document.write('The answer is ' + number);
