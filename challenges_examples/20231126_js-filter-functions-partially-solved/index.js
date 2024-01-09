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
