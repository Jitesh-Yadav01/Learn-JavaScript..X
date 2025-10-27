let score = "100abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "100abc" is not a pure number so it will return NaN
// NaN - Not a Number

let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// Any non empty string is converted to true // "1" -> true
// Empty string is converted to false   // "" -> false

let someNumber = 123;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);