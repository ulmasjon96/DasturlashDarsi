// // o'zgaruvchi yaratildi
// let user = {
// 	name: 'John',
// 	age: 30,
// 	isAdmin: true,

//   // sayHi funksiyasi yaratildi va user ga qo'shildi
//   sayHi() {
//     // this - user yordamida o'zgaruvchini ichidagi elementlarni chaqiradi va console ga chiqaradi
// 		console.log(this.isAdmin);
// 	},
// };

// user.sayHi();

// function User(name, age) {
// 	this.name = name;
// 	this.isAdmin = false;
// 	this.age = age;
// }

// let user = new User('John', 30);
// console.log(user.age);
// console.log(user.name);
// console.log(user.isAdmin);

// const screen = document.querySelector('.screen');
// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
// 	button.addEventListener('click', () => {
// 		const value = button.textContent;

// 		if (value === 'C') {
// 			screen.value = '';
// 		} else if (value === '=') {
// 			try {
// 				screen.value = eval(screen.value);
// 			} catch {
// 				screen.value = 'Error';
// 			}
// 		} else {
// 			screen.value += value;
// 		}
// 	});
// });
// //calculator yaratildi va o'zgaruvchiga qo'shildi
// const screen = document.querySelector('.screen');
// const buttons = document.querySelectorAll('.btn');
// const historyDiv = document.querySelector('.history');
// const toggle = document.getElementById('theme-toggle');

// let expression = '';

// function safeEval(expr) {
// 	try {
// 		if (/[^-()\d/*+.%\s]/.test(expr)) throw new Error('Invalid character');
// 		return new Function('return ' + expr)();
// 	} catch {
// 		return 'Error';
// 	}
// }

// function escapeHTML(str) {
// 	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// }

// buttons.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		let value = btn.textContent;

// 		if (expression === 'Error') expression = '';

// 		if (value === 'C') {
// 			expression = '';
// 		} else if (value === 'Del') {
// 			expression = expression.slice(0, -1);
// 		} else if (value === '=') {
// 			const result = safeEval(expression);
// 			historyDiv.innerHTML += `<p>${escapeHTML(expression)} = ${result}</p>`;
// 			historyDiv.scrollTop = historyDiv.scrollHeight;
// 			expression = result.toString();
// 		} else if (value === '( )') {
// 			if (expression.lastIndexOf('(') <= expression.lastIndexOf(')')) {
// 				expression += '(';
// 			} else {
// 				expression += ')';
// 			}
// 		} else {
// 			expression += value;
// 		}

// 		screen.value = expression;
// 	});
// });

// document.addEventListener('keydown', e => {
// 	if (expression === 'Error') expression = '';

// 	const allowed = '0123456789+-*/.%()';
// 	if (allowed.includes(e.key)) {
// 		expression += e.key;
// 		screen.value = expression;
// 	} else if (e.key === 'Enter') {
// 		const result = safeEval(expression);
// 		historyDiv.innerHTML += `<p>${escapeHTML(expression)} = ${result}</p>`;
// 		historyDiv.scrollTop = historyDiv.scrollHeight;
// 		expression = result.toString();
// 		screen.value = expression;
// 	} else if (e.key === 'Backspace') {
// 		expression = expression.slice(0, -1);
// 		screen.value = expression;
// 	}
// });

// toggle.addEventListener('click', () => {
// 	document.body.classList.toggle('dark');
// 	toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
// });

// calculator yaratildi va o'zgaruvchiga qo'shildi
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const equalBtn = document.getElementById('equal');
const topDisplay = document.querySelector('.top-display');
const bottomDisplay = document.querySelector('.bottom-display');
// const screen = document.querySelector('.screen');
// const historyDiv = document.querySelector('.history');
// const themeToggle = document.getElementById('theme-toggle');

let YANGISON = '';
let ESKISON = '';
let OPERATSIYA = '';
let NATIJA = '';

numberBtns.forEach(btn => {
	btn.addEventListener('click', addNumber);
});

function addNumber(hodisa) {
	// console.log(hodisa.target.textContent);
	let number = hodisa.target.textContent;

	if (YANGISON.includes('.') && number === '.') return;
	if (YANGISON == '' && number == '.') return;

	if (YANGISON == '0' && number != '.') {
		YANGISON = number;
	} else {
		YANGISON += number;
	}

	updateScreen();
}

function updateScreen() {
	bottomDisplay.textContent = YANGISON;
}
