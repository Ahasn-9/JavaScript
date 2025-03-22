// 1. Create a function that returns the length of a string without using the built-in length property.
const username = "Ahsan      ";

String.prototype.TrueLength = function () {
  console.log(`Length of the string is: ${this.trim().length}`);
};

username.TrueLength(); // Length of the string is: 10
