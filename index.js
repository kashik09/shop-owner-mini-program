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

// selling price (how much we selling it at)
const sellingPrice = 350000

// profit / loss
if (sellingPrice > costPrice) {
  // if it was sold higher than the costPrice, there's profit
  const profit = sellingPrice - costPrice
  console.log("Profit:", profit,)

} else if (sellingPrice < costPrice) {
  // if I sold it lower, there is a loss
  const loss = costPrice - sellingPrice
  console.log("Loss:", loss)

} else {
  // if they’re exactly equal
  console.log("No profit, no loss")
}

// selling price (to test the statement)
console.log("Scenario 1: Sold at a lower price")
const sellingPrice2 = 125000

// profit / loss
if (sellingPrice2 > costPrice) {
  const profit = sellingPrice2 - costPrice
  console.log("Result: Profit of", profit)

} else if (sellingPrice2 < costPrice) {
  const loss = costPrice - sellingPrice2
  console.log("Result: Loss of", loss)

} else {
  console.log("Result: No profit, no loss")
}

// selling price (to test the statement)
console.log("Scenario 2: Sold at the same price as cost")
const sellingPrice3 = 200000

// profit / loss
if (sellingPrice3 > costPrice) {
  const profit = sellingPrice3 - costPrice
  console.log("Result: Profit of", profit)

} else if (sellingPrice3 < costPrice) {
  const loss = costPrice - sellingPrice3
  console.log("Result: Loss of", loss)

} else {
  console.log("Result: No profit, no loss")
}