/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Оголошення функції (function declaration)
 * - Аргументи і параметри
 * - return
 * - Повернення значення
 * - Параметри за замовчуванням
 */

function getSum(a, b) {
const res = a + b
  return res;
 
}

const result = getSum(5, 5)
getSum(10, 15)
getSum(20, 22)

console.log(result);




  /*
   * - Стек викликів
   * - Stack trace і пошук помилок
   */
  
  const fnA = function() {
    console.log('Почала виконуватися [fnA]'); //2
    fnB();
    console.log('Продовжила виконуватися [fnA] після виходу з [fnB]'); //4 
  };
  
  const fnB = function() {
    console.log('Виконується [fnB]'); //3
  };
  
  console.log('Почав виконання [main]');//1
  fnA();
  console.log('Продовжив виконуватися [main] після виходу з [fnA]'); //5
    
    
    
    
  
  
  
  
  
  // Створіть масив styles з елементами 'Джаз' i 'Блюз'. 
  // Додайте 'Рок-н-ролл' в кінець масиву. 
  // Замініть значення в середині масиву на 'Класика'. 
  // Видаліть перший елемент масиву і покажіть його. 
  // Додайте 'Реп' і 'Реггі' на початок масиву. 
  // Виведіть масив в консоль.



  // ЗАДАЧА №5 ДЗ5
  // const styles = ['Джаз', 'Блюз'];
  // styles.push('Рок-н-ролл');

  // console.log(styles);

  // styles.splice(1, 1, 'Класика');
  // console.log(styles);

  // styles.shift();
  // console.log(styles);

  // styles.unshift('Реп','Реггі')
  // console.log(styles);