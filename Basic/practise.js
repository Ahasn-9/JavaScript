// let arr = [0, 1, 2, 3, 4, 5];
// arr.unshift(0); // add element(0) to the beginning
// arr.shift(); // remove 1st element from the beginning
// arr.push(6, 7, 8); // add elements(6, 7, 8) to the end
// arr.pop(); // remove last element from the end
// console.log(arr.join(" ")); // convert arr into string
// let arr2 = arr.slice(1, 4); // slice elements from 1 to 4
// let arr3 = arr.splice(1, 4); // remove elements from 1 to 4
// let arr4 = [7, 8, 9, 10];
// let concatArr = [...arr, ...arr4]; // concatenate two arrays
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(concatArr);
// reverse array
// let reverseArr = arr.reverse();
// console.log(reverseArr);
// let result = arr.map((element) => element * 2);
// console.log(result);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const element of arr) {
//   console.log(element);
// }
const greeting = "Hello, World!";
for (const greet of greeting) {
  console.log(`Character: ${greet}`);
}
