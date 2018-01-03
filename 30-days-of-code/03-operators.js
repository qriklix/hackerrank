let tipCost = mealCost * tipPercent / 100
let taxCost = mealCost * taxPercent / 100

let totalCost = Math.round(mealCost + tipCost + taxCost)

console.log('The total meal cost is ' + totalCost + ' dollars.')
