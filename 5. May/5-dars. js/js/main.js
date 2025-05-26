const students = [
	{ firstName: 'Ibrohim', lastName: 'Otabekov', age: 15, grade: 10 },
	{ firstName: 'Mirsaid', lastName: 'Mambetov', age: 15, grade: 9 },
	{ firstName: 'Kamron', lastName: 'Toirov', age: 15, grade: 9 },
	{ firstName: 'Javohir', lastName: 'Qurbonov', age: 15, grade: 9 },
	{ firstName: 'Asilbek', lastName: 'Abdullayev', age: 14, grade: 9 },
	{ firstName: 'Amirbek', lastName: 'Abdullayev', age: 14, grade: 8 },
	{ firstName: 'Rasul', lastName: "G'aybullayrv", age: 14, grade: 8 },
	{ firstName: 'Daler', lastName: 'Raxmonov', age: 14, grade: 8 },
	{ firstName: 'Alibek', lastName: 'Nazarov', age: 13, grade: 7 },
	{
		firstName: `O'lmasjon`,
		lastName: `Ismatov`,
		age: 29,
		grade: '1-Kurs talaba',
	},
];

const tableBody = document.getElementById('studentTableBody');



// const yangiOyna = document.getElementById('openModal');

// yangiOyna.addEventListener('click', () => {
// 	const modal = document.getElementById('myModal');
// 	modal.classList.add('active');
//   const newContent = document.body;
//   newContent.classList.add('active');

// });



// // Modalni yopish uchun "X" tugmasi
// const closeModal = document.getElementById('closeModal');

// closeModal.addEventListener('click', () => {
// 	const modal = document.getElementById('myModal');
// 	modal.classList.remove('active'); // Modalni yopish, "active" klassini olib tashlash
// });

// // Modalni tashqarisiga bosganda ham yopish
// window.addEventListener('click', event => {
// 	const modal = document.getElementById('myModal');
// 	if (event.target === modal) {
// 		// Agar foydalanuvchi modal tashqarisiga bosgan bo'lsa
// 		modal.classList.remove('active'); // "active" klassini olib tashlash
// 	}
// });

students.forEach((student, index) => {
	const row = document.createElement('tr');

	if (typeof student.grade === `number`) student.grade = `${student.grade}-sinf`;

	row.innerHTML = `
		<td>${index + 1}</td>
		<td>${student.firstName} ${student.lastName}</td>
		<td>${student.age}</td>
		<td>${student.grade}</td>
	`;

	tableBody.appendChild(row);
});
