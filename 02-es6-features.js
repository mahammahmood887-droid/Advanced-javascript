// ES6+ FEATURES
// DESTRUCTURING
// Pull values out of arrays or objects into variables.

const numbers = [10, 20,30,40];
const [x, y,...rest] = numbers;
console.log(x, y); // 10 20
console.log(x,y,rest) // 10 20 [ 30, 40 ]

const user = { name: 'Maham', age: 20 };
const { name, age } = user;
console.log(name, age); // Maham 20

// Default value
const { role = 'Guest' } = user;
console.log(role); // Guest

// SPREAD (...)
// Expands arrays or objects.
// Often used for copying or merging.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
console.log(arr2); // [1, 2, 3, 4]

const person = { name: 'Sarah' };
const updatedPerson = { ...person, age: 25 };
console.log(updatedPerson); // { name: 'Sarah', age: 25 }

// REST (...)
// Collects multiple values into one array.

function sum(...values) {
  let total = 0;

  for (const num of values) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4)); // 10

// OPTIONAL CHAINING (?.)
// Safely access properties that might not exist.

const data = {
  user: {
    name: 'Sara',
  },
};

console.log(data.user?.name); // Sara
console.log(data.user?.address?.city); // undefined

// NULLISH COALESCING (??)
// Uses a default only if the value is null or undefined.

const settings = {
  volume: 0,
};

console.log(settings.volume ?? 5); // 0