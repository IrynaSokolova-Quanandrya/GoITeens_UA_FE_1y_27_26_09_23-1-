/*
* Прототип об'єкту
* Object.create()
* [[Prototype]]
* Ланцюг прототипів
*/

const user = {
    name: 'Amy',
    age: 15,

    changeName(newName) {
        this.name = newName
    }
}

user.changeName('Mary')
console.log(user);


// Array
// Boolean
// Object

const names = ['Bob', 'John']

console.log(names);
// names.map()

