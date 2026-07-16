// COMMONJS MODULE (IMPORT)
// Import the exported values
const {
  PI,
  APP_NAME,
  circleArea,
  circumference,
  greet,
  student,
} = require("./04-modules-commonjs.cjs");

// Use the imported constant
console.log(APP_NAME);           // Javascript Learner
console.log(PI);                 // 3.14

// Use the imported functions
console.log(greet("Alizeh"));     // Hello, My name is Alizeh
console.log(circleArea(5));      // 78.5
console.log(circumference(5));   // 31.4

// Use the imported object
console.log(student.name);       // Maham
console.log(student.course);     // JavaScript