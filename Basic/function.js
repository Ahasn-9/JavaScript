// function addition(a, b) {
//   //parameter
//   console.log(a + b);
// }

// addition(5, 23); // argument

// function login(username) {
//   if (!username) {
//     return "Please enter your username";
//   }
//   return `Welcome ${username}`;
// }

// console.log(login("Ahmed"));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const data = {
  name: "Ahmed",
  age: 25,
};

function detdetails(data) {
  console.log(`My name is ${data.name} and I am ${data.age} years old`);
}

detdetails(data);

function getNumber(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(getNumber(numbers));
