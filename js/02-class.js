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

class Car {
    static description = 'Опис автомобіля'
    #region = 5
    constructor({model, price, color}) {
        this.model = model
        this.price = price
        this.color = color
       
}
    }   
    



const car1 = new Car({model:'Audi',price:50000,color:'red' })
const car2 = new Car({model:'Mercedec',price:90000,color:'white' })
const car3 = new Car({model:'Mazda',price:5000,color:'black' })

console.log(car1);
console.log(car2);
console.log(car3);