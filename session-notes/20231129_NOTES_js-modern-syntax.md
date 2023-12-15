Notes (2023/11/29 | Coach: Diego Caponera)

# JS Modern Syntax: Array Destructuring

## Schritte

1. Funktion anlegen mit Eingabeparameter:
   - Wenn Objekt `countries` heißt, dann `function logCountry(country)` (Funktionsparameter im Singular)
   - Variablen über `${country.name}` `${country.population}` etc. ansprechen
   - `const {name, population} = country` als Zwischenschritt in Funktion einfügen und Variablen aus 1. ersetzen durch `${name}`und `${population}`
2. Funktion in der Klammer ersetzen durch `function logCountry({name, population})` und Variable aus 2. löschen
3. Check: Immer zwei Beispiele mit jeder Funktion - sicherstellen, dass Funktion sauber arbeitet!

### Example 1

```js
const myCountry = {
  id: 1,
  name: "Italy",
  population: "60.000.000",
  weather: "sunny",
};

const yourCountry = {
  id: 1,
  name: "Spain",
  population: "38.000.000",
  weather: "sunny",
};

// #1
function logCountry(country) {
  console.log(`My country is called ${country.name}`);
  console.log(`It has ${country.population} people`);
  console.log(`The weather is usually ${country.weather}`);
}
// #2
function logCountry(country) {
  //   const { name, population, weather } = user; // funktioniert nicht
  const { name, population, weather } = country; // funktioniert
  console.log(`My country is called ${name}`);
  console.log(`It has ${population} people`);
  console.log(`The weather is usually ${weather}`);
}
// #3 Variablen einsparen
function logCountry({ name, population, weather }) {
  console.log(`My country is called ${name}`);
  console.log(`It has ${population} people`);
  console.log(`The weather is usually ${weather}`);
}

logCountry(myCountry); // Check mit beiden Variablen
logCountry(yourCountry); // Check mit beiden Variablen
```

### Example 2

```js
const myUser = {
  id: 1,
  name: "Jane",
  email: "jane@doe.com",
  isLogged: false,
};

// #1 original

// const email = user.email;
// const { email } = user;

function logUser(user) {
  console.log(`the user is called: ${user.name}`);
  console.log(`the email is: ${user.email}`);
}
// #2 internal destructuring

function logUser(user) {
  const { name, email } = user;
  // entspricht:
  // const name = user.name;
  // const email = user.email;
  console.log(`the user is called: ${name}`);
  console.log(`the email is: ${email}`);
}
// #3 desctructuring parameters

function logUser({ name, email }) {
  console.log(`the user is called: ${name}`);
  console.log(`the email is: ${email}`);
}

logUser(myUser);
```

## Basics

### Arrays (example)

```js
const countries = ["Italy", "Germany", "Iran", "Nepal", "Algeria"];
const lastCountry = [countries.length - 1];
const [firstCountry, , ...rest] = countries; // Italy, ["Iran", "Nepal", "Algeria"] >>> firstCountry = Italy >>> rest = ["Iran", "Nepal", "Algeria"]

function describeCountries(countries) {
  const [firstCountry, secondCountry, ...otherCountries] = countries;
  return `I visited ${firstCountry}, ${secondCountry}, and ${otherCountries.length} more`;
}

//I visited Italy, Germany and 3 more

const countriesIWantToVisit = ["Japan", "Egypt", "Spain"];
console.log(describeCountries(countriesIWantToVisit));

// I visited Japan, Egypt and 1 more
```

### Basics

#### Objects (example)

```js
const user = {
  id: 1,
  name: "Jane",
  email: "jane@doe.com",
  isLogged: false,
};

// const email = user.email;
const { email } = user;

console.log(email);

const numbers = [1, 2, 3];

// const first = numbers[0];
const [first] = numbers;
```

#### Spread Operator

```js
const myCountries = ["Italy", "Germany", "Iran", "Nepal", "Algeria"];
const countriesIWantToVisit = ["Japan", "Egypt", "Spain"];
const allCountries = [...myCountries, ...countriesIWantToVisit];
// console.log(allCountries, allCountries.length);

// Anstatt `countriesIWantToVisit.push("Austria");` neue const
const updatedListOfCountries = ["Austria", ...countriesIWantToVisit];
```

#### Push mit Spread Operator

```js
function push(array, element) {
  return [...array, element];
}
const numbers = [4, 7, 2];
const newNumbers = push(numbers, 9);
// console.log(newNumbers)
console.log(push(["one", "two", "three"], "five"));
```

#### Unshift mit Spread Operator

```js
function unshift(array, element) {
  return [element, element];
}
const numbers = [4, 7, 2];
const newNumbers = unshift(numbers, 9);
console.log(newNumbers);
```

#### Spread Operator mit Objekten

```js
const user = {
  id: 1,
  email: "jane@doe.com",
  street: "Carnaby Street",
};
const address = {
  street: "Sesame Street",
  number: 7,
  zipCode: 12345,
};

const completeUser = { ...user, ...address }; // street address überschreibt street user
const completeUser = { ...user, address }; // besser!
console.log(completeUser);
```
