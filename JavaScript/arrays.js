// const arr = ["Ali", 23, null, true, "", [20, 10], { name: "Usama" }];
const numbers = [10, 20, 33, 21, 45, 32, 65, 34, 71, 19];

const subArr = [101, 102];

numbers[2] = 44;
numbers[10] = 100;

// console.log(numbers.at(5));
// console.log(numbers.concat(subArr));
const findCallback = (currentNumber, index) => currentNumber === 71;
const foundNumber = numbers.find(findCallback);
// console.log(foundNumber);'

// console.log(numbers.includes(21));
// console.log(numbers.length);
numbers.push(110);
numbers.pop();
numbers.shift();

// console.log(numbers.unshift(11));
// console.log(numbers.slice(4, 6));

// console.log(numbers);

// High orders methods of array
// map, forEach, filter, reduce, find, every, some

const callback = (num, index, arr) => num * 2;

const newArray = numbers.map(callback);
// console.log(newArray);

const evenNums = numbers.filter((num, index, arr) => num < 50);
// console.log(evenNums);

numbers.forEach((num, index, arr) => {
  //   console.log(num);
});

// console.log(sumOfAll);

const res = numbers.some((num, index, arr) => num > 50);
// console.log(res);

const everyResult = numbers.every((num, index, arr) => num > 9);
// console.log(everyResult);

const sumOfAll = (...rest) => {
  const sum = rest.reduce(
    (accomulator, currentItem) => currentItem + accomulator,
    0
  );

  console.log(sum);
  return sum;
};

const arr = [12, 23, 34, 21, 65];

// sumOfAll(...arr);

let str = "Hello";
// console.log(...str);
