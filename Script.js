// Bodyga class berish
const body = document.body;
body.className = 'tana'; // Bodyga 'tana' classini berish
console.dir(body.className);

// Titlega rang va o'lcham berish
const myTitle = document.body.querySelector('.header h1');
myTitle.style.color = 'gold';
myTitle.style.fontSize = '50px';

// Talabalar ro'yxatini yaratish va tasodifiy talaba tanlash
const talabalar = [
	"O'lmas",
	"Boboxo'ja",
	'Abdukarim',
	'Kamol',
	'Firdavs',
	'aziz',
	'javohir',
	'Abdulaziz',
	'Muhammadali',
	'Marjona',
	'Tahmina',
	'Shahlo',
	'Amirshox',
	'Javohir',
	'Kamron',
	'Mirsaid',
	'Muhammadmirzo',
];
const randomTalaba = talabalar[Math.floor(Math.random() * talabalar.length)];
myTitle.textContent = 'Xush kelibsiz ' + randomTalaba;
console.dir(myTitle);

// // Paragraphga rang va o'lcham berish
// const paragraf = document.body.querySelector('section p');
// paragraf.style.color = 'green';
// paragraf.style.fontSize = '20px';

// // Sarlavha uchun rang va o'lcham berish
// const sarlavha = document.body.querySelector('section h2');
// sarlavha.style.fontSize = '25px';
// sarlavha.style.color = 'blue';

// Umumiy ro'yxatni stil qilish
const list = document.getElementById('moshinalar');
list.style.fontSize = '3rem';
list.style.color = 'red';
list.style.display = 'flex';
list.style.flexDirection = 'column';
list.style.alignItems = 'center';

// hamma lilarga style berish 
list.querySelectorAll('li.moshina').forEach(li => {
	li.style.padding = '20px';
	li.style.border = '2px solid black';
	li.style.margin = '10px';
});
// Har bir mashinaga alohida rang berish
document.querySelector('#malibu').style.color = 'orange';
document.getElementById('cobalt').style.color = 'pink';
document.getElementById('matiz').style.color = 'purple';
document.getElementById('tico').style.color = 'black';
document.getElementById('nexia').style.color = 'brown';
document.getElementById('tracker').style.color = 'blue';
document.getElementById('tahoe').style.color = 'aqua';
document.getElementById('camry').style.color = 'green';

// Listaga animatsiya qo'shish
// list.style.animation = '2s ease-in-out infinite slideAnimation';
