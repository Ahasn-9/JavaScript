// THIS
// const data = {
//   name: "Jack",
//   password: "12345",
//   username: function () {
//     console.log(this.name);
//     console.log(this);
//   },
// };
// data.username();
// data.name = "John";
// data.username();

//Arrow Function

// function name() {
//   console.log(this);
// }
// name();

// IIFI - Immediately Invoked Function Expression
(() => {
  console.log(`This is an IIFE`);
})();
