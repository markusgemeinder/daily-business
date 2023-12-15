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
  {
    name: "Paris",
    language: "French",
    country: "France",
    population: 2161000,
  },
  {
    name: "Rome",
    language: "Italian",
    country: "Italy",
    population: 2873000,
  },
  {
    name: "Madrid",
    language: "Spanish",
    country: "Spain",
    population: 3223000,
  },
];

// When the user inputs something in the field or changes the slider value,
// show the results in the corresponding <ul> (pay attention to the data-attribute!).

const inputText = document.querySelector('[data-js="input-text"]');
const inputRange = document.querySelector('[data-js="input-range"]');
const resultsPopulation = document.querySelector(
  '[data-js="results-population"]'
);

// Important: write the 'getCitiesByLanguage' and 'getCitiesWithMorePopulationThan' functions!

// ===== CREATING FUNCTIONS =====
// Step 0: define goal of function
// Step 1: pickup obj in const
// Step 2: define operation in const with fixed value
// Step 3a: add i.e. 'input' to the brackets of the function ('input1' = i.e. 'cities' and 'input2' = 'language')

// Step 3b: replace "fixed value" by 'input' (or 'input1', 'input2')

// ===== TESTING FUNCTIONS =====
// Step 4: log content of const result (log function(input))

function getCitiesByLanguage(input) {
  const result = cities.filter((item) => {
    return item.language === input;
  });
}
console.log(getCitiesByLanguage("Italian"));

function getCitiesWithMorePopulationThan(input) {
  const result = cities.filter((item) => {
    return item.population > Number(input);
  });
}
console.log(getCitiesWithMorePopulationThan(3000000));

// inputText.addEventListener("input", () => {
//   const languageInput = inputText.value;
//   const results = getCitiesByLanguage("German");
//   console.log(cityOutput);
//   resultsPopulation.textContent = languageInput;
// });

// inputRange.addEventListener("input", () => {
//   const populationInput = inputRange.value;
//   resultsPopulation.textContent = Number(populationInput);
// });

// ================= FIXED BACKUP BELOW THIS LINE ==================

// function getCitiesByLanguage(input) {
//   const result = cities.filter((item) => {
//     return item.language === input;
//   });
//   console.log(getCitiesByLanguage("Italian"));
// }

// function getCitiesWithMorePopulationThan(input) {
//   const result = cities.filter((item) => {
//     return item.population > Number(input);
//   });
//   console.log(getCitiesWithMorePopulationThan(3000000));
// }

// inputText.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   resultsPopulation.textContent = inputText.value;
// });

// inputRange.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   resultsPopulation.textContent = inputRange.value;
// });
