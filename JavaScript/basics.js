// Variables
// var, let and const

var a;
var b = 20;

if (true) {
  var c = a + b;
}

var b = "Hello World!";

let x = 100;

if (true) {
  let y = 200;
}

const pi = 3.14;

// console.log(pi);

// Data  types in javascript

// 1. Primitive data types
// Number, String, Boolean, null, undefined

// 2. Non-Primitive / Reference data types
// Array, Object, function

let users = ["ali", "usama", "sameer"];
let subjects = {
  name: "C++",
  name: "Java",
  name: "React Native",
};
function sum() {
  let s = 20 + 10;
  console.log("The sum is: ", s);
  return s;
}

// sum();

// Operators & expressions
// 1. Arithemtic operators -> -, +, *, /
// 2. Logical operators -> &&, ||, !
// 3. Comparision operators -> >, <, >=, <=, ==, ===, !==, !=
// 4. Ternary operators -> ?, :

// Comparsion operators

let a1 = 20;
let a2 = 20;

// console.log(a1 < a2); // Check if a1 is not equal to a2

// console.log(a1 == a2 && a2 == 20); And operator // true true = true, true false = false, false false = false

// console.log(a1 == a2 || a2 == 20); // OR operator -> true true = true, true false = true, false false = false

// console.log(!a1 == a2); // Not (!)

// console.log("Hello World!");

// Conditional Statments

function checkNumber(number) {
  if (number > 0) {
    console.log("The number " + number + " is a positive");
    return;
  } else if (number < 0) {
    console.log("The number " + number + " is a negative");
    return;
  } else if (number == 0) {
    console.log("The number is a zero.");
    return;
  } else {
    console.log("The number " + number + " is invalid!.");
  }

  //   number > 0
  //     ? console.log("The number " + number + " is a positive")
  //     : console.log("The number " + number + " is invalid!.");
}

// checkNumber("fjdkfjl");

// Problems
// Create a function named checkGrade that will check the subject Grade.
// Create a function named CalcPercentage that calculate the percentage of the marks.

// String methods
const str = "Hello World";
const str1 = "Programming...";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(" "));
// console.log(str.charAt(3));
// console.log(str.concat(str1));
// console.log(str.substr(6, 9));
// console.log(str.length);

const n = 100;
const n1 = n.toString();
// console.log(typeof n1);
