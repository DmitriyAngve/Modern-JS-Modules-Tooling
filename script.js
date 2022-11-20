/////////////////////////////////////////////////////////////////////////
//////////////Exporting and Importing in ES6 Modules/////////////////////
/////////////////////////////////////////////////////////////////////////

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);
// console.log(shippingCost); // ReferenceError

// All the exports from the module at the same time (ShoppingCart - "S" with capital letter, like Class)
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5); // 5 bread added to cart
// console.log(ShoppingCart.totalPrice); // 237 (from shoppimgCart.js)

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price); // 237

import add, { cart } from './shoppingCart.js';
add('pizza', 2); // 2 pizza added to cart
add('bread', 5); // 2 pizza added to cart
add('oil', 2); // 2 pizza added to cart
add('apples', 2); // 2 pizza added to cart

console.log(cart);
1;
