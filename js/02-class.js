/**
 * Основи ООП: клас, об'єкт, інтерфейс
 */

/*
 * Класи
 * 🐷 - об'явлення (Car)
 * 🐷 - конструктор
 * 🐷 - методи 
 * 🐷 - static(description, logInfo)
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивостей та методи класів
 * 🐷 - Геттери та сеттери
 */

let total = 0;
const num1 = 5;
const num2 = 10;

function getSum(a, b) {
    return total = a + b    
}
getSum(num1, num2)


const add = {
    total: 0,
    num1: 5,
    num2: 10,
    
    getSum() {
    return this.total = this.num1 + this.num2    
}
}

add.getSum()