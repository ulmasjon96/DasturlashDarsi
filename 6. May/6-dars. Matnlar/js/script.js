'use strict';

let firstName = 'Alexander',
	lastname = 'Abdullayev',
	str = 'Hello world i am web developer',
	value;

value = 'hello';
value = 'world';
value = 'hello world';

// value = 'he says: "i am developer"';
// value = 'he says: "i\'m developer"';
// value = 'he says: \'i am developer\'';
// value = 'he says: \'i\'m developer\'';

value = `task:
 - task1
 - task2
 - task3
`;

/**
 * \n - yangi qatorga o'tkazib beradi
 * \t - tab belgisi bilan o'tkazib beradi
 */

firstName = 'Alexander';

value = firstName[0];
value = firstName[3];
value = firstName.length; // matndagi harflar sonini olib beradi
value = firstName.length - 1; // matnni oxiridan boshlab sonini olib beradi
value = firstName[firstName.length - 1]; // matnni oxiridan boshlab sonini olib beradi va harfni chiqarib beradi
value = str[str.length - 1]; // matnni oxiridan boshlab sonini olib beradi va harfni chiqarib beradi
value = lastname[lastname.length - 1]; // matnni oxiridan boshlab sonini olib beradi va harfni chiqarib beradi

value = 'hello' + 'world'; // matnlarni qo'shib beradi
value = firstName + lastname; // matnlarni qo'shib beradi orasida bo'sh joy bo'lmaydi
value = `${firstName} ${lastname}`; // matnlarni qo'shib beradi orasida bo'sh joy bo'lmaydi

// Metodlar
str = 'Hello world i am web developer';

// indexOf
value = str.indexOf('w');
value = str.indexOf('w');
value = str.indexOf('w');
value = str.indexOf('w');
value = str.indexOf('w');

// lastIndexOf
value = str.lastIndexOf('w');
value = str.lastIndexOf('w');
value = str.lastIndexOf('w');

// includes
value = str.includes('web');
value = str.includes('Web');
value = str.includes('WEB');

// concat

value = firstName.concat(' ', lastname);

// slice - matndagi bir qismni olib tashlaydi

value = str.slice(0, 5) // 0 dan 5 gacha bo'lgan matnni olib beradi
value = str.slice(6) // 6 harfdandan boshlab oxirigacha matnni olib beradi
value =

// upperCase - 
// lowerCase
// slice
// trim
// replace
// split
// substr
// substring
// charCodeAt
// charAt
// codePointAt
// repeat
// localeCompare
// startsWith
// endsWith
// match
// search
// padStart
// padEnd
// fromCharCode
// fromCodePoint
// at
// key
// entries
// values
// keys
// find
// findIndex
// filter
// map
// forEach
// sort
  // reverse

console.log(value);
