[1, 5, 3]
['hello', 'hi', 'aloha']
const arr = [{}, {}, {}]

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
 
}




/*
 * Працюємо з колекцією товарів в кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
  getItems() {
      console.log(this.items);
    },
  add(productName) {
      this.items.push(productName)
    },
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};
  

  cart.getItems()
  cart.add({ name: '🍎', price: 50 })
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍇', price: 70 });
  cart.add({ name: '🍓', price: 110 });
  cart.add({ name: '🍋', price: 60 });
   
  console.log(cart.items);
  // console.table(cart.getItems());
  
  cart.remove('🍎');
  // console.table(cart.getItems());
  
  // cart.clear();
  // console.table(cart.getItems());
  
  // cart.increaseQuantity('🍎');
  // console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
  // console.log('Total: ', cart.countTotalPrice());