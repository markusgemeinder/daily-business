# Array Methods Cheatsheet

Arrays in JavaScript come with various handy methods. Not all of them were introduced at the same time, always check on [caniuse.com](http://caniuse.com/) if they are available in the current browsers.

The following list is safe to use.

| Method name                                             | What it does                                 |
| ------------------------------------------------------- | -------------------------------------------- |
| [Array.prototype.forEach](#arrayprototypeforeach)       | (does not return anything)                   |
| [Array.prototype.map](#arrayprototypemap)               | `[🟡, 🔴, 🔵].map(⬛) -> [🟨, 🟥, 🟦]`       |
| [Array.prototype.filter](#arrayprototypefilter)         | `[🟡, 🟨, 🔴, 🟦].filter(⚫) -> [🟡, 🔴]`    |
| [Array.prototype.find](#arrayprototypefind)             | `[🟦, 🟡, 🟨, 🔴].find(⚫) -> 🟡`            |
| [Array.prototype.findIndex](#arrayprototypefindindex)   | `[🟦, 🟢, 🟨, 🟥].findIndex(⚫) -> 1️`       |
| [Array.prototype.reduce](#arrayprototypereduce)         | `[🔴, 🟠, 🟡, 🟢, 🔵, 🟣 ].reduce(➕) -> 🌈` |
| [Array.prototype.includes](#arrayprototypeincludes)     | `[🟡, 🔴, 🔵].includes(🟦) -> ❌`            |
| [Array.prototype.toReversed](#arrayprototypetoreversed) | `[🟡, 🔴, 🔵].toReversed() -> [🔵, 🔴, 🟡]`  |
| [Array.prototype.toSorted](#arrayprototypetosorted)     | `[2️⃣, 1️⃣, 3️⃣].toSorted() -> [1️⃣, 2️⃣, 3️⃣]`    |
| [Array.prototype.join](#arrayprototypejoin)             | `[👩,👩,👧,👧].join(💕) -> 👩‍👩‍👧‍👦`               |
| [Array.prototype.slice](#arrayprototypeslice)           | `[🟡, 🔴, 🔵, 🟢].slice(1, -1) -> [🔴, 🔵]`  |
| [Array.prototype.every](#arrayprototypeevery)           | `[🟡, 🔴, 🔵].every(⚫) -> ✅`               |
| [Array.prototype.some](#arrayprototypesome)             | `[🟡, 🟥, 🟦].some(⚫) -> ✅`                |

**Note**: `push()`, `pop()`, `shift()`, `unshift()` have been left out. They mutate the original array, and sometimes it is preferable. In case immutability is needed, doing for instance `const newArray = [...prev, newItem]` is the way to go.

## Why array methods are useful

Since many of them return a new array, you can **chain** them!

```js
const users = [
  { id: 1, first_name: "Jane", last_name: "Doe" },
  { id: 2, first_name: "John", last_name: "Doe" },
  { id: 3, first_name: "Steven Patrick", last_name: "Morrissey" },
  { id: 4, first_name: "Johnny", last_name: "Marr" },
];

const fullNamesOfUsersStartingWithJ = users
  .filter(({ first_name }) => first_name.toLowerCase().startsWith("j"))
  .map(({ first_name, last_name }) => `${first_name} ${last_name}`);

console.log(fullNamesOfUsersStartingWithJ); // ['Jane Doe', 'John Doe', 'Johnny Marr']
```

Also, by giving names to the callback function, the code literally documents itself:

```js
function startsWithJ({ first_name }) {
  return first_name.toLowerCase().startsWith("j");
}

function getFullName({ first_name, last_name }) {
  return `${first_name} ${last_name}`;
}

const fullNamesOfUsersStartingWithJ = users
  .filter(startsWithJ)
  .map(getFullName);
```

Taking it a bit further down the **functional programming** lane, one can [_un-curry_](https://javascript.info/currying-partials) the `startsWithJ` function:

```js
// this function returns a new function, that compares the passed user to the letter used to generate it
// it twists your mind at first, but once it clicks you cannot avoid thinking like this!
function startsWith(letter) {
  return ({ first_name }) => first_name.toLowerCase().startsWith(letter);
}

function getFullName({ first_name, last_name }) {
  return `${first_name} ${last_name}`;
}

const fullNamesOfUsersStartingWithJ = users
  .filter(startsWith("j"))
  .map(getFullName);
```

A more sophisticated, but absolutely reasonable example may be to perform an advanced search in a shop inventory. Let's find if there are Metallica shirts that come in small or medium, are black, and cost less than 25. A human could look at the array and see how the second entry matches all the criteria. But JavaScript is not human!

```js
const items = [
  { id: 1, band: "Metallica", sizes: ["M", "L"], colors: ["red"], price: 25 },
  {
    id: 2,
    band: "Metallica",
    sizes: ["S", "M"],
    colors: ["black", "red"],
    price: 20,
  },
  {
    id: 3,
    band: "AC/DC",
    sizes: ["L", "XL"],
    colors: ["black", "white"],
    price: 15,
  },
  {
    id: 4,
    band: "Led Zeppelin",
    sizes: ["S", "M"],
    colors: ["black", "blue"],
    price: 30,
  },
];

function fromBand(bandName) {
  return ({ band }) => band.toLowerCase().includes(bandName.toLowerCase());
}

function inSizes(wantedSizes) {
  return ({ sizes }) => wantedSizes.some((size) => sizes.includes(size));
}

function inColor(color) {
  return ({ colors }) => colors.includes(color);
}

function cheaperThan(maxPrice) {
  return ({ price }) => price <= maxPrice;
}

const matchedItems = items
  .filter(fromBand("metallica"))
  .filter(inSizes(["S", "M"]))
  .filter(inColor("black"))
  .filter(cheaperThan(25));

console.log(matchedItems);
// [{ id: 2, band: 'Metallica', sizes: ['S', 'M'], colors: ['black', 'red'], price: 20 }] 🤘🏾
```

Takin it to the _very_ next level, if the quantity of filters is dynamic (think a complex UI when the user can add and remove fields), functional programming is still win:

```js
const items = [
  { id: 1, band: "Metallica", sizes: ["M", "L"], colors: ["red"], price: 25 },
  {
    id: 2,
    band: "Metallica",
    sizes: ["S", "M"],
    colors: ["black", "red"],
    price: 20,
  },
  {
    id: 3,
    band: "Led Zeppelin",
    sizes: ["L", "XL"],
    colors: ["black", "white"],
    price: 15,
  },
  {
    id: 4,
    band: "AC/DC",
    sizes: ["S", "M"],
    colors: ["black", "blue"],
    price: 30,
  },
];

function fromBand(bandName) {
  return ({ band }) => band.toLowerCase().includes(bandName.toLowerCase());
}

function inSizes(wantedSizes) {
  return ({ sizes }) => wantedSizes.some((size) => sizes.includes(size));
}

function inColor(color) {
  return ({ colors }) => colors.includes(color);
}

function cheaperThan(maxPrice) {
  return ({ price }) => price <= maxPrice;
}

const filters = [
  fromBand("zeppelin"),
  inSizes(["M", "L"]),
  inColor("white"),
  cheaperThan(20),
];

// plot twist: we are not reducing the original items array, but the array of filters!
// lateral(us) thinking for the win
const matchedItems = filters.reduce(
  (memo, filter) => memo.filter(filter),
  items
);

console.log(matchedItems);
// [{ id: 3, band: 'Led Zeppelin', sizes: ['L', 'XL'], colors: ['black', 'white'], price: 15 }] 🤘🏾
```

Thinking this is not obvious and it requires a discrete amount of experience. But if you start small and walk your way through the simplest examples up to the combinations, you will make it!

Observe how in the end there are no complex functions: just one liners than do a very specific things, in a very simple way. No if statements, no variable definitions. If you understand how things work [in isolation](https://www.youtube.com/watch?v=7d8xBEhTr6U), you'll have no trouble in composing them.

## A note on callback functions

Most array methods expect a **callback function** to be passed. Such function on its own has a specific signature, that often consists of two parameters - the **array entry** at the current iteration, and the **iteration index**.

### How should the entry parameter be named in the function

A good rule of thumb is to use the **corresponding singular** of the original array:

```js
numbers.filter((number) => ...);
users.filter((user) => ...);
items.filter((item) => ...);
// ok, that shouldn't happen too often
geese.filter((goose) => ...);
```

If you are not feeling inspired, it is acceptable to use `x` as parameter name:

```js
favouriteBooks.filter((x) => x.pageCount > 500);
```

Prefer **parameter destructuring** if possible, to get rid of the problem entirely:

```js
favouriteBooks.filter(({ pageCount }) => pageCount > 500);
```

### What does the callback function return

The callback function should usually return `true` or `false` (see `filter()`, `find()`, `every()`, `some()`), but it can also return a new value (`map()`), or a number between `-1`, `1` and `0` for `sort()` and `toSorted()`. In the case of `forEach()`, nothing should be returned from the callback function.

### What can be used as a callback function

All possible function flavours can be used:

```js
const numbers = [-1, 7, 4, -3, 5];

// anonymous traditional function
const negatives = numbers.filter(function (number) {
  return number < 0;
});

// anonymous arrow function (with function body)
const negatives = numbers.filter((number) => {
  return number < 0;
});

// anonymous arrow function (with concise body)
const negatives = numbers.filter((number) => number < 0);

// named traditional function
function isNegative(number) {
  return number < 0;
}

const negatives = numbers.filter(isNegative);

// named arrow function
const isNegative = (number) => number < 0;

const negatives = numbers.filter(isNegative);
```

If the callback functions are shared between different use cases, it may make sense to store them in a separate file, and import them when needed. On the other hand if they are used just once on the spot, an anonymous solution is usually preferred.

## A note on immutability (and on mutability)

The [mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) vs. [immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable) debate in programming can get quite philosophical. Let's stick to the definition:

> A mutable value is one that can be changed without creating an entirely new value. In JavaScript, objects and arrays are mutable by default, but primitive values are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned.

Most of the array methods return a new array, leaving the original untouched:

```js
const numbers = [-1, 7, 4, -3, 5];
const negatives = numbers.filter((number) => number < 0);

console.log(negatives); // [-1, -3]
console.log(numbers); // [-1, 7, 4, -3, 5]
```

Think about a user filtering a contact list by typing in a search field. If they make a mistake while typing, there would be no way to go back if we already displayed the unwanted results.

On the other hand, operations like sorting and reversing offer a _in place_ and _copying_ version, depending on the needs. This is the case of `sort()`/`toSorted()` and `reverse()`/`toReversed()`:

```js
const numbers = [-1, 7, 4, -3, 5];
numbers.sort(); // you don't need to assign it to a new variable
console.log(numbers); // [-3, -1, 4, 5, 7];

const numbers = [-1, 7, 4, -3, 5];
const sortedNumbers = numbers.toSorted(); // you don't need to assign it to a new variable
console.log(numbers); // [-1, 7, 4, -3, 5];
console.log(sortedNumbers); // [-3, -1, 4, 5, 7];
```

In a React environment for instance, the immutable version are always preferred.

---

## [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

The `forEach()` method executes a provided function once for each array element.

### When do we use it

- when we want to loop over an array, but don't need to produce new information out of the operation;
- when we want to loop over a `NodeList` of HTML Elements (technically not an array, but still has the same interface of the `forEach` method) obtained via `document.querySelectorAll`.

### Example with primitive values

```js
const numbers = [7, 4, 5];

numbers.forEach((number, index) => {
  console.log(`The number at position ${index + 1} is: ${number}`);
});

// logs:
// The number at position 1 is: 7
// The number at position 2 is: 4
// The number at position 3 is: 5
```

### Example with DOM elements

```js
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // you don't need event.target, because the button is already in scope
    button.disabled = true;
    button.innerText = "Clicked!";
  });
});
```

---

## [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```
[🟡, 🔴, 🔵].map(⬛) -> [🟨, 🟥, 🟦]
```

### What does it return

The `map()` method returns a new array populated with the results of calling a provided function on every element in the calling array.

The new array will have **the same length of the original one**.

### When do we use it

- when we want to transform every entry of the original array by the same rule;
- when we need to extract some value from all the entries of the original array;
- in React, when we need to generate JSX elements from a data array.

### Example with primitive values

```js
const numbers = [2, 3, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [4, 6, 10]
```

### Example with objects

```js
const users = [
  { id: 1, first_name: "Jane", last_name: "Doe" },
  { id: 2, first_name: "John", last_name: "Doe" },
  { id: 3, first_name: "Johnny", last_name: "Marr" },
];

const fullNames = users.map(
  ({ first_name, last_name }) => `${first_name} ${last_name}`
);

console.log(fullNames); // ['Jane Doe', 'John Doe', 'Johnny Marr']
```

---

## [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```
[🟡, 🟨, 🔴, 🟦].filter(⚫) -> [🟡, 🔴]
```

### What does it return

The `filter()` method returns a new array populated with of a portion of the original one, filtered down to just the elements that pass the test implemented by the provided function.

The new array will have the same length of the original array if all the entries pass the test, otherwise less than that. If no entries pass the test, it returns an empty array.

### When do we use it

- when we want just a subset of a given array;
- when we want to display only the elements that match a certain criterium, for instance whose name start with what a user typed in a search field.

### Example with primitive values

```js
const numbers = [2, 3, 4, 5];

const evenNumbers = numbers.map((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

### Example with objects

```js
const users = [
  { id: 1, first_name: "Jane", last_name: "Doe" },
  { id: 2, first_name: "John", last_name: "Doe" },
  { id: 3, first_name: "Steven Patrick", last_name: "Morrissey" },
];

const usersStartingWithJ = users.filter(({ first_name }) =>
  firstName.startsWith("J")
);

console.log(usersStartingWithJ);
// [
//   { id: 1, first_name: 'Jane', last_name: 'Doe' },
//   { id: 2, first_name: 'John', last_name: 'Doe' },
// ]
```

---

## [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```
[🟦, 🟡, 🟨, 🔴].find(⚫) -> 🟡
```

### What does it return

The `find()` method returns the first element of the array that satisfies the provided testing function. If no values satisfies the testing function, `undefined` is returned.

### When do we use it

- when we need a specific entry of an array, whose index inside the array is unknown;
- when we need the first entry of an array that passes the test.

### Example with primitive values

```js
const numbers = [0, -2, 5, 7, -5];

const firstNegative = numbers.find((number) => number < 0);

console.log(firstNegative); // -2
```

### Example with objects

```js
const users = [
  { id: 1, first_name: "Jane", last_name: "Doe" },
  { id: 2, first_name: "John", last_name: "Doe" },
];

const jane = users.find(({ first_name }) => first_name === "Jane");

console.log(jane);
// { id: 1, first_name: 'Jane', last_name: 'Doe' }
```

---

## [Array.prototype.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```
[🟦, 🟢, 🟨, 🟥].findIndex(⚫) -> 1️⃣
```

### What does it return

The `findIndex()` method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, `-1` is returned.

### When do we use it

- to retrieve the index of a given entry in a collection.

### Example with primitives

```js
const numbers = [1, 5, 0, -2, 7, -3];
const firstNegativeIndex = numbers.findIndex((number) => number < 0);

console.log(firstNegativeIndex); // 3
```

### Example with objects

```js
const users = [
  { id: 1, first_name: "Jane", last_name: "Doe" },
  { id: 2, first_name: "John", last_name: "Doe" },
];

const janeIndex = users.findIndex(({ first_name }) => first_name === "Jane");

console.log(janeIndex); // 0
```

---

## [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```
[🔴, 🟠, 🟡, 🟢, 🔵, 🟣 ].reduce(➕) -> 🌈
```

### What does it return

The `reduce()` method executes the passed callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no _return value of the previous calculation_. If supplied as an argument after the callback, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

### When do we use it

- when we need calculate something based on the all the entries of an array, and we don't want to create temporary variables and loop statements;
- when we need to combine information from all the entries of the original array into a final single structure.

### Example with primitive values

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((memo, item) => memo + item, 0);

console.log(sum); // 10
```

### Example with objects

```js
const cart = [
  { id: 1, name: "Powerful Product", price: 10, quantity: 3 },
  { id: 2, name: "Invincible Item", price: 5, quantity: 2 },
];

const total = cart.reduce(
  (memo, { price, quantity }) => memo + price * quantity,
  0
);

console.log(total); // 40
```

### Merging objects together

```js
const user = {
  id: 1,
  first_name: "Jane",
  last_name: "Doe",
};

const address = {
  streetName: "Sesame Street",
  streetNumber: 7,
  city: "Atlantis",
};

const links = {
  homepage: "https://example.com",
  github: "https://github.com/jane-doe",
};

// in this case one would do just:
// const info = [...user, ...address, ...links];
// but in some contexts it may come in handy.
const info = [user, address, links].reduce(
  (memo, item) => ({ ...memo, ...item }),
  {}
);

console.log(info);
// {
//     "id": 1,
//     "first_name": "Jane",
//     "last_name": "Doe",
//     "streetName": "Sesame Street",
//     "streetNumber": 7,
//     "city": "Atlantis",
//     "homepage": "https://example.com",
//     "github": "https://github.com/jane-doe"
// }
```

---

## [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```
[🟡, 🔴, 🔵].includes(🟡) -> ✅
[🟡, 🔴, 🔵].includes(🟦) -> ❌
```

### What does it return

The `includes()` method of Array instances determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

### When do we use it

- when we want to see if an array contains a certain value.

### Example with primitive values

```js
const numbers = [2, 3, 5, 0];

numbers.includes(0); // true
numbers.includes(-1); // false
```

### Example with objects

Since objects do not pass a direct equality text, the right tool to see if an array of objects contains a specific entry is to use `Array.prototype.find`.

---

## [Array.prototype.toReversed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

```
[🟡, 🔴, 🔵].toReversed() -> [🔵, 🔴, 🟡]
```

### What does it return

The `toReversed()` method returns a new array with the elements in reversed order.

### When do we use it

- when we want to get a copy of a given array, in reversed order, \_without modifying the original one.

### Example with primitive values

```js
const numbers = [2, 3, 5, 0];

const reversedNumbers = numbers.toReversed(); // [0, 5, 3, 2]
```

---

## [Array.prototype.toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

```
[2️⃣, 1️⃣, 3️⃣].toSorted() -> [1️⃣, 2️⃣, 3️⃣]
```

### What does it return

The `toSorted()` returns a new array with the elements sorted in ascending order, or in the order established by the provided function.

### When do we use it

- when we want to display an original source of data in a different order, based on user preferences;
- when we want to find the element of an array that ranks the highest under a certain criterium (accessing the first entry after a sort operation).

### Example with primitive values

```js
const numbers = [5, 3, 1, 4, 2, -7];
const sortedNumbers = numbers.toSorted();

console.log(sortedNumbers); // [-7, 1, 2, 3, 4, 5];

const names = ["Arcimboldus", "Joe", "Tutankhamun", "Maria"];
const sortedNames = names.toSorted((a, b) => {
  if (a.length > b.length) {
    return 1;
  }
  if (a.length < b.length) {
    return -1;
  }
  return 0;
});

console.log(sortedNames); // ['Joe', 'Maria', 'Arcimboldus', 'Tutankhamun']

// if you paid attention during algebra classes,
// you can save yourself some if statements and use the signum function!
// SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
const sortedNames = names.toSorted((a, b) => Math.sign(a.length - b.length));
```

### Example with objects

```js
const planets = [
  { name: "Mercury", moons: 0 },
  { name: "Venus", moons: 0 },
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 2 },
  { name: "Jupiter", moons: 95 },
  { name: "Saturn", moons: 146 },
  { name: "Uranus", moons: 27 },
  { name: "Neptune", moons: 14 },
  // Pluto we never forget :((
];

const planetsSortedByMoonsDescending = planets.toSorted((a, b) => {
  if (a.moons > b.moons) {
    return -1;
  }
  if (a.moons < b.moons) {
    return 1;
  }
  return 0;
});

console.log(planetsSortedByMoonsDescending);
// [
//   { name: 'Saturn', moons: 146 },
//   { name: 'Jupiter', moons: 95 },
//   { name: 'Uranus', moons: 27 },
//   { name: 'Neptune', moons: 14 },
//   { name: 'Mars', moons: 2 },
//   { name: 'Earth', moons: 1 },
//   { name: 'Mercury', moons: 0 },
//   { name: 'Venus', moons: 0 },
// ]

// even in this case do yourself a favour and use Math.sign
const planetsSortedByMoonsDescending = planets.toSorted((a, b) =>
  Math.sign(b.moons - a.moons)
);
```

---

## [Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```
[👩,👩,👧,👧].join(💕) -> 👩‍👩‍👧‍👦
```

### What does it return

The `join()` method returns a string by concatenating all of the elements in this array, separated by commas or a specified separator string.

If the array has only one item, then that item will be returned without using the separator.

### When do we use it

- when we need a particular string representation of the original array;
- when we need to render an array of strings on multiple lines (joining with `\n`).

### Example with primitive values

```js
const breadcrumbs = ["Home", "Books", "Silmarillion"];

const url = breadcrumbs.map((token) => token.toLowerCase()).join("/");

console.log(url); // home/books/silmarillion
```

---

## [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

```
[🟡, 🔴, 🔵, 🟢].slice(1, -1) -> [🔴, 🔵]
```

### What does it return

The `slice()` method of returns a copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

### When do we use it

- when we need a subset of the original array based on position considerations;
- when we need just the tail of an array: `const tail = array.slice(1)`;
- when we need just the last entry of an array: `const tail = array.slice(-1)`;
- when we need to ignore the first and last entry of an array: `const body = array.slice(1, -1)`;
- when we need to create a copy of an original array, i.e. `const copy = original.slice()`. You can also do `const copy = [...original]`.

### Example with primitive values

```js
const numbers = [5, 4, 3, 2, 1];

const last = numbers.slice(-1); // [1]
const tail = numbers.slice(1); // [4, 3, 2, 1]
const body = numbers.slice(1, -1); // [4, 3, 2]

const copy = numbers.slice();
copy.push(0);

console.log(copy); // [5, 4, 3, 2, 1, 0];
console.log(numbers); // [5, 4, 3, 2, 1];
```

---

## [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```
[🟡, 🔴, 🔵].every(⚫) -> ✅
[🟡, 🟥, 🔵].every(⚫) -> ❌
```

### What does it return

The `every()` method returns `true` if all elements in the array pass the test implemented by the provided function. It returns `false` otherwise.

### When do we use it

- to see if all entries of an array match a specific condition.

### Example with primitive values

```js
const numbers = [1, 5, 0, -2, 7, -3];
const allPositives = numbers.every((number) => number >= 0);

console.log(allPositives); // false
```

### Example with objects

```js
const tasks = [
  { id: 1, name: "Conquer the world", completed: true },
  { id: 2, name: "Clean the kitchen", completed: true },
  { id: 3, name: "Read War and Peace", completed: true },
];

const allTasksCompleted = tasks.every(({ completed }) => completed);

console.log(allTasksCompleted); // true
```

---

## [Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```
[🟡, 🟥, 🔵].some(⚫) -> ✅
[🟨, 🟥, 🟦].some(⚫) -> ❌
```

### What does it return

The `some()` method returns `true` if at least one element in the array passes the test implemented by the provided function. It returns `false` if no element passes it.

### When do we use it

- to see if at least one element of an array matches a specific condition.

### Example with primitive values

```js
const numbers = [1, 5, 0, -2, 7, -3];
const containsNegatives = numbers.some((number) => number < 0);

console.log(containsNegatives); // true
```

### Example with objects

```js
const tasks = [
  { id: 1, name: "Conquer the world", completed: true },
  { id: 2, name: "Clean the kitchen", completed: true },
  { id: 3, name: "Read War and Peace", completed: false },
];

const stillTasksToDo = tasks.some(({ completed }) => !completed);

console.log(stillTasksToDo); // true
```
