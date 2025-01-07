/**
 * Функція вищого порядку  — функція, що приймає в якості параметрів інші
 * функції або повертає функцію як результат.
 * 
 * Функція зворотного виклику (callback)  — це функція, яка передається іншій
 * функції як аргумент і та, в свою чергу, викликає передану функцію.
 */

const getUserName = function(userName) {
    console.log(userName);
}



const logUserName = function (callback) {
    callback('Tom')
}

logUserName(getUserName)

/**
 * Напишіть функцію doTask(callback), яка викликає передану їй функцію.
 * Напишіть функцію modifyArray(arr, callback), яка приймає масив і колбек для 
 * зміни кожного елемента масиву (збільшення кожного елемента вдвічі).
 */


function modifyArray(array, callback) {
    let newArray = [];
    for (const element of array) {
        if (callback(element)) {
            newArray.push(element);
        }
    }

    return newArray
}

function callback1(number) {
   return number >= 3
}

modifyArray([1, 2, 3, 4, 5], callback1); // [3, 4, 5]
