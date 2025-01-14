/*
 * Перебір через for...in і Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };
  



  /**
   * hasOwnProperty('property') - повертає true, якщо властивість міститься 
   * лише у вказаному об'єкті.
   * оператор in - повертає true, якщо властивість міститься у вказаному   
   * об'єкті або його ланцюжку прототипів. ('property' in object)
   */
const user = {
  score: 0,
}
console.log(user);
console.log("до if");

if ('score' in user) {
  console.log(user.score);
}

console.log("після if");