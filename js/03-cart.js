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
  getItems() {
      console.log('items: ', this.items);
  },
  items: [],
  add(productName) {
    // console.log('productName', productName);
       
        for(const item of this.items){
          // console.log('item:', item);
          if (productName.name === item.name) {
            item.quantity += 1
            return
          }
    }
    
     const currentItems = {
            ...productName,
            quantity: 1,
        }
        this.items.push(currentItems)
      
    },
  remove(productName) {
      const {} = productName
    },
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
   cart.add({ name: '🍋', price: 60 });
  cart.getItems()
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