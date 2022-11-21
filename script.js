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

/////////////////////////////////////////////////////////////////////////
//////////////////////Top-level await (ES2022)///////////////////////////
/////////////////////////////////////////////////////////////////////////

// await keyword can use outside the async functions - it's call top-level await, works only in module scripts ("<script type="module"")

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost); // Promise {<pending>} Because result of returning a async function is always a Promise, it will not return actual data itself

// Use regular Promises
// lastPost.then(last => console.log(last));

// Use Top-level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
// A module which has a top-level await then the importing module will wait for the imported module to finish the blocking code

/////////////////////////////////////////////////////////////////////////
/////////////////////////The Module Pattern//////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*
// Main goal of the Module Pattern is to encapsulate functonality to have private data, and to expose a public API

// use IIFE
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// This IIFE functions was only once in the beginning and then all it did was to return this object ("return {addToCart,...}") and assigned all variables in return. We able to use all of this and to also manipulate the data that is inside of the function which is the function that returned object

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined (can't access)

*/

/////////////////////////////////////////////////////////////////////////
//////////////////////////CommonJS Modules///////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*
// CommonJS Modules have been used in Node.js for almost all of its existence

// Export - this example could not work in broweser, but will be work in Node.js
export.addToCart =  function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};

// Import 
const {addToCart} = require("./shoppingCart.js")
*/
/////////////////////////////////////////////////////////////////////////
////////////////////////Introduction to NPM//////////////////////////////
/////////////////////////////////////////////////////////////////////////

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone); // loggedIn: false
console.log(stateDeepClone); // loggedIn: true

/////////////////////////////////////////////////////////////////////////
/////////////////Bundling With Parcel and NPM Scripts////////////////////
/////////////////////////////////////////////////////////////////////////
