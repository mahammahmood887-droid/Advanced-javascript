// COMMONJS MODULE (EXPORT)

// constants
const PI = 3.14;

const APP_NAME = "Javascript Learner";

// Function to calculate the area of a circle
function circleArea(radius) {
  return PI * radius * radius;
}

// Function to calculate the circumference
function circumference(radius) {
  return 2 * PI * radius;
}

// Function to greet a user
function greet(name) {
  return `Hello, My name is ${name}`;
}

// An object
const student = {
  name: "Maham",
  course: "JavaScript",
};

// Export everything that other files should use
module.exports = {
  PI,
  APP_NAME,
  circleArea,
  circumference,
  greet,
  student,
};