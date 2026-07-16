// COMMON DESIGN PATTERNS
// MODULE PATTERN
// Keep data private and only expose what is needed.

function createCounter() {
  let count = 0;

  return {
    increment() {
      return ++count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

// FACTORY PATTERN
// A function that creates and returns an object.

function createUser(name) {
  return {
    name,
    greet() {
      return `Hello, ${name}`;
    },
  };
}

const user = createUser('Maham');

console.log(user.greet()); // Hello, Maham

// OBSERVER PATTERN
// Notify listeners when something happens.

const listeners = [];

function subscribe(fn) {
  listeners.push(fn);
}

function notify(message) {
  listeners.forEach((fn) => fn(message));
}

subscribe((msg) => console.log(`Listener: ${msg}`));

notify('New message'); // Listener: New message

// SINGLETON PATTERN
// Only one instance is created.

const Config = {
  theme: 'dark',
};

const config1 = Config;
const config2 = Config;

console.log(config1 === config2); // true