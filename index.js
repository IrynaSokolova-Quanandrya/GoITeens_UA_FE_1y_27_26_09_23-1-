const name = 'Bob';
const age = 15;

console.log(name);
console.log('Hello');

let message;

// message = 'Привіт, студент!';

console.log(message);

// Примітивні типи данних

// String - рядок
const user = 'Nikita';
const userLength = user.length
console.log(user.toLocaleUpperCase());
console.log(userLength);


// Number - число
const quantity = 10;

// Undefined
// Null
let userData = null;

// Boolean - буль
const isHidden = false;
const isOnline = true;
const shouldOpen = false;

// Взаємодія з користувачем

/**
 * ALERT
 */
// alert('Привіт! Гарного настрою))')

/**
 * CONFIRM
 */
// const userAnswer = confirm('Ви впевнені, що хочете покинути сторінку?');
// console.log("userAnswer: ", userAnswer);

/**
 * PROMPT
 */
const promptResult =  prompt('Підпишіться на розсилку спаму')
console.log('promptResult: ', promptResult);