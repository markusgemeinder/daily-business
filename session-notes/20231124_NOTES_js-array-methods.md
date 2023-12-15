Notes (2023/11/24 | Coach: CJ)

## Array methods

### Wiederholung: Array / Object

- Array = Liste aus Werten, Zusammenfassung aus Argumenten (jeder Variablentyp)
- Object = Liste mit detaillierten Beschreibungen und Werten

### forEach

- `const games = [...]` z.B. Beschreibung im Objekt key = `name:`
- Callback function >>> `games.forEach((game) => {});`
- Naming convention:

  - `const games` = Konstante mit Array an Objekten im Plural
  - `(game)` = Parameter im Singular
  - `console.log(game.name)` zeigt eine Liste aller Namen

### Code mit Kommentaren

```js
console.clear()
const games = [
  { id: 1, name: 'Markus', age: 49, publishingYear: 1974 },
  { id: 2, name: 'Lenny', age: 29, publishingYear: 1994 },
  { id: 3, name: 'Justus', age: 19, publishingYear: 2004 },
]

// Array Methods

// forEach >>> Array benutzen, eine Funktion auf alle Elemente anwenden
// array.forEach(()=>{})

games.forEach((game) => {
  const card = document.createElement('article')
  const headline = document.createElement('h2')

  headline.textContent = game.name
  card.append(headline) // = statement

  const description = document.createElement('p')
  description.textContent = game.description
  card.append(description)
  console.log()

  document.body.append(card)
})

// Map method
// creates new array
// array.map(()=>{... return value})
// array.map(()=>(...))
// shorthand syntax: array.map(item => item.something.toUpperCase())

// Beispiel 1:

const myArray = [{ name: 'Jane' }, { age: 3 }, {}]
console.log(myArray)

const myTrasnformedArray = myArray.map((object) => object.name + 'hello') // = function with implicit return, ein einziger Returnwert

console.log(myTrasnformedArray)

// Beispiel 2:

const uppercaseNames = games.map((game) => game.name.toUpperCase())

// Filter method
// creates new array
// same syntax as map

const gamesBefore2000 = games.filter((game) => game.publishingYear < 2000)

// Array method chaining
// via dot notation

const uppercaseNamesBefore2000 = games
  .filter((game) => game.publishingYear < 2000)
  .map((game) => game.name.toUpperCase())

console.log(uppercaseNamesBefore2000)
```
