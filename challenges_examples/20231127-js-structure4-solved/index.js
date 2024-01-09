console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

// And now it's your turn: delete the value null and write code such that the variables have a value corresponding to their name. Use the following methods to achieve this goal:

// Array.includes()
// Array.find()
// Array.findIndex()
// Array.sort()
// Array.some()
// Array.every()
// Array.reduce()
// Additionally, you will need:

// String.startsWith()
// String.endsWith()

// =========
const hippoExists = animalStrings.includes("hippo");
// =========

const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
// =========

const firstAnimalStartingWithLetterP = animalStrings.find((animalString) =>
  animalString.startsWith("p")
);
// =========

const indexOfGiraffe = animalStrings.findIndex((animalString) =>
  animalString.includes("giraffe")
);

// =========

const animalsSortedAlphabetically = animalStrings.slice().sort((a, b) => {
  const lowerCaseNameA = a.name.to;
  if (nameA < nameB) {
    return -1; // return-Wert positiv, wenn absteigende Sortierung
  }
  if (nameA > nameB) {
    return 1; // return-Wert negativ, wenn absteigende Sortierung
  }
  return 0;
});

// =========

const anyAnimalEndsWithLetterZ = animalStrings.some((animalString) =>
  animalString.endsWith("z")
);

// =========

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animalString) => animalString.length > 2
);

// ========= Option 1 ==========

const lengthOfAllAnimalStrings = animalStrings.map((animalString) => {
  return animalString.length;
});
console.log(lengthOfAllAnimalStrings);

// const sumOfAllAnimalCharacters = lengthOfAllAnimalStrings.reduce(
//   (a, b) => a + b
// );

// console.log(sumOfAllAnimalCharacters);

// ========= Option 2 ==========

const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => a + b).length;
console.log(sumOfAllAnimalCharacters);

// =========
export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
