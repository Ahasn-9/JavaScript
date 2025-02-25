// const symbol1 = Symbol("this is symbol1");
// // console.log(typeof symbol1);

// const user1 = {
//   name: "Jordan",
//   "full name": "Jordan Peterson",
//   [symbol1]: Symbol("this is symbol1"),
//   age: 28,
// };

// console.log(user1[symbol1]); // declare symbol
// console.log(user1);
// console.log(user1.age);
// console.log(user1["full name"]);

/*  FUNCTION IN OBJECT 
user1.age = 30;
console.log(user1);

user1.greeting = function () {
  // add function in object
  console.log(`Hello ${this.name}`);
};

user1.greeting();
*/
/*  OBJECT merging 
const user1 = {
  1: "Ahsan",
  2: "Ali",
  3: "Ahmed",
};

const user2 = {
  4: "Ahsan",
  5: "Ali",
  6: "Ahmed",
};

const user3 = Object.assign({}, user1, user2);
console.log(user1, "object 1");
console.log(user3, "object 3");
console.log(user1 === user3);
*/
// const user1 = {
//   1: "Ahsan",
//   2: "Ali",
//   3: "Ahmed",
// };

// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));
// console.log(user1.hasOwnProperty(1));
/* OBJECT DESTRUCTURING
const course = {
  name: "JavaScript",
  duration: "3 months",
  price: 5000,
};

const { price } = course;
console.log(price);
console.log(course);
*/
