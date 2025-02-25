// map example

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// map chaining example 1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubledAndFiltered = nums
  .map((num) => num * 2)
  .filter((num) => num % 3 === 0);
console.log(doubledAndFiltered);
