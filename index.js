/* Instructions
* Discount on an item
* Profit after selling the item
* Loss if the selling price is lower than the cost */

// variables
const item = "Car"
const costPrice = 200000 // how much it ORIGINALLY cost
const discount = 15 // percentage discount

// discount calculations
// this calculates how much money the discount removes from the original cost
const discountAmount = costPrice * (discount / 100)
// the cost minus 15%, because i can't create a variable with percentage

// the final price AFTER the discount
const discountedPrice = costPrice - discountAmount // original - discount = the price it's sold at

// console log results
console.log("Item:", item)
console.log("Discount Amount:", discountAmount)
console.log("Price After Discount:", discountedPrice)