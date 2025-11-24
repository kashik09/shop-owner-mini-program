# Shop Owner Mini Program
A **JavaScript** program that calculates discounts, selling prices, and determines profit or loss for a shop owner.

## Overview
This program simulates basic shop calculations that a business owner might perform:
- Applying percentage discounts to items
- Calculating profit or loss based on cost and selling prices
- Testing multiple scenarios to validate business logic

## Features
- **Discount Calculation**: Computes the discount amount and final price after applying a percentage discount
- **Profit/Loss Analysis**: Determines whether a sale results in profit, loss, or break-even
- **Multiple Scenarios**: Tests different selling prices to demonstrate various outcomes

## How It Works
The program uses the following logic:

1. **Variables Setup**: Defines item details (name, cost price, discount percentage)
2. **Discount Calculation**:
   - Calculates discount amount: `costPrice × (discount / 100)`
   - Determines discounted price: `costPrice - discountAmount`
3. **Profit/Loss Determination**:
   - **Profit**: When `sellingPrice > costPrice`
   - **Loss**: When `sellingPrice < costPrice`
   - **Break-even**: When `sellingPrice = costPrice`

## Running the Program
### Prerequisites
- Node.js installed on your system

### Execution
```bash
node index.js
```

## Example Output
```
Item: Car
Discount Amount: 30000
Price After Discount: 170000
Profit: 150000
Scenario 1: Sold at a lower price
Result: Loss of 75000
Scenario 2: Sold at the same price as cost
Result: No profit, no loss
```

## Code Structure
- **Variables** (index.js:1-4): Item details and pricing
- **Discount Calculations** (index.js:6-12): Discount logic
- **Main Scenario** (index.js:19-36): Primary profit/loss calculation
- **Test Scenarios** (index.js:38-70): Additional test cases

## Learning Concepts
This program demonstrates:
- Variable declarations with `const`
- Basic arithmetic operations
- Conditional statements (`if`, `else if`, `else`)
- Console output with `console.log()`
- Business logic implementation in JavaScript

## Customization
You can modify the following variables to test different scenarios:

```javascript
const item = "Car"           // Change the item name
const costPrice = 200000     // Change the cost price
const discount = 15          // Change the discount percentage
const sellingPrice = 350000  // Change the selling price
```

## License
This is an educational project.