let fullName = "Steven Inouye";
const numUsStates = 50;
let sum = 5 + 4;

// if fullName starts with L alert 'Back of the line!' Otherwise alert 'Next!'
if (fullName.charAt(0) === "L") {
  alert("Back of the line!");
} else {
  alert("Next!");
}

// create function named sayHello that alerts "Hello World!"
const sayHello = () => {
  alert("Hello World!");
};

// call sayHello
sayHello();

// function to alert the name when age is less than 21
const checkAge = (name, age) => {
  if (age < 21) {
    alert(`Sorry ${name}, you aren't old enough to view this page!`);
  }
};

// run check age against names and ages
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// my favorite vegetables in an array
const favVegetableArr = ["lettuce", "kale", "spinach", "cucumber"];

// log in console each of my favorite vegetables
favVegetableArr.forEach(veg => console.log(veg));

// create array with 5 people with attributes of name and age
const nameAgeArr = [
  { name: "Charles", age: 21 },
  { name: "Abby", age: 27 },
  { name: "James", age: 18 },
  { name: "John", age: 17 },
  { name: "Mark", age: 32 }
];

// check ages for each people
nameAgeArr.forEach(person => {
  checkAge(person.name, person.age);
});

// function to return the length of a string
const getLength = word => word.length;

// store the length of 'Hello World"
const strLength = getLength("Hello World");

// log to the console 'The World is nice and even!' if the length is even
if (strLength % 2 === 0) {
  console.log("The world is nice and even!");

  // Otherwise log to the console 'The world is an odd place!'
} else {
  console.log("The world is an odd place!");
}
