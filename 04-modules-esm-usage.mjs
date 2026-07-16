// ES MODULES USAGE
// Uses import to bring values from another file.

import greet, {
  findGCD,
  isPrime,
  factorial,
} from "./04-modules-esm.mjs";

console.log(greet("Maham"));

console.log(findGCD(24, 36));   // 12

console.log(isPrime(29));       // true
console.log(isPrime(18));       // false

console.log(factorial(5));      // 120