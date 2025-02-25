// let num1 = 10;
// let num2 = num1;

// num2 = 20;
// console.log(num1); // 10
// console.log(num2); // 10
// let person1 = {
//   name: "Bob",
//   age: 20,
// };

// let person2 = person1;

// person2.age = 30;
// console.log(person1);
// console.log(person2);
// const name = "Ahsan Mughal ";
// console.log(`My name is ${name}`);
// const name = new String("Ahsan Mughal");
// console.log(name.trim());
// const newName = name.substring(2, 5); // last one is exclusive
// console.log(newName);

// const name = "My Name is Ahsan Mughal";
// // console.log(name.replace("**", "-"));
// const newName = name.split("");
// console.log(newName[7]);

// const score = new Number(100);
// console.log(score);
// console.log(score.toFixed(4));

// const number = 10000000;
// console.log(number.toLocaleString("en-IN"));

let date = new Date();
// console.log(date.toDateString());
// console.log(date.toTimeString());
console.log(date.toLocaleString("default", { year: "numeric" }));

// const timestamp = Date.now();
// console.log(timestamp);
