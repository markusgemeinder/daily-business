## JavaScript Funktionen

### Anzahl der Elemente eines Objekts auslesen

```js
// const cards = [{question: '...', answer: '...' },{...},{...}]
function readObjects() {
  const numberOfObjects = cards.length; // Anzahl Objekte
  for (let counter = 0; counter < numberOfObjects; counter++) {
    console.log(`q: ${cards[counter].question} – a: ${cards[counter].answer}`);
  }
}
```

### JS structure

27.11.2023 / Julia

```js
console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

// And now it's your turn: delete the value null and write code such that the variables have a value corresponding to their name. Use the following methods to achieve this goal:

// Array.includes()
// Array.find()
// Array.findIndex()
// Array.sort()
// Array.some()
// Array.every()
// Array.reduce()
// Additionally, you will need:

// String.startsWith()
// String.endsWith()

// =========
const hippoExists = animalStrings.includes("hippo");
// =========

const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
// =========

const firstAnimalStartingWithLetterP = animalStrings.find((animalString) =>
  animalString.startsWith("p")
);
// =========

const indexOfGiraffe = animalStrings.findIndex((animalString) =>
  animalString.includes("giraffe")
);

// =========

const animalsSortedAlphabetically = animalStrings.slice().sort((a, b) => {
  const lowerCaseNameA = a.name.to;
  if (nameA < nameB) {
    return -1; // return-Wert positiv, wenn absteigende Sortierung
  }
  if (nameA > nameB) {
    return 1; // return-Wert negativ, wenn absteigende Sortierung
  }
  return 0;
});

// =========

const anyAnimalEndsWithLetterZ = animalStrings.some((animalString) =>
  animalString.endsWith("z")
);

// =========

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animalString) => animalString.length > 2
);

// ========= Option 1 ==========

const lengthOfAllAnimalStrings = animalStrings.map((animalString) => {
  return animalString.length;
});
console.log(lengthOfAllAnimalStrings);

// const sumOfAllAnimalCharacters = lengthOfAllAnimalStrings.reduce(
//   (a, b) => a + b
// );

// console.log(sumOfAllAnimalCharacters);

// ========= Option 2 ==========

const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => a + b).length;
console.log(sumOfAllAnimalCharacters);

// =========
export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
```

### Utility functions

27.11.2023 / Diego

```js
function getNegatives(numbers) {
  const output = [];
  numbers.forEach((number) => {
    if (number < 0) {
      output.push(number);
    }
  });
  return output;
}

console.log(getNegatives([0, -3, 2, -1])); // [-3, -1]

// write a function called getNegatives,
// that takes an array of numbers and parameter,
// and returns a new array containing just the negative numbers from the passed array
//(e.g. getNegatives([1, -2, -5, 3]) -> [-2, -5])

function getNegatives(numbers) {
  // return numbers.filter((number) => number < 0);
  return getLesserThan(numbers, 0);
}

// write a function called getLesserThan
// that takes an array of numbers and a number as parameters,
// and returns all the numbers of the array that are lesser than the passed number
// e.g. getLesserThan([1, 2, 3, 4], 3) -> [1, 2].

function getLesserThan(numbers, numberToCompare) {
  return numbers.filter((number) => number < numberToCompare);
}

// sample calls
console.log(
  getLesserThan([4, 3, 5, 10], 5) // [4, 3] - only 4 and 3 are lesser than 5
);

console.log(
  getLesserThan([4, 3, 5, 10], 100) // [4, 3, 5, 10] - all numbers are lesser than 100!
);

console.log(
  getLesserThan([4, 3, 5, 10], 0) // [] - no number is lesser than zero
);

function getWordLengths(words) {
  return words.map(getWordLength);
}

function getWordLength(word) {
  return word.length;
}

console.log(getWordLengths(["diego", "joe", "benjamin"])); // [5, 3, 8]
console.log(getWordLengths(["mario", ""])); // [5, 0] - the empty string has length 0

function getCitiesByLanguage(cities, language) {
  return cities.filter((city) =>
    city.language.toLowerCase().includes(language.toLowerCase())
  );
}
```

### Button >>> Render UserObject to HTML via .innerHTML

27.11.2023 / Diego

```js
function getUsers() {
  return [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
  ];
}

const button = document.querySelector('[data-js="button"]');
const list = document.querySelector('[data-js="ul"]');

// button.addEventListener("click", async () => {

button.addEventListener("click", () => {
  // 1. call getUsers and save the users in a variable of your choice (hint: DON'T be creative!)
  const users = getUsers();
  // 2. loop over the users via forEach
  // console.log(users);
  renderUsers(users);

  // button.disabled = true;
});

button.addEventListener("click", () => {
  const users = getUsers();
  renderUsers(users);
});

function renderUsers(users) {
  console.log(users);
  users.forEach((user) => {
    // 3. in the loop, add an entry to the <ul> with the user first and last names
    // feel free to user innerHTML/dollars or createElement + append
    // 3b. feel free to display the user avatar and email as well
    // list.innerHTML += `<li>${user.first_name} ${user.last_name} | <a href="mailto:${user.email}">${user.email}</a> | <a href="${user.avatar}">Avatar</a> </li>`;
    list.innerHTML += `<li>${user.first_name} ${user.last_name} | <a href="mailto:${user.email}">${user.email}</a> <br/><br/> <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" /><br/><br/> </li>`;
  });
}
```

### Filter Arrays/Objects

```js
console.clear();

const cities = [
  {
    name: "Berlin",
    language: "German",
    country: "Germany",
    population: 3645000,
  },
  {
    name: "Vienna",
    language: "German",
    country: "Austria",
    population: 1897000,
  },
  { name: "Paris", language: "French", country: "France", population: 2161000 },
  { name: "Rome", language: "Italian", country: "Italy", population: 2873000 },
  {
    name: "Madrid",
    language: "Spanish",
    country: "Spain",
    population: 3223000,
  },
];

// write a function callled 'getCitiesByLanguages'
// that takes an array of cities and a language as parameter
// and returns all cities where the passed language is spoken

function getCitiesByLanguages(inputLanguage) {
  const citiesByLanguage = cities
    .filter((city) => city.language === inputLanguage)
    .map((city) => city.name);
  return citiesByLanguage;
}

console.log(getCitiesByLanguages("French"));

// write a function called 'getCitiesByggerThan'
// that takes an array of cities and a number as parameter
// and returns all the cities with more people than the passed number

function getCitiesByggerThan(inputPopulation) {
  return cities.filter((city) => Number(city.population) >= inputPopulation);
  // .map((city) => city.name);
}

console.log(getCitiesByggerThan(2200000));

// write a function called 'getCountries'
// that takes an array of cities
// and returns an array of strings containing the corresponding countries

// const getCountries = cities.filter((city) => city.name == "Berlin");
function getCountries(inputCountry) {
  return cities.filter((city) => city.country == inputCountry);
}

console.log(getCountries("France"));

// remember to set your expectation before!
//
// console.log(getCitiesByLanguages(..., ...)); // should log ...
```
