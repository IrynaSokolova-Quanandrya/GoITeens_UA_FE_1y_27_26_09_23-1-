/*
 * - Створення елементів
 * - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

const heroEl = document.querySelector('.hero')
// Створюємо заголовок

const titleEl = document.createElement('h1')
titleEl.classList.add('page-title')
titleEl.textContent = 'My first element'
titleEl.style.color = 'red'
console.log(titleEl);

 /* Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img')
imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg'
imageEl.alt = 'valais-alpine-mountains-glacier'
imageEl.width = '250'
console.log(imageEl);


// heroEl.appendChild(titleEl)
// heroEl.appendChild(imageEl)

heroEl.append(titleEl, imageEl)

console.log(heroEl);

/*
 * Створюємо і додаємо новий пункт меню
 */
