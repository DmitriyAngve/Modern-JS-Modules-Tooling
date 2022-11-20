// Exporting module
console.log('Exporting module');

// Blocking code
console.log('Start fetching users'); // Will returns first
await fetch('https://jsonplaceholder.typicode.com/users'); // Will returns second
console.log('Finish fetching'); // Will returns third

const shippingCost = 10; // Can used only here
export const cart = []; // all to-level variable is a private for this MODULE

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// Default exports use for only want to export one thing per module

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
