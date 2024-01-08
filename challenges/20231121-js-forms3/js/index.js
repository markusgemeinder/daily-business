// - Use the values of the `numberA` and `numberB` inputs to perform the operation selected by the `operator`
//  input on them. You can use the provided helper functions `add()`, `subtract()`, `multiply()` and `divide()`.
// - Assign the result to the `result` variable.

console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result = null;

  const eventTarget = event.target;
  const formElements = event.target.elements;
  const operatorValue = formElements.operator.value;
  const numberAValue = formElements.numberA.value;
  const numberBValue = formElements.numberB.value;

  // --v-- write your code here --v--
  if (numberAValue != "" && numberBValue != "") {
    if (operatorValue == "addition") {
      result = Number(numberAValue) + Number(numberBValue);
    }
    if (operatorValue == "subtraction") {
      result = Number(numberAValue) - Number(numberBValue);
    }
    if (operatorValue == "multiplication") {
      result = Number(numberAValue) * Number(numberBValue);
    }
    if (operatorValue == "division") {
      result = Number(numberAValue) / Number(numberBValue);
    }
    console.log(
      `numberA: ${numberAValue} | numberB: ${numberBValue} | operator: ${operatorValue} | result: ${result}`
    );
  }

  resultOutput.textContent = result;
  // resultOutput.textContent = "Number A and/or Number B not defined!";

  // --^-- write your code here --^--
});
