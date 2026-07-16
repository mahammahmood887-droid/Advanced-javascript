// PROTOTYPES AND THE PROTOTYPE CHAIN

// Every object has a prototype.
// If a property isn't found on the object itself,
// JavaScript looks for it in its prototype.

const parent = {
  canSwim: true
};

const child = Object.create(parent);
child.name = 'Dolphin';

console.log(child.name); // Dolphin
console.log(child.canSwim); // true
console.log(Object.getPrototypeOf(child) === parent); // true

// CLASSES
// Classes are just a cleaner way to work with prototypes.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

const animal = new Animal('Whiskers');

console.log(animal.speak()); // Whiskers makes a sound
console.log(Object.getPrototypeOf(animal) === Animal.prototype); // true

// INHERITANCE
// extends connects the prototype chain.

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog('Buddy');

console.log(dog.speak()); // Buddy barks
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// Another prototype inheritance
const user = {
  user : "Sarah",
  email:"sarah@gmail.com"
}

const Teacher = {
  makeVideo :true
}
const TeachingSupport = {
  isAvailable : false
}

const TAsupport = {
  makeAssignment : 'js Assignment',
  fullTime : true,
  __proto__:TeachingSupport
}

Teacher.__proto__ = user

// OWN VS INHERITED PROPERTIES

const base = { shared: 'Hello' };
const obj = Object.create(base);
obj.own = 'World';

console.log(Object.hasOwn(obj, 'own')); // true
console.log(Object.hasOwn(obj, 'shared')); // false