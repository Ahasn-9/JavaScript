// Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newarr = arr.join();
// // arr.push(11);
// // arr.unshift(12);
// arr.shift();
// console.log(arr);
// console.log(newarr);

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
// // let slicedFruits = fruits.slice(1, 3);
// // console.log(slicedFruits);
// // console.log(fruits);

// let players = ["Ahsan", "Ali", "Ahmed", "Asad", "Adeel"];
// // let removedPlayers = players.splice(1, 2);
// // console.log(removedPlayers);
// // console.log(players);

// const result = fruits.concat(players);
// console.log(result);

// const spred = [...fruits, ...players];
// console.log(spred);
const map = new Map([
  ["name", "Ahsan"],
  ["age", 22],
]);
console.log(map);
Array.from(map);
console.log(Array.from(map.values()));
console.log(Array.from(map.keys()));
