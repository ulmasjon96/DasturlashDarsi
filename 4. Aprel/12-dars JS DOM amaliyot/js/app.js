const quotes = [
	{
		quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		author: 'Nelson Mandela',
	},
	{
		quote: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		quote: "Your time is limited, so don't waste it living someone else's life.",
		author: 'Steve Jobs',
	},
	{
		quote: 'If life were predictable it would cease to be life, and be without flavor.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: "If you look at what you have in life, you'll always have more.",
		author: 'Oprah Winfrey',
	},
	{
		quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
		author: 'Mother Teresa',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote: 'Always remember that you are absolutely unique. Just like everyone else.',
		author: 'Margaret Mead',
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
		author: 'Robert Louis Stevenson',
	},
	{
		quote: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
		author: 'Benjamin Franklin',
	},
	{
		quote:
			'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
		author: 'Helen Keller',
	},
	{
		quote: 'It is during our darkest moments that we must focus to see the light.',
		author: 'Aristotle',
	},
	{
		quote: 'Whoever is happy will make others happy too.',
		author: 'Anne Frank',
	},
	{
		quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
		author: 'Ralph Waldo Emerson',
	},
	{
		quote: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		quote: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Don’t watch the clock; do what it does. Keep going.',
		author: 'Sam Levenson',
	},
	{
		quote: 'Everything you’ve ever wanted is on the other side of fear.',
		author: 'George Addair',
	},
	{
		quote: 'Hardships often prepare ordinary people for an extraordinary destiny.',
		author: 'C.S. Lewis',
	},
	{
		quote: 'Believe you can and you’re halfway there.',
		author: 'Theodore Roosevelt',
	},
	{
		quote: 'Push yourself, because no one else is going to do it for you.',
		author: 'Unknown',
	},
	{
		quote: 'Great things never come from comfort zones.',
		author: 'Unknown',
	},
	{
		quote: 'Dream it. Wish it. Do it.',
		author: 'Unknown',
	},
	{
		quote: 'Success doesn’t just find you. You have to go out and get it.',
		author: 'Unknown',
	},
	{
		quote: 'The harder you work for something, the greater you’ll feel when you achieve it.',
		author: 'Unknown',
	},
	{
		quote: 'Don’t stop when you’re tired. Stop when you’re done.',
		author: 'Unknown',
	},
	{
		quote: 'Wake up with determination. Go to bed with satisfaction.',
		author: 'Unknown',
	},
	{
		quote: 'Do something today that your future self will thank you for.',
		author: 'Unknown',
	},
	{
		quote: 'Little things make big days.',
		author: 'Unknown',
	},
	{
		quote: 'It’s going to be hard, but hard does not mean impossible.',
		author: 'Unknown',
	},
	{
		quote: 'Don’t limit your challenges. Challenge your limits.',
		author: 'Unknown',
	},
	{
		quote: 'Sometimes we’re tested not to show our weaknesses, but to discover our strengths.',
		author: 'Unknown',
	},
	{
		quote: 'The key to success is to focus on goals, not obstacles.',
		author: 'Unknown',
	},
	{
		quote: 'Dream bigger. Do bigger.',
		author: 'Unknown',
	},
	{
		quote: 'You don’t have to be great to start, but you have to start to be great.',
		author: 'Zig Ziglar',
	},
	{
		quote: 'Keep your eyes on the stars, and your feet on the ground.',
		author: 'Theodore Roosevelt',
	},
	{
		quote: 'Action is the foundational key to all success.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'Success usually comes to those who are too busy to be looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		quote: 'Opportunities don’t happen. You create them.',
		author: 'Chris Grosser',
	},
	{
		quote: 'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
		author: 'Roy T. Bennett',
	},
	{
		quote: 'You miss 100% of the shots you don’t take.',
		author: 'Wayne Gretzky',
	},
	{
		quote: 'Do not wait; the time will never be ‘just right’.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Perseverance is not a long race; it is many short races one after the other.',
		author: 'Walter Elliot',
	},
	{
		quote: 'Start where you are. Use what you have. Do what you can.',
		author: 'Arthur Ashe',
	},
	{
		quote: 'Quality is not an act, it is a habit.',
		author: 'Aristotle',
	},
	{
		quote: 'If you’re going through hell, keep going.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Don’t be afraid to give up the good to go for the great.',
		author: 'John D. Rockefeller',
	},
	{
		quote: 'Success is walking from failure to failure with no loss of enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Only those who dare to fail greatly can ever achieve greatly.',
		author: 'Robert F. Kennedy',
	},
	{
		quote: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
		author: 'Zig Ziglar',
	},
	{
		quote: 'Don’t let yesterday take up too much of today.',
		author: 'Will Rogers',
	},
	{
		quote: 'You are never too old to set another goal or to dream a new dream.',
		author: 'C.S. Lewis',
	},
	{
		quote: 'Work hard in silence, let success make the noise.',
		author: 'Unknown',
	},
	{
		quote: 'You don’t find willpower, you create it.',
		author: 'Unknown',
	},
	{
		quote: 'Discipline is the bridge between goals and accomplishment.',
		author: 'Jim Rohn',
	},
	{
		quote: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Og Mandino',
	},
	{
		quote: 'Success is what happens after you’ve survived all your mistakes.',
		author: 'Unknown',
	},
	{
		quote: 'Make each day your masterpiece.',
		author: 'John Wooden',
	},
	{
		quote: 'The future depends on what you do today.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'Be not afraid of going slowly, be afraid only of standing still.',
		author: 'Chinese Proverb',
	},
	{
		quote: 'You can if you think you can.',
		author: 'George Reeves',
	},
	{
		quote: 'You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.',
		author: 'Zig Ziglar',
	},
	{
		quote: 'Winners are not afraid of losing. But losers are.',
		author: 'Robert Kiyosaki',
	},
	{
		quote: 'Success is the sum of small efforts, repeated day in and day out.',
		author: 'Robert Collier',
	},
	{
		quote: 'Do not be embarrassed by your failures, learn from them and start again.',
		author: 'Richard Branson',
	},
];

// HTML sahifasidagi ".btn" klassli tugmani tanlaymiz
const yangiQuoteBtn = document.querySelector('.btn');

// Tugma bosilganda "yangiQuotechiqar" funksiyasini ishga tushiramiz
yangiQuoteBtn.addEventListener('click', yangiQuotechiqar);

// Bu funksiya har safar tugma bosilganda yangi tasodifiy sitatani chiqaradi
function yangiQuotechiqar() {
	// 0 dan quotes.length - 1 gacha bo‘lgan tasodifiy indeks yaratamiz
	const random = Math.floor(Math.random() * quotes.length);

	// Tanlangan indeksdagi sitataning matnini sahifadagi ".quote-text" elementiga yozamiz
	document.querySelector('.quote-text').textContent = quotes[random].quote;

	// Tanlangan indeksdagi muallif ismini sahifadagi ".quote-author" elementiga yozamiz
	document.querySelector('.quote-author').textContent = quotes[random].author;
}
