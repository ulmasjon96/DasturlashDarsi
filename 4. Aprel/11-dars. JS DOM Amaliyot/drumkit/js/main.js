// // dump kit
// // keypress = bosib o'tirsa islayveradi
// // keydawn =
// // key
// // JavaScript - Interaktivlik
// document.addEventListener('keypress', playSound) // Tugma bosilganda playSound funksiyasini chaqiradi
// dokument.addEventListener("keyup", removeSound);

// function playSound(event) {
// 	console.log(event.key); // Bosilgan tugmani konsolga chiqaradi
// 	const availableKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']; // Ruxsat etilgan tugmalar ro'yxati

// 	// Agar tugma ro'yxatda bo'lmasa, funksiya ishlamaydi
// 	if (!availableKeys.includes(event.key)) return;

// 	// Bosilgan tugma va unga tegishli audio elementini tanlash
// 	const pressedKey = document.querySelector(`div.${event.key}`); // Bosilgan klavish
// 	const audio = document.querySelector(`audio.${event.key}`); // Bosilgan tugmaga mos audio fayl

// 	// Audio boshlanishini ta'minlash (0 dan boshlanish)
// 	audio.currentTime = 0;
// 	audio.play(); // Audio ijro etiladi

// 	// Tugmani faollashtirish: unga 'active' sinfini qo'shish
// 	pressedKey.classList.add('active'); // Klavishni faollashtiradi

// 	// 150 millisekunddan so'ng klavishning faolligini olib tashlash
// 	setTimeout(() => {
// 		pressedKey.classList.remove('active'); // 'active' sinfini olib tashlaydi
// 	}, 150);
// }

// Hozir bosilgan tugmalarni saqlash uchun obyekt
const pressedKeys = {};

document.addEventListener('keydown', function (event) {
	const key = event.key.toLowerCase();
	const allowedKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	if (!allowedKeys.includes(key)) return;

	// Agar tugma allaqachon bosilgan bo‘lsa, hech narsa qilinmaydi
	if (pressedKeys[key]) return;

	// Tugmani bosilgan deb belgilang
	pressedKeys[key] = true;

	const audio = document.querySelector(`audio.${key}`);
	const keyDiv = document.querySelector(`div.${key}`);

	if (!audio || !keyDiv) return;

	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add('active');
});

document.addEventListener('keyup', function (event) {
	const key = event.key.toLowerCase();
	const keyDiv = document.querySelector(`div.${key}`);
	if (keyDiv) keyDiv.classList.remove('active');

	// Tugma qo‘yib yuborilganda flagni false qilamiz
	pressedKeys[key] = false;
});
