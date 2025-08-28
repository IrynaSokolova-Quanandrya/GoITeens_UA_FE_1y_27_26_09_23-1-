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

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

/*
 * Ланцюжки Промісів (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконаний в любому випадку'));
