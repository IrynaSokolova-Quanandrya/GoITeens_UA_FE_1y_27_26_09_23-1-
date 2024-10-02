/*
 *  Приведення до булю на прикладі Boolean(value)
 */

//true false

/**
 * FALSE
 * 1.false
 * 2.null
 * 3.undefined
 * 4.NaN
 * 5.0
 * 6.'' або ""
 */

// console.log(Boolean(5));


/*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */
                //  true      false  true
// const andResult =  'message' && 0 && 10
// console.log(andResult);

// const quantity = prompt('Введіть кількість товару')
// const message = quantity && 'Дякую за замовлення'

// console.log(message);

'' && 10 && 0 // ''
            
/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */

const orResuld = 0 || null || 'Hello' || 5

console.log(orResuld);

10 || undefined || 'kjbfjfh' // 10

// true - true
// !true - false

!0 //true
!'hello' //false

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */
