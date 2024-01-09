// Log all form data (in object form) into the console in the submit event handler.

// Make sure the form is reset and the First Name input is focused after submission.

console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const eventTarget = event.target;
  console.log(eventTarget);
  const formData = new FormData(eventTarget);
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);
  eventTarget.reset();
  eventTarget.elements.firstName.focus();

  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );
});
