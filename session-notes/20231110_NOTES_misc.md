# CSS

## Structure

### Beispiel

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>HTML & CSS</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#" class="current">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h1>About</h1>
        <p class="text" id="welcome-text">
          Welcome to your basic practice website! Enjoy your stay!
        </p>
        <p class="text">
          This is a text element. It includes an
          <a href="/">internal link</a>.
        </p>
        <p class="text">
          This is another text element. It includes an
          <a href="https://developer.mozilla.org/de/" target="_blank"
            >external link</a
          >.
        </p>
        <p class="text text-note">This is a small note.</p>

        <ul class="list">
          <li>This is a list item</li>
          <li>
            This is a list item
            <ul class="list">
              <li>This is a nested list item</li>
              <li>This is a nested list item</li>
              <li>This is a nested list item</li>
            </ul>
          </li>
          <li>This is a list item</li>
        </ul>

        <p class="text">
          This is the last text element in the main content.There is also an
          <a href="/">internal link</a>.
        </p>

        <p class="text text-note">This is another small note.</p>
      </section>
    </main>
    <footer>
      <p class="text">
        This is a text element in the footer with a <a href="/">link</a>.
      </p>
    </footer>
  </body>
</html>
```

```cs

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* variable definition */

:root {
  --primary-color: dodgerblue;
  --accent-color: fuchsia;
  --default-spacing: 1rem;
  --large-spacing: 3rem;
}

body {
  margin: 0;
  font-family: system-ui;
}

main {
  background-color: var(--dodgerblue); /* use of variable */
}

section {
  margin: auto;
  padding: 5rem;
  margin: 0;
}

article {
  padding: 1rem;
}

header,
footer {
  background-color: #212f3c;
  padding: 1.5rem;
}

nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  padding: 0.5rem 1.5rem 0.5rem 0;
}

/* -------------------------------------------------------- */
/* The exercise starts here. */
/* -------------------------------------------------------- */

/* 1. These styles should apply to the headline */
h1 {
  /* outline: 2px dashed red; */
  font-size: 2rem;
  margin: 0 2rem 0 0;
  color: #2673bb;
}

/* 2. These styles should apply to all links */
a {
  /* outline: 2px dashed red; */
  color: #ff00e6;
}

/* 3. These styles should apply to all external links (you can use the attribute selector) */
a[href^="http"] {
  /* outline: 2px dashed red; */
  color: #ff8000;
}

/* 4. These styles should apply to all links in the main navigation */
header > nav {
  /* outline: 2px dashed red; */
  color: #ffffff;
  text-decoration: none;
}

/* 5. These styles should apply to the main navigation link corresponding to the current page */
.current {
  /* outline: 2px dashed red; */
  color: #22e781;
}

/* 6. These styles should apply to all links in the footer */
footer a {
  /* outline: 2px dashed red; */
  color: inherit;
}

/* 7. These styles should apply to all paragraphs and all lists (please use a class selector) */
.text,
.list {
  /* outline: 2px dashed red; */
  color: #2c3f3f;
}

/* 8. These styles should apply to all "notes" */
.text-note {
  /* outline: 2px dashed red; */
  font-size: 0.8em;
  color: #808080;
}

/* 9. These styles should apply to the welcome text */
#welcome-text {
  /* outline: 2px dashed red; */
  font-size: 1.2rem;
  color: #000000;
}

/* 10. These styles should apply to the paragraph in the footer */
footer .text {
  /* outline: 2px dashed red; */
  color: #ffffff;
}

/* 11. These styles should apply to all lists in the main content */
main .list {
  /* outline: 2px dashed red; */
  padding: 1rem 2rem;
  background: #caced2;
}

/* 12. These styles should apply to all list items */
li {
  /* outline: 2px dashed red; */
  margin: 0 0 0.5rem 0;
}

/* 13. These styles should apply to all nested lists */
.list .list {
  /* outline: 2px dashed red; */
  margin: 0.5rem 0 0 0;
  background-color: #f1f1f1;
}

/* 14. These styles should apply to all list items in nested lists */
.list .list li {
  /* outline: 2px dashed red; */
  margin: 0;
  color: #2673bb;
}

```

## @media

### Beispiel

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>HTML & CSS</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <main>
      <h1>Let's play!</h1>
      <section class="playground">
        <section class="section">
          <h3>Part 1</h3>
          <p>
            I have a fixed width. Can you replace my fixed width with a relative
            unit that changes according to the size of my parent element?
          </p>
          <div class="box box--one">🫐</div>
        </section>
        <section class="section">
          <h3>Part 2</h3>
          <p>
            I want my width to change to <strong>200px</strong> when the
            viewport is wider than 599px, and to <strong>400px</strong> when the
            viewport is wider than 1199px.
          </p>
          <div class="box box--two">🍏</div>
        </section>
        <section class="section">
          <h3>Part 3</h3>
          <p>I want to be <strong>flat</strong> in landscape mode.</p>
          <div class="box box--three">🍉</div>
        </section>
        <section class="section">
          <h3>Part 4</h3>
          <p>
            I want my background-color to change during
            <strong>dark mode</strong>.
          </p>
          <div class="box box--four">🥥</div>
        </section>

        <section class="section">
          <h3>Bonus (The &lt;picture&gt;-Element)</h3>
          <p>
            I want to automatically switch out images when the viewport width is
            above 599px and above 1199px. Take a look at the img folder -
            there's some material in there.
          </p>
          <div class="box box--five">
            <!-- Media picture element -->

            <picture>
              <source
                media="(min-width: 1200px)"
                srcset="./img/cat_large.jpg"
              />
              <source
                media="(min-width: 600px)"
                srcset="./img/cat_medium.jpg"
              />
              <img src="./img/cat_small.jpg" alt="A cat" />
            </picture>
          </div>
        </section>
      </section>
    </main>
  </body>
</html>
```

```cs
/* ==[ PLAYGROUND Challenge! ]== */

/* This challenge includes several smaller challenges and allows you to
play around with the concepts you've learned. Read the instructions
carefully. */

:root {
  /* Color Variables */

  --color-nemo: #ff4a11;
  --color-granite: #252629;
  --color-water-10: #f3f5f9;
  --color-foam: #ffffff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui;

  background-color: var(--color-foam);
}

h1 {
  font-size: 3rem;
  width: 80%;
  margin: 20px auto;
  color: var(--color-nemo);
  text-shadow: 4px 4px var(--color-granite);
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 20px;
  gap: 30px;

  width: 80%;
  min-height: 100vh;
}

.section {
  width: 100%;
  background-color: var(--color-water-10);
  padding: 20px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 5rem;
}

.box--one {
  background-color: lightblue;

  width: 100%;
  height: 100px;
}

.box--two {
  background-color: lightgreen;

  width: 100px;
  height: 100px;
}

@media (min-width: 600px) {
  .box--two {
    width: 200px;
  }
}

@media (min-width: 1200px) {
  .box--two {
    width: 400px;
  }
}

.box--three {
  background-color: lightpink;

  width: 50px;
  height: 250px;
}

@media (orientation: landscape) {
  .box--three {
    width: 100%;
    height: 50px;
  }
}

.box--four {
  background-color: lightgray;

  width: 100px;
  height: 100px;
}

@media (prefers-color-scheme: dark) {
  .box--four {
    background-color: yellow;
  }
}

.box--five {
  width: 100%;
}

.box--five img {
  width: 100%;
}
```

# JavaScript

## Vergleichsoperatoren / Kombination von Vergleichen

[Quelle](https://www.p5js.gym-wst.de/de/javascript/zuordnungevergleiche)

- In JavaScript ist ein einzelnes Gleichheitszeichen = ein Zuordnungsoperator, der einer Variablen einen Wert zuordnet.
- Wenn man eine Variable mit einem Wert vergleichen möchte, dann benutzt man zwei Gleichheitszeichen ==.
- Wenn man den Wahrheitswert true bekommen möchte, wenn eine Variable ungleich einem Wert ist, dann benutzt man den Operator != (ist nicht gleich).
- Mit JavaScript kann auch geprüft werden, ob eine Variable einen bestimmten Wert hat und ein bestimmter Datentyp ist. Dazu gibt es die Operatoren === (gleicher Wert und gleicher Datentyp) und !=== (ungleicher Wert oder ungleicher Datentyp).

### Logische Operatoren

Mit Hilfe von logischen Operatoren kann man Vergleiche kombinieren oder bewerten:

- Der logische Operator && (AND, UND) liefert true, wenn beide Vergleiche wahr sind, sonst false.
- Der logische Operator || (OR, ODER) liefert false, wenn beide Vergleiche falsch sind, sonst true.
- Der logische Operator ! (NOT, NICHT) liefert false, wenn der Vergleich wahr ist, sonst true.

Beispiele:

- (5 < 3) && (11 > 10) liefert false, weil der erste Vergleich falsch ist
- (5 > 3) && (10 < 11) liefert true, weil beide Vergleiche wahr sind
- (5 < 3) || (11 > 10) liefert true, weil einer der Vergleiche wahr ist
- (5 > 3) || (11 < 10) liefert false, weil beide Vergleiche falsch sind
- !(5 < 3) liefert true, weil der Vergleich falsch ist
- !(5 > 3) liefert false, weil der Vergleich wahr ist

Mit JavaScript kann man eine Zuordnung über einen Vergleich steuern:

- Beispiel: darfautofahren = (alter < 18) ? "Leider noch nicht!":"Ja klar!";
- Wenn der Vergleich (alter < 18) den Wert true liefert, wird der Variablen darfautofahren der Wert "Leider noch nicht!" zugeordnet, sonst der Wert "Ja klar!".

### Allgemein

#### Type Coersion

When you use an operator with a variable with an unfitting type, JavaScript will automatically convert (coerse) this variable into a fitting type. For example:

4 / "2"; // → 4 / 2

#### Beispiele

```js
const name = 'Peter'
const greeting = name == 'Peter' ? 'Hello Coach!' : 'Hello ' + name + '!'
console.log(greeting)
```

```js
const truthyOrFalsy = Boolean('false')
console.log('The expression is ' + truthyOrFalsy)
```

## JavaScript Functions

[Arrow Functions vs Regular Functions in JavaScript](https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/)

### Allgemeine Vorgehensweise (self-estimate test)

1. Prozess definieren
2. Testfälle console.log definieren
3. Code schreiben (else-Bedingung als Ausnahme!)

```js
// write a function called 'sayHello' that accepts two parameters: name and time.
//
// - if we pass no name, it should log "Good morning, Unknown"
// - if we pass a name, it should log "Good morning, {name}";
// - if time is greater than  12, it should log "Good afternoon, {name}"
//
function sayHello(name, time) {
  // your code
}

// test cases
sayHello()
sayHello('Jane')
sayHello('Jane', 14)
```

Beispielcode `function sayHello (name, time)` (Coach Diego):

```js
function sayHello(name, time) {
  if (!name) {
    console.log('Good morning Unknown')
    return
  }
  if (time > 12) {
    console.log('Good afternoon', name)
    return
  }
  console.log('Good morning', name)
}
```

Alternativcode `function sayHello (name, time)` (Kevin):

```js
function sayHello(name, time) {
  if (!name) {
    name = 'Unknown'
    // SUPER important: no return here!
    // because the code continues below, since we haven't logged anything yet
  }
  if (time > 12) {
    console.log('Good afternoon', name)
    return
  }
  console.log('Good morning', name)
}
```

Abkürzung `function sayHello (name, time)` (Coach Diego):

```js
// with default parameters
function sayHello(name = 'Unknown', time) {
  if (time > 12) {
    console.log('Good afternoon', name)
    return
  }
  console.log('Good morning', name)
}
```

Abkürzung "unlesbar" `function sayHello (name, time)` (Coach Diego):

```js
// with ternary operator and template strings
function sayHello(name = 'Unknown', time) {
  console.log(`Good ${time > 12 ? 'afternoon' : 'morning'} ${name}`)
}
```

### Rückgabe einer Variablen bzw. eines errechneten Wertes

```js
function add3Numbers(first, second, third) {
  const sum = first + second + third
  return sum
}

const firstSum = add3Numbers(1, 2, 3)
// the return value is stored in "firstSum", namely 6

const secondSum = add3Numbers(4, 123, 33)
// the return value is now stored in "secondSum", namely 160
```

### Überprüfung einer Zeichenlänge

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true
  } else {
    return false
  }
}
```

### Bedingtes Setzen einer Farbe

```js
function setBackgroundColor(color) {
	// first condition
	if(typeOf color !== 'String') {
		return;
	}

	// second condition
	if(!color.startsWith('#')) {
		return;
	}

	// third condition
	if(color.length < 7) {
		return;
	}

	// only if all 3 conditions are passed the final line of code is executed.
	body.style.backgroundColor = color;
}

```

oder einfacher:

```js
function setBackgroundColor(color) {
  if (typeof color === 'String') {
    if (color.startsWith('#')) {
      if (color.length >= 7) {
        document.body.style.backgroundColor = color
      }
    }
  }
}
```

### Arrow Functions

```js
const addNumbers = (first, second) => {
  return first + second
}
```

### Implizierte Return Statements

```js
const addOne = (number) => {
  return number + 1
}
```

```js
const addNumbers = (first, second) => {
  return first + second
}
```

Geschweifte Klammer und 'return' können weggelassen werden, wenn die Funktion nur aus einem Return Statement besteht:

```js
const addNumbers = (first, second) => first + second
```

### Callback Funktionen

Beispiel 'addEventListener':

```js
button.addEventListener('click', () => {
  console.log('Inside the callback function.')
})
```

- outer function: `addEventListener()`
- first argument: `'click'`
- second argument: callback function (here: _anonymous function_)

### Named Callback Functions

```js
function sayHello() {
  console.log('Hey Dude!')
}

button.addEventListener('click', sayHello)
```

### Parameters in Callback Functions

```js
button.addEventListener('click', (event) => {
  console.log('This button was clicked:', event.target)
})
```

### Code Snippets

#### Allgemein

```js
function isOddAndSmall(number) {
  if (number > 10) {
    return false
  }

  if (number % 2 === 0) {
    return false
  }
  return true
}

console.log(isOddAndSmall(4))
```

```js
const cleanInput = (string) => {
  return string.toLowerCase().trim()
}

console.log(cleanInput('RiesenClownNasenHausen'))
```

```js
const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5
}

console.log(getVectorLength(1, 2, 3))
```

```js
const getCurrentHour = () => {
  const now = new Date()
  const currentHour = now.getHours()
  if (currentHour === 0) {
    ;('12am')
  } else if (currentHour === 12) {
    ;('12pm')
  } else if (currentHour <= 11) {
    return currentHour + 'am'
  } else {
    return currentHour - 12 + 'pm'
  }
}

console.log(getCurrentHour())
```

#### Beispiel: Template

```js

```

```html

```

```cs

```

#### Beispiel: Tageszeitabhängige Displayanzeige (Farbe + Text)

```js
const display = document.querySelector('[data-js="display"]')

display.textContent = getGreeting()
document.body.style.backgroundColor = getDayColor()

function getGreeting() {
  const daytime = new Date().getHours()
  if (daytime >= 6 && daytime <= 12) return 'Good Morning'
  if (daytime >= 13 && daytime <= 18) return 'Good Afternoon'
  if (daytime >= 19 && daytime <= 22) return 'Good Evening'
  else return 'Good Night'
}

function getDayColor() {
  const weekday = new Date().getDay()
  // For testing:
  // const weekday = 1;

  if (weekday == 1) return 'darkgrey'
  if (weekday >= 2 && weekday <= 5) return 'lightblue'
  if (weekday >= 6 || weekday <= 0) return 'hotpink'
  // else return "hotpink";
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>HTML & CSS & JS</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <h1 data-js="display">Good Morning</h1>
  </body>
  <script src="./js/index.js"></script>
</html>
```

```cs
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui;
  display: grid;
  place-items: center;
  min-height: 100vh;
}

h1 {
  font-size: 42px;
  opacity: 0.7;
}
```

#### Beispiel: Simple Calculator

```js
console.clear()

// const operand1 = 12;
let operand1 = 18.5
const operand2 = 4

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]')
const subtractButton = document.querySelector('[data-js="subtract"]')
const multiplyButton = document.querySelector('[data-js="multiply"]')
const divideButton = document.querySelector('[data-js="divide"]')
const exponentButton = document.querySelector('[data-js="exponent"]')
const moduloButton = document.querySelector('[data-js="modulo"]')

addButton.addEventListener('click', () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.

  const result = operand1 + operand2
  console.log(`${operand1} + ${operand2} = ${result}`)
})

subtractButton.addEventListener('click', () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.

  const result = operand1 - operand2
  console.log(`${operand1} - ${operand2} = ${result}`)
})

multiplyButton.addEventListener('click', () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.

  const result = operand1 * operand2
  console.log(`${operand1} * ${operand2} = ${result}`)
})

divideButton.addEventListener('click', () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.

  const result = operand1 / operand2
  console.log(`${operand1} / ${operand2} = ${result}`)
})

exponentButton.addEventListener('click', () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.

  const result = operand1 ** operand2
  console.log(`${operand1} ** ${operand2} = ${result}`)
})

moduloButton.addEventListener('click', () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.

  const result = operand1 % operand2
  console.log(`${operand1} % ${operand2} = ${result}`)
})

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
)
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
)
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
)
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
)
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
)
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]')

increaseByOneButton.addEventListener('click', () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.

  operand1++
  console.log(operand1)
})

increaseByFiveButton.addEventListener('click', () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.

  operand1 += 5
  console.log(operand1)
})

decreaseByOneButton.addEventListener('click', () => {
  // 9. Decrease the value of "operand1" by 1. Log the new value to the console.

  operand1--
  console.log(operand1)
})

decreaseByFiveButton.addEventListener('click', () => {
  // 10. Decrease the value of "operand1" by 5. Log the new value to the console.

  operand1 -= 5
  console.log(operand1)
})

multiplyByTwoButton.addEventListener('click', () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.

  operand1 *= 2
  console.log(operand1)
})

divideByTwoButton.addEventListener('click', () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.

  operand1 /= 2
  console.log(operand1)
})
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="./css/styles.css" />
    <script src="./js/index.js" defer></script>
  </head>
  <body>
    <h1>Simple Calculator</h1>

    <h2>Mathematical operations</h2>
    <section class="mathematical-operations">
      <button type="button" class="button" data-js="add">+</button>
      <button type="button" class="button" data-js="subtract">-</button>
      <button type="button" class="button" data-js="multiply">x</button>
      <button type="button" class="button" data-js="divide">/</button>
      <button type="button" class="button" data-js="exponent">
        x<sup>y</sup>
      </button>
      <button type="button" class="button" data-js="modulo">mod</button>
    </section>

    <h2>Update the first operand</h2>
    <div class="update-operand">
      <button type="button" class="button" data-js="increase-by-one">
        Increase first operand by one
      </button>
      <button type="button" class="button" data-js="increase-by-five">
        Increase first operand by five
      </button>
      <button type="button" class="button" data-js="decrease-by-one">
        Decrease first operand by one
      </button>
      <button type="button" class="button" data-js="decrease-by-five">
        Decrease first operand by five
      </button>
      <button type="button" class="button" data-js="multiply-by-two">
        Multiply first operand by two
      </button>
      <button type="button" class="button" data-js="divide-by-two">
        Divide first operand by two
      </button>
    </div>
  </body>
</html>
```

```cs
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: system-ui;
}

.button {
  all: unset;
  background-color: rgb(255, 223, 105);
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(255, 187, 0);
}

.mathematical-operations {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 20rem;
}
.mathematical-operations > .button {
  width: 8.5rem;
}

.update-operand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
}
```

#### Beispiel: Button Funktionsweise

```js
console.clear()

const nextButton = document.querySelector('[data-js="next-button"]')
nextButton.addEventListener('click', () => {
  console.log('Go to next question')
})

const prevButton = document.querySelector('[data-js="prev-button"]')
prevButton.addEventListener('click', () => {
  console.log('Go to previous question')
})

const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]')
const secondChoiceButton = document.querySelector('[data-js="choice-button-2"]')

firstChoiceButton.addEventListener('click', () => {
  firstChoiceButton.classList.add('active-choice')
  secondChoiceButton.classList.remove('active-choice')
  console.log('Selected first choice')
})

secondChoiceButton.addEventListener('click', () => {
  firstChoiceButton.classList.remove('active-choice')
  secondChoiceButton.classList.add('active-choice')
  console.log('Selected second choice')
})
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Survey Error Fixing</title>
    <link rel="stylesheet" href="./css/styles.css" />
    <script src="./js/index.js" defer></script>
  </head>
  <body>
    <main class="app">
      <h1 class="header">Survey</h1>
      <section class="content">
        <h2 class="question">Do you think JavaScript is fun?</h2>
        <button type="button" class="choice-button" data-js="choice-button-1">
          Yes!
        </button>
        <button type="button" class="choice-button" data-js="choice-button-2">
          Absolutely!
        </button>
      </section>
      <div class="steps">
        <button type="button" class="steps-button" data-js="prev-button">
          Previous
        </button>
        <button
          type="button"
          class="steps-button"
          data-js="next-button"
          id="next"
        >
          Next
        </button>
      </div>
    </main>
  </body>
</html>
```

```cs
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(114, 208, 225);
  color: white;
}

.header {
  background-color: rgb(35, 154, 197);
  padding: 1rem;
  text-align: center;
  font-size: 1.8rem;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
}

.question {
  text-align: center;
  font-size: 2.5rem;
}

.choice-button {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgb(35, 154, 197);
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  color: white;
}

.active-choice {
  background-color: rgb(72, 181, 33);
}

.steps {
  background-color: rgb(35, 154, 197);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.steps-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgb(114, 208, 225);
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  color: white;
}
```

#### Beispiel: Teenager Age Check

```js
const input = document.querySelector('[data-js="age-input"]')
const button = document.querySelector('[data-js="age-button"]')
const output = document.querySelector('[data-js="age-output"]')

console.log(input)

button.addEventListener('click', () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value)

  if (age >= 18) {
    output.textContent = 'You are a teen!'
  } else {
    output.textContent = 'You are not a teen!'
  }
})
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Teenager check</title>
    <link rel="stylesheet" href="./css/styles.css" />
    <script src="./js/index.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Teenager check</h1>
    </header>
    <main>
      <h2>Challenge:</h2>
      <p>Open the index.js and make the button below work</p>
      <h2 id="teenager-check-heading">Check whether you are a teenager</h2>
      <form aria-labelledby="teenager-check-heading">
        <label for="age">Your age:</label>
        <input data-js="age-input" id="age" type="number" />
        <button data-js="age-button" type="button">Check age</button>
        <output data-js="age-output"
          >Whether you are a teen is currently unknown</output
        >
      </form>
    </main>
  </body>
</html>
```

```cs
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: system-ui;
}

form {
  display: grid;
  gap: 8px;
  max-width: 400px;
}
```

#### Beispiel: Buttons Dark Mode

```js
// console.clear();

const bodyElement = document.querySelector('[data-js="body"]')

bodyElement.classList.add('dark')

console.log(bodyElement)

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]')
const lightModeButton = document.querySelector('[data-js="light-mode-button"]')
const toggleButton = document.querySelector('[data-js="toggle-button"]')

darkModeButton.addEventListener('click', () => {
  bodyElement.classList.add('dark')
})

lightModeButton.addEventListener('click', () => {
  bodyElement.classList.remove('dark')
})

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark')
})
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>HTML & CSS & JS</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body data-js="body">
    <h1>Dark Mode Example</h1>
    <button class="button button--dark" data-js="dark-mode-button">
      Switch to dark Mode
    </button>
    <button class="button button--light" data-js="light-mode-button">
      Switch to light Mode
    </button>
    <button class="button button--toggle" data-js="toggle-button">
      Toggle Mode
    </button>
  </body>
  <script src="./js/index.js"></script>
</html>
```

```cs
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: #bac4c9;
  transition: 0.4s ease;
}

body.dark {
  background-color: rgb(50, 51, 58);
  color: white;
}

.button {
  padding: 14px 20px;
  border: none;
  border-radius: 14px;
  font-weight: bold;
  font-size: 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.button:hover {
  background-color: rgb(92, 159, 247);
}

.button--light {
  background-color: #bac4c9;
  color: black;
}

.button--dark {
  background-color: rgb(50, 51, 58);
  color: white;
}

.button--toggle {
  background-color: rgb(28, 117, 235);
  color: black;
}
```

#### Beispiel: Basic Buttons

```js
const mainElement = document.querySelector('[data-js="main"]')

// console.dir(mainElement);

mainElement.classList.add('dark')

const addColorButton = document.querySelector('[data-js="add-button"]')
const removeColorButton = document.querySelector('[data-js="remove-button"]')
const toggleColorButton = document.querySelector('[data-js="toggle-button"]')

addColorButton.addEventListener('click', () => {
  mainElement.classList.add('dark')
})

removeColorButton.addEventListener('click', () => {
  mainElement.classList.remove('dark')
})

toggleColorButton.addEventListener('click', () => {
  mainElement.classList.toggle('dark')
})
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/styles.css" />
    <script src="js/index.js" defer></script>
  </head>
  <body>
    <h1>Willkommen in der Welt der Buttons <span>🐍</span></h1>

    <main class="main" data-js="main">
      <!-- Javascript -->
      <p>
        Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer
        würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen
        Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt, wo er das
        Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte!
      </p>
      <button type="button" data-js="add-button">Add Color</button>
      <button type="button" data-js="remove-button">Remove Color</button>
      <button type="button" data-js="toggle-button">Toggle Color</button>
    </main>
  </body>
</html>
```

```cs
*,
*::before,
*::after {
  font-family: "Courier New", Courier, monospace;
  padding: 8px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: yellowgreen;
}

a {
  color: green;
  font-size: 1.5rem;
}

/* body.dark {
  background-color: darkgray;
} */

main.dark {
  background-color: darkolivegreen;
  color: lightgoldenrodyellow;
}

button {
  margin: 0 0 15px 0;
}
```

### String Properties and Methods

Strings in JavaScript have some build-in **properties** and functionalities called **methods**. You
can call them with the dot notation followed by the name of the property / method.

```js
'A normal string'.length // evaluates to 15
'A normal string'.toUpperCase() // evaluates to "A NORMAL STRING"
```

> 💡 Methods are functions, thus they need to be invoked by placing `()` brackets after the name of
> the method.

| Property / Method                   | Effect                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `.length`                           | returns the number of characters in a string.                            |
| `.toUpperCase()`                    | returns a all uppercase version of the string.                           |
| `.toLowerCase()`                    | returns a all lowercase version of the string.                           |
| `.trim()`                           | returns a string with all whitespace removed from the beginning and end. |
| `.replaceAll(oldString, newString)` | replaces all occurrences of `oldString` with the `newString`.            |
| `.startsWith(subString)`            | returns `true` if the string starts with subString.                      |
| `.endsWith(subString)`              | returns `true` if the string ends with subString.                        |
| `.includes(subString)`              | returns `true` if the string contains the subString.                     |

> 💡 Go to the
> [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_properties)
> for even more string methods.

---

### Input Fields

Every input field in HTML holds a **value** in form of a string. You can access the value by using
`.value` on the input Element:

```html
<form>
  <input data-js="textInput" type="text" value="test 123" />
  <input data-js="numberInput" type="number" value="42" />
</form>
```

```js
const textInput = document.querySelector('[data-js="textInput"]')
const numberInput = document.querySelector('[data-js="numberInput"]')

textInput.value // evaluates to 'test 123'
numberInput.value // evaluates to '42' (still a string!)
```

You can also change the value of the input by assigning a new value to this input property:

```js
textInput.value = 'changed value!'
```

This change is immediately visible on the website.

For example, you can enforce all uppercase letters in a form by combining this functionality with an
`input` event listener on the input element:

```js
// transform on every change the input value to uppercase letters
textInput.addEventListener('input', () => {
  const oldValue = textInput.value
  const newValue = oldValue.toUpperCase()
  textInput.value = newValue
})
```

#### Beispiel: Template

```js

```

```html

```

```cs

```
