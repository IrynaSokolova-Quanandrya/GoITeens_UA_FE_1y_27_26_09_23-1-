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

console.log(names);
// console.log(names.length);
// console.log(names[2]);

names[1] = 'Andriy'

console.log(names);

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

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

// Методи split() і join()
const str = 'Hello!';
const arrStr = str.split('')
// console.log(arrStr);

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];


// const reversArr = names.join(', ')
// console.log(reversArr);

// Методи indexOf() і includes()

// Методи push(), pop(), shift(), unshift()

// names.push('Lera')
// console.log(names);
// names.pop()
// console.log(names);


// names.shift();
// console.log(names);
// names.unshift('Marko')
// console.log(names);

// Метод slice()
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

// const slicedNames = names.slice()
// console.log(slicedNames);

// Метод concat()
const arr1 = [5, 2, 6]

// const concatedArrs = names.concat(arr1, matrix)
// console.log(concatedArrs);

// Метод splice()

// splice(position, num)

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

//видалення
// const splicedName = names.splice(1,2)
// console.log(splicedName);

// додавання
// console.log(names.splice(4, 0, 'Marina', 'Egor'));
// console.log(names);

//заміна
// names.splice(2, 1, 'Marina', 'Egor')
// console.log(names);
