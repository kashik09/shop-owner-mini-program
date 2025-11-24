/* Instructions
* Discount on an item
* Profit after selling the item
* Loss if the selling price is lower than the cost */

// variables
const item = "car"
const costPrice = 200000
const discount = 15

// discount calculations
const discountAmount = costPrice * (discount / 100)
const discountedPrice = costPrice - discountAmount

console.log("Item:", item)
console.log("Discount Amount:", discountAmount)
console.log("Price After Discount:", discountedPrice)