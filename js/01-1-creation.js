/*
 * Об"єкти (робимо плейлист музики: ім"я, рейтинг, 
 * треки, кількість треків)
 * - Літерал об"єкту
 * - Властивості, ключі (ім"я) і значення
 * - Як відрізнити об"єкт від області видимості
 */
const name = 'My best songs'
const raiting = 10
const playlist = {
    name,
    raiting,
    tracks: ['track-1', 'track-2', 'track-3'],
    tracksCount: 3,    
}

// const objKey = prompt('Enter your key')
console.log(playlist.raiting);
console.log(playlist['name']);

/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутність властивостей
 */

  /*
   * Короткий запис властивостей
   */
  
  /*
   * Обчислювані властивості
   */
  
  //  <input name="color" value="tomato" >
  
  const inputName = 'background';
  const inputValue = 'tomato';
  
 
  /*
   * Посилальний тип {} === {}
   */
  
  
  /*
   * Масиви і функції це об"єкти
   */
//   function fnA() {
    
//   }

// fnA.key = 'Hello'

// console.dir(fnA);
  

// const arr = [1, 2]

// arr.value = 'Hi'

// console.log(arr);