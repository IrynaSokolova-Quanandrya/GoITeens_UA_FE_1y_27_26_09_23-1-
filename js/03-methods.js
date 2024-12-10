/**
 * split(s) -  дозволяє перетворити рядок в масив, розбивши її по розподілу s
 * join() - робить в точності протилежне split. Він бере масив і склеює його в
 * рядок, використовуючи s як роздільник.
 */
 

 /*
 *indexOf() - повертає перший індекс, в якому елемент x був знайдений в 
 *        масиві, або число -1, якщо такого елемента немає.
 *includes() - визначає, чи містить масив деякий елемент x, повертаючи true 
          або false відповідно.
*/

/**
 * push() - дозволяє додати один або кілька елементів в кінець масиву. Метод
 *        повертає значення властивості length, яке визначає кількість
 *        елементів в масиві
 * pop() - видаляє елемент з кінця масиву і повертає видалений елемент. Якщо
 *        масив порожній, метод повертає undefined
 * shift() - видаляє елемент з початку масиву і повертає його (елемента) 
 *        значення
 * unshift() - додає елемент в початок масиву
 */

 /**
  * slice(begin, end) - копіює елементи від begin, до, але не ключа, end.
  */

 /**
  * concat() - використовується для об'єднання двох або більше масивів. Цей 
  *        метод не змінює вихідний масив, а повертає новий.
  */
 
 /**
  * splice(position, num, new_element_1, new_element_2, ...) - швейцарський ніж 
  *        для роботи з масивами, в тому випадку, якщо 
  *        вихідний масив необхідно змінити. Дозволяє видаляти, додавати і 
  *        замінювати елементи в довільному місці масиву.
  *        видалення
  *        додавання
  *        заміна
  * 
  */
 
 
        

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
  