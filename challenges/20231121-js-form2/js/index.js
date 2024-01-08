// TOS is short for Terms of Service. Here, the `alert()` in the submit event handler should only be called if the `tos` checkbox has been checked.

// > 💡 You can use an early `return;` in an if statement to prevent the `alert()` from being called.

// In addition, the error message below the checkbox should only be displayed if the checkbox is **not** checked. The message should disappear as soon as the user checks the checkbox - and it should reappear as soon as the user unchecks the checkbox. Use the given functions `showTosError()` and `hideTosError()`.

// Can you make the error message hidden initially (before the form is submitted)?

console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const formSent = document.querySelector('[data-js="form-sent"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const eventTarget = event.target;
  const formElements = event.target.elements;
  const checkPassed = formElements.tos.checked;

  // console.log(formElements.firstName.value);
  // console.log(formElements.tos.checked); // get checkbox value by `.checked`

  if (!checkPassed) {
    showTosError();
    return;
  }
  hideTosError();
  formSent.textContent = "Form submitted successfully!";
  // eventTarget.reset();
});

tosCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    hideTosError();
  }
  if (!event.target.checked) {
    showTosError();
    formSent.textContent = "";
  }
});

// --^-- write your code here --^--

// eslint-disable-next-line no-alert
// alert("Form submitted");
