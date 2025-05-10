const user = {
  name: "Usama",
  age: 25,
  contact: 843242343,
  profession: "Software Engineer",
  address: "Lahore, Pakistan",
  interests: ["Reading", "Travelling"],
  isMarried: true,
  childrens: [
    {
      name: "Ali",
      age: 5,
    },
    {
      name: "Sameer",
      age: 8,
    },
  ],
};

user.country = "Pakistan";
delete user.contact;
user.age = 35;

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// console.log(Object.keys(user));
