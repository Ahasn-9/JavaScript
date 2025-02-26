let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) => {
  console.log(`accumulator: ${acc}, current: ${curr}`);
  return acc + curr;
}, 4);
// console.log(sum); // 15
