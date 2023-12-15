Notes (2023/11/27 + 2023/11/28 | Coach: Diego Caponera)

## JavaScript Fetch

### API

- Allgemeiner Hinweis:

```js
const API_URL = "https://reqres.in/api/users";
// API_URL in Großbuchstaben als Konvention (keine Entscheidungsfreiheit über Benennung der Variable)
```

### Coding vorgehensweise

````js
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

main("Darth Vader");```
````
