/*
 *  Приведення до булю на прикладі Boolean(value)
 */

/**
 * FALSE
 * 1.false
 * 2.null
 * 3.undefined
 * 4.NaN
 * 5.0
 * 6.'' або ""
 */

// console.log(Boolean(0));//false

/*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */
                  
// const result = 'hello' && 'false' && false
// console.log(result);


// const salary = 4500;
// if (salary < 1000) {
//     console.log('1 рівень досвіду');
//             //true             //false
// } else if (salary > 2000 && salary < 3000) {
//     console.log('2 рівень досвіду');
// } else if (salary > 3000 && salary < 5000) {
//     console.log('3 рівень досвіду');
// } else if (salary >= 4000) {
//     console.log('Керівник відділу');
// }



/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */
                      
const result = '' || 'false' || NaN 
// console.log(result);


/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */

const revers = !''
console.log(revers);
