/* You ate a cheeseburger for $12
Jonah had a $20 steak
Amy had $8 soup
Mateo did not like his mac and cheese for $14
Cheyenne was impressed by the unlimited soup and salad combo for $16
*/

// declare an object named DINNER that uses the purchased food as the keys and the price of the food for the values
const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupAndSalad: 16,
};

// list out only the foods from dinner
for (const key in dinner) {
  console.log(key);
}

// another way to list out only the foods from dinner
let foods = Objects.keys(dinner);
console.log(foods);

// list out the prices of meals from dinner
let prices = Object.values(dinner);
console.log(prices);

// add the values of the dinner object to calculate the total cost of the meal
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log('Total price of the dinner:', total);

// another way to do it
let totalCost = 0;
for (const individualMeal in dinner) {
  totalCost += dinner[individualMeal];
}
console.log(totalCost);
