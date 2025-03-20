/*
 * Події.
 * - Створення та видалення слухача
 * - Назви колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Посилальна ідентичність колбеків
 * - Об'ект Події
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', () => {
//          console.log('Вішаємо');
//         targetBtn.addEventListener('click', handleClick)
// })

// removeListenerBtn.addEventListener('click', () => {
//          console.log('Знімаємо');
//        targetBtn.removeEventListener('click', handleClick) 
// })

targetBtn.addEventListener('click', handleClick)

function handleClick(event) {
          console.log(event.currentTarget === targetBtn);
}