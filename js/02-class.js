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
        this._model = model
        this.price = price
        this.color = color    
    }
    
    get model() {
        console.log(this._model);
    }

    set model(newModel) {
        this._model = newModel
    }
    }   
    
    



const car1 = new Car({ model: 'Audi', price: 50000, color: 'red' })

car1.getModel()
car1.setModel('Audi Q6')

// геттери та сеттери
car1.model
car1.model = 'Audi Q6'

const car2 = new Car({model:'Mercedec',price:90000,color:'white' })
const car3 = new Car({model:'Mazda',price:5000,color:'black' })

console.log(car1);
console.log(car2);
console.log(car3);