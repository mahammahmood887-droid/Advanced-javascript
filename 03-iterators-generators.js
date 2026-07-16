// ITERATORS AND GENERATORS

// ITERATORS
// An iterator lets us go through values one at a time.

const numbers = [1, 2, 3];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function fruitIterator(values) {
  let nextIndex = 0;
  //we will return an object
  return {
    next: function () {
      if (nextIndex < values.length) {
        //we will return this object
        return {
          value: values[nextIndex++],
          done: false
        }
      }
      else {
        return { done: true }
      }
    }
  }
}
//using this iterator

const myArray = ["Apple", "Grape", "Mango", "Banana"];
const fruits = fruitIterator(myArray);

console.log(fruits.next()); // { value: 'Apple', done: false }
console.log(fruits.next()); // { value: 'Grape', done: false }
console.log(fruits.next()); // { value: 'Mango', done: false }
console.log(fruits.next()); // { value: 'Banana', done: false }
console.log(fruits.next()); // { done: true }

// We normally don't call .next() ourselves.
// A for...of loop does it automatically.

for (const num of numbers) {
  console.log(num); // 1 2 3
}


// GENERATORS
// A generator is an easy way to create an iterator.
// function* creates a generator and yield returns one value at a time.

function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = countToThree();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// You can also loop over a generator.

for (const num of countToThree()) {
  console.log(num); // 1 2 3
}