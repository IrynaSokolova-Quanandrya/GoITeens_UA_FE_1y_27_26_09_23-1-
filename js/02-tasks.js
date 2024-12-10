/*
 * Порахувати загальну суму покупок в корзині
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let totalSum = 0;

for (let number of cart) {
    //1 number = 54
    //2 number = 28
    //3 number = 105
    //4 .....
    //10 number = 90
    totalSum += number   
}
//  console.log('total: ', totalSum);

/*
 * Нипиши скрипт який порахує суму всіх парних чисел в масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for(let number of numbers){

// }

// console.log(numbers.length);

// console.log(total);

/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
const loginToFind = 'aj4xth3m4n';
let message = `Користувач ${loginToFind} не знайдено.`  ;

for(let login of logins){
    if(login === loginToFind){
        message = `Користувач ${loginToFind} знайдено.`
        break;
    } 
}

// console.log(message);

/*
 * Напиши скрипт пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0]

for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] < smallestNumber ){
        smallestNumber = numbers[i]
    }
}

console.log(smallestNumber);




// console.log(smallestNumber)

/* ЗАВДАННЯ ПО МЕТОДАМ МАСИВУ */

/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'

/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

const str = 'JavaScript';


let reversStr = '';


console.log(reversStr);

/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */
// https://dev.to/devsatasurion/is-tailwind-css-accessible-52dc

// Повинно вийти top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';


/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];


/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);  

  /*
   * Видалення (по індексу), метод indexOf()
   */
  const cardToRemove = 'Карточка-3';

 

  /*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';



  /*
   * Оновлення (по індексу)
   */
  const cardToUpdate = 'Карточка-4';
  