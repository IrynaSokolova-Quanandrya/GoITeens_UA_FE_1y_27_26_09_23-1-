/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно преривати цикл
 */

// array.method(callback[currentValue, index, array])


const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) { })
// let total=0
// numbers.forEach(function (number) { 
// total += number
// })

// console.log(total);

// console.log(numbers)

// function fnA(...rest) {
//     console.log(rest);
// }

// fnA(10, 5, 10)
// fnA(10)

// const obj = {
//     a: 5,
//     b: 10,
//     c: 15
// }

// const { a, ...rest } = obj

// console.log(rest);