/**
 * У кожного рядка є вбудовані властивості і методи, розглянемо деякі з них.
    length — властивість, зберігає довжину рядка
    toLowerCase() і toUpperCase() — повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
    indexOf() — поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
    includes() — один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false
    str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.
    trim() — видаляє (“обрізає”) пробіли з початку та кінця рядка.
    padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. 
        Відступ застосовується з кінця/початку поточного рядка.
 */
/*
 * Довжина рядка, влістивість length
 */
const message = 'В цьому рядку 26 символів.';

// console.log(message.length);

/*
 * Конкатенація рядків
 */

const firstName = 'Emmy'
const lastName = 'Lee'

// console.log(firstName + ' ' + lastName);

// console.log(`Вітаю, ${firstName} ${lastName} , на нашому заході!`);


// const answer = prompt('Write your name, please')

// Метод trim() видаляє пропуски до та після рядка

// console.log(answer.trim());
// console.log(answer.length);

/*
 * Напиши скрипт який виведе рядок в форматі:
 * «Гість x y поселяється в g номер q»,
 * підставив замість x y g q значення змінних
 */
// const firstName = 'Mango';
// const lastName = 'Lee';
// const room = 716;
// const type = 'VIP';
// const customersMsg = 'Гість a b заселяється в v номер h';


// toLowerCase() і toUpperCase() — повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок

const brand = 'nike';
const normalizedBrand = brand.toLowerCase();

const result1 = 'This is Nike';
const result2 = 'This is Adidas';
const result3 = 'This is not nike';

const normalizedResult1 = result1.toLocaleLowerCase()

// console.log(normalizedResult1.includes(normalizedBrand));//true




// includes() — один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false

// console.log(str.includes(' '));//true або false

// str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.

// console.log(str.startsWith('Р'));
// console.log(str.endsWith('р'));

// trim() — видаляє (“обрізає”) пробіли з початку та кінця рядка.
// const userName = 'Mango'
// console.log(name.trim().length);

// padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини.
// Відступ застосовується з кінця/початку поточного рядка.
// console.log(userName.length);
const userName = 'Mango'
console.log(userName.length);

const greet = userName.padStart(2, '0')

console.log(greet);