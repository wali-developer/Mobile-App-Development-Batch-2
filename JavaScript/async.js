// console.log("Asynchronous JavaScript");

// console.log("Statment 1");

setTimeout(() => {
  //   console.log("Statment 2");
}, 2000);

// console.log("Statment 3");
// console.log("Statment 4");
// console.log("Statment 5");

// Promises -> Two results either it will be resolved or reject.
// Promise has 3 states -> Pending, Fulfilled or Rejected.

const promise = new Promise((resolve, reject) => {
  let loading = true;

  setTimeout(() => {
    if (loading === true) {
      resolve("Promised has been resolved...");
    } else {
      reject("Oops, promised has rejected!");
    }
  }, 2000);
});

// promise
//   .then((response) => console.log(promise))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finally!"));

const fetchData = () => {
  console.log("Pending...");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((jsonResponse) => console.log(jsonResponse))
    .catch((err) => console.log("ERROR fetching users data: ", err))
    .finally(() => console.log("Promised ended..."));
};

// fetchData();

const fetchDataUsingAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log("ERROR Fetching users data: ", error);
  } finally {
    console.log("Promise has ended!");
  }
};

fetchDataUsingAsync();
