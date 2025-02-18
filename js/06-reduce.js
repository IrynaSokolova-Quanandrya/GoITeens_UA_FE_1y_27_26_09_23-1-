/*
 * Array.prototype.reduce()
 * - Поелементо перебирає оригінальний масив
 * - Повертає що завгодно 🤯
 * - Замінює все на світі, але використовувати потрібно з розумом
 */
// array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)

const numbers = [5, 10, 15, 20, 25];

// let total = 0

// numbers.forEach(function (num) {
//   total += num  
// })

// const total = numbers.reduce(function (totalSum, number) {}, 0);

// console.log(total);
// acc = 0
// acc = acc + number => 0 + 5 = 5
// acc = acc + number => 5 + 10 = 15
// acc = acc + number => 15 + 15 = 30
// acc = acc + number => 30 + 20 = 50
// acc = acc + number => 50 + 25 = 75

// console.log('total: ', total);


/*
 * Рахуємо загальну зп
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

// console.log(totalSalary);

/*
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];



// console.log(totalTimePlayed);

/*
 * Рахуємо загальну кількість товарів в кошику
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];


// console.log(totalAmount);

/*
 * Збираємо всі теги з твітів
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];



const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags)
return tags
}, []).reduce((acc, tag) => {
  if (acc[tag]) {
    acc[tag] +=1
  } else {
    acc[tag] = 1
  }
  return acc
}, {}).map();


console.log(allTags);
// const tags = {
// js: 1,
// nodejs: 2,
// html: 3
// }

// tag = 'css'

// tags.js//1
// tags[tag]//1


// console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведемо статистику тегів
 */

// console.log(tagsStats);

// якщо властивість з ключем tag є, збільшуємо його значення на 1
// якщо властивості немає с таким ключем що в tag, створити і записати 1

// {
//   ...acc,
//   [tag]: acc[tag] ? acc[tag] += 1 : acc[tag] = 1,
//  }