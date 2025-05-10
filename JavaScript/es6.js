// Arrow function, let, const, for in, for of, Template literals, destructuring, spread and rest operators, asynchronous javascript

// Template literals

const str1 = "Hello";
const str2 = "World";
const str3 = "JavaScript";

// console.log(str1 + " " + str2 + " " + str3);
// console.log(`${str1} ${str2} ${str3}`); // Template literals

// Destructuring -> Object dest.., Array dest..

const user = {
  name: "John Doe",
  age: 40,
  address: "America",
};

const { name, address } = user;

// console.log(address);

const subjects = ["Java", "C++", "JavaScript", "Python"];

const sub1 = subjects[0];
const sub2 = subjects[1];
const sub3 = subjects[2];

const [s1, , s3, s4] = subjects;

console.log(s3);
