// High functions
function parent(ftn) {
  // ftn -> callback function
  ftn();
}

function child() {
  console.log("Child function called!");
}

// parent(child);

// Arrow function
// function calcAverage(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const result = calcAverage(20, 10, 30);
// console.log(result);
