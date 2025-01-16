/*
 * Операція spread (розпорошення)
 * - Array.prototype.concat() та аналог через spread
 */

const numbers1 = [1, 2, 3, 54, 12]; 
const numbers2 = [5, 65, 32, 14];

// const newArr = numbers1.concat(numbers2)


const newArr = [10, 18, ...numbers1, 15, 10, ...numbers2]
// console.log(newArr);
// console.log(numbers1);
// console.log('5' === '5');
// console.log(newArr === numbers1);
  
  /*
   * Пошук найнижчої або найвищої температури (числа)
   */
  const temps = [18, 14, 12, 21, 17, 29, 24];

  const lowestTemp = Math.min()
  const hightTemp = Math.max()
  
  // console.log(lowestTemp);
  // console.log(hightTemp);

  
  // const a = [
  //   { x: 1 },
  //   { x: 1 }, 
  //   { y: 2 }, 
  //   { z: 3 }
  // ];
  
  // const b = [...a];
  
  // console.log('a: ', a);
  // console.log('b: ', b);
//   Розпорошення і копіювання примітивних і складних типів
  // console.log(a[0] === b[0]);
  // console.log(a === b);
  
  // a[0].x = 1000;
  
  // console.log('a: ', a);
  // console.log('b: ', b);
  
  /*
   * Сшиваемо декілька массивів в один через concat() та spread
   */
  const lastWeekTemps = [1, 2, 3];
  const currentTemps = [4, 5, 6];
  const nextWeekTemps = [7, 8, 9];
  
  // const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps)

 
  // console.log(allTemps);
  
  /*
   * Розпорошення об"ектів
   * - Object.prototype.assign() та spread
   */
  const a = { x: 1, y: 2, a: 4 };
  const b = { x: 5, c: 3, b: 4 };
  
// const c = Object.assign({}, a, b);

const c = {
  // x: 5,
  // y: 2,
  // a: 4,
  // c: 3, 
  // b: 4
   ...a,
  ...b,
 
}

// console.log(c);





// console.log(c);  

  const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
  };

const userSettings = {
    showNotifications: false,
    hideSidebar: true,
  }

  const finalSettings = {
    ...defaultSettings,
    ...userSettings
}
// {
//    theme: 'light',
//     showNotifications: false,
//     hideSidebar: true,
//   }
  
  
  console.log(finalSettings);
