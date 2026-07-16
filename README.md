# JS Practice

Just some JavaScript files I wrote while practicing core concepts. Code with comments explaining what's going on and the expected console output written next to each line.

## What's in here

- **01-prototype.js** – prototypes, the prototype chain, and classes (which are basically just prototypes with a nicer syntax)
- **02-es6-features.js** – destructuring, spread/rest, optional chaining (`?.`), nullish coalescing (`??`)
- **03-iterators-generators.js** – how iterators work under the hood, and generators (`function*`)
- **04-modules-commonjs.cjs** + **04-modules-commonjs-usage.cjs** – the old `require` / `module.exports` way of doing modules
- **04-modules-esm.mjs** + **04-modules-esm-usage.mjs** – the modern `import` / `export` way
- **05-design-patterns.js** – a few common patterns: module, factory, observer, singleton

## How to run

We just need Node installed. Then run any file like:
## Topic notes

### 1. Prototypes (`01-prototype.js`)
- Every object has an internal prototype; property lookups fall back to it when not found on the object itself (`Object.create`, `Object.getPrototypeOf`).
- `class` syntax is sugar over prototypal inheritance — methods live on `ClassName.prototype`.
- `extends` wires up the prototype chain for subclasses (`instanceof` checks work across the chain).
- `Object.hasOwn()` distinguishes an object's **own** properties from ones it merely **inherits**.

### 2. ES6+ Features (`02-es6-features.js`)
- **Destructuring** — unpack arrays/objects into variables, with default values (`{ role = 'Guest' }`) and rest collection (`...rest`).
- **Spread (`...`)** — expand an array/object into a new one (copying/merging).
- **Rest (`...`)** — collect an arbitrary number of function arguments into an array.
- **Optional chaining (`?.`)** — safely read nested properties that may not exist, without throwing.
- **Nullish coalescing (`??`)** — supply a default only for `null`/`undefined` (unlike `||`, so `0` and `''` are preserved).

### 3. Iterators & Generators (`03-iterators-generators.js`)
- The iterator protocol: an object with a `.next()` method returning `{ value, done }`.
- Arrays are natively iterable via `Symbol.iterator`; a `for...of` loop calls `.next()` automatically.
- A hand-written iterator factory (`fruitIterator`) shows how the protocol works under the hood.
- **Generators** (`function*` / `yield`) are a concise way to build iterators without manually tracking state.

### 4. Modules — CommonJS vs ESM (`04-modules-*`)
- **CommonJS** (`.cjs`): synchronous, uses `module.exports` to export and `require()` to import. Traditional Node.js module system.
- **ESM** (`.mjs`): the standard JavaScript module system, uses `export` / `export default` and `import`. Supports both **named exports** (e.g. `findGCD`, `isPrime`, `factorial`) and a single **default export** (`greet`).

### 5. Design Patterns (`05-design-patterns.js`)
- **Module pattern** — encapsulate private state (`count`) inside a closure, exposing only chosen methods.
- **Factory pattern** — a function that builds and returns new objects (`createUser`).
