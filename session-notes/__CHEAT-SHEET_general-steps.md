# Allgemeine Vorgehensweise beim Erstellen von Funktionen mit externen API-Daten

```js
console.clear();

// Generally: async function fetchData() has to be set

async function fetchData() {
  const API_URL = "https://swapi.dev/api/people";
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.results;
}

// Step 0: define goal of function >>> function filterByName()
// Step 1: pickup obj in const >>> const data = await fetchData()
// Step 2: define operation in const with fixed value >>> const result = data.filter((item) => {return item.name == "fixed value";}); ...
// Step 3a: add i.e. 'input' to the brackets of the function >>> i.e. filterByName(input)
// Step 3b: replace "fixed value" by 'input'
// Step 4: log content of const result >>> console.log(result);
// Step 5: call function >>> filterByName("Markus")

async function main(input) {
  const data = await fetchData();
  const result = data.filter((item) => {
    return item.name == input;
  });
  console.log(result);
}

main("Darth Vader");
```

# JS Modern Syntax: Array Destructuring

Notes (2023/11/29 | Coach: Diego Caponera)

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
