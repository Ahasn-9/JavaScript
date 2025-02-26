// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }
// for in loop
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in myObject) {
  //console.log(key, ":-", myObject[key]);
}
// for of loop

const myArray = [10, 20, 30, 40, 50];
for (const value of myArray) {
  //console.log(value);
}

// for in using array

const myArray1 = ["apple", "banana", "mango"];
for (const key in myArray1) {
  //console.log(myArray1[key]);
}
//  for of using array
const myArray2 = ["apple", "banana", "mango"];
for (const key in myArray2) {
  // console.log(myArray2[key]);
}

// for each loop
const myArray3 = ["apple", "banana", "mango", "orange", "grapes"];
myArray3.forEach(function (fruit) {
  //console.log(fruit);
});

// same using arrow function
myArray3.forEach((fruit, index, myArray3) => {
  //console.log(fruit, index, myArray3);
});

// objects in array using for each loop

const myArray4 = [
  { name: "John", age: 30 },
  { name: "Doe", age: 40 },
  { name: "Smith", age: 50 },
];

myArray4.forEach((person) => {
  // console.log(person.name);
});

// filter

const myArray5 = [10, 20, 30, 40, 50];
const result = myArray5.filter((value) => {
  return value > 30;
});
//console.log(result);
