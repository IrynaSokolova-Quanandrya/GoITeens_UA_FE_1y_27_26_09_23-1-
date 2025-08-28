/*
 * Створення промісу
 *  - Клас Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 *  - catch()
 *  - then()
 *  - finally()
 * - 'https://pokeapi.co/api/v2/pokemon/5'
 */
const promise = new Promise((resolve, rejected) => {
	resolve('Код виконання промісу!')
})
promise.then(str => console.log(str))

fetch('https://pokeapi.co/api/v2/pokemon/5').then(res => console.log(res))
