// OBJECTS

const shoe = {
  brand: 'Converse',
  hasLaces: true,
  hasVelcro: false,
  color: {
    primary: 'green',
    secondary: 'white',
  },
  price: 65.0,
  activity: ['walking', 'skateboarding', 'basketball'],
};

console.log(shoe);

// So how do you ACCESS the values in the object?
// In arrays, you use indexing (the square brackets)
// Accessing values in objects:
// 2 main ways (these two give the same results)
// 1) BRACKET NOTATION (similar to arrays)
let brand = shoe['brand'];
console.log('Brand:', brand);
// 2) DOT NOTATION *this way is more common & popular*
brand = shoe.brand;
console.log('Brand:', brand);
console.log('Price:', shoe.price);
// what if you don't know the key in advance
// what if the key is a variable that comes from the user?
let userKey = prompt('Type in a key:');
console.log('Using userKey:', shoe[userKey]); // looks for a key whatever the prompt is
console.log('Using userKey:', shoe.userKey); // looks for a key called "userKey"

// Bracket notiation is used for VARIABLES
// Otherwise, dot notation is great

// Example of adding, updating, removing object properties
const car = {
  color: 'blue',
  brand: 'honda',
  trim: 'sport',
};
car.weight = '1577kg'; // adding new property of weight
car['color'] = 'red'; // updating color from blue to red
delete car['trim']; // delete trim

car.make = 'Mercedes';
car.model = 'C63AMG';
car.price = '40K';
console.log(car);

car.price = '25K';
console.log(car);

car.price += 10000;
console.log(car);

// For.. in loops for objects

for (const key in shoe) {
  console.log('key', key); // property
  console.log('value:', shoe[key]); // value -- note, DO NOT USE DOT NOTATION
  console.log('');
}

// How do I know if a property is IN an object?
// 1. Loop through keys until I either find the property or it's not there
// 2.

let obj = {
  // you don't know what keys are here
};

// For example, is the property price in there?
// Check for price. if it has one, console log the price, otherwise set price to zero
if (obj.price == undefined) {
  console.log(obj.price);
} else {
  obj.price = 0.0;
}

// Object.hasOwn() returns boolean if it's in the object or not
if (obj.hasOwn(obj, 'price')) {
}
// if price exists, it will return TRUE

// IN keyword can also check if something is in object or not
if ('name' in obj) {
  console.log('In object');
} else {
  console.log('Not in obj');
}
