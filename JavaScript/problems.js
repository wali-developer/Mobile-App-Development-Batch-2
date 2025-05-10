// Create a function that print even numbers
const nums = [10, 8, 13, 6, 32, 8, 22, 18, 21, 13, 8, 7];

const evenNumbers = () => {
  let even = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  console.log(even);
  return even;
};

// evenNumbers();

// Create a function to search a number in an array. The function will take array and the number as parameters.

const searchNumber = (arr, searchNum) => {
  for (let num of arr) {
    if (num === searchNum) {
      return "The number is present in the array";
    }
  }
  return "Not exist";
};

console.log(searchNumber(nums, 113));

// Create a function named countOccurence that return the count of the a number exist in array.

const countOccurence = (array, number) => {
  let count = 0;
  for (let num of array) {
    if (number === num) {
      count = count + 1;
    }
  }
  return count;
};

const result = countOccurence(nums, 13);
// console.log("The count of the number is: ", result);
