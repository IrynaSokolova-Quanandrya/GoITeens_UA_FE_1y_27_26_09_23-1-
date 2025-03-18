import products from './data/proucts'
console.log(products);
/*
 * Властивість innerHTML
 * - Зчитування
 * - видалення
 * - запис
 */

const titleEl = document.querySelector('.title');
// titleEl.textContent = 'Hello <span>user</span>'
// console.log(titleEl.textContent);
titleEl.innerHTML = 'Hello <div>user</div>'
console.log(titleEl.innerHTML);

/*
 * Вставка розмітки з insertAdjacentHTML()
 */

{/* <article class="product">
  <h2 class="product__name">Назва</h2>
  <p class="product__descr">Опис</p>
  <p product__pridct>Ціна: 1111 кредитів</p>
</article> */}
