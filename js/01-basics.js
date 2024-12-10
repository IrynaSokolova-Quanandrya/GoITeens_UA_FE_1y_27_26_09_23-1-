/*
 * Знайомство з масивами
 * - Об`явлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 * - Ітерація
 */

const arr = []
const names = ['Mark', 'Andrjy', 'Demian', 'Danya'];

// console.log(names);
// console.log(names.length);
// console.log(names[2]);

names[1] = 'Andriy'

// console.log(names);

/*
 * Передача по посиланню і по значенню
 * - Примітиви і складні типи данних
 * - Посисальна рівність (referential equality)
 */



/*
 * Перебор (ітерація) масиву
 * - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого змінювати не потрібно
 */

const cities = ['Kharkiv', 'Lviv', 'Kyiv', 'Dnipro', 'Poltava', 'Zhytomyr']

for (let city of cities) {
    // console.log(city);

    city += '!'
}

// for (let i = 0; i <= cities.length - 1; i += 1){
//     console.log(i);
//     console.log(cities[i]);
//     cities[i]+='!'
// }

console.log(cities);





