console.clear();

// Part 1: Password

// const SUPER_SECRET_PASSWORD = "h4x0r1337";
const SUPER_SECRET_PASSWORD = "password1234";

const receivedPassword = "password1234";

const passwordCheck = SUPER_SECRET_PASSWORD === receivedPassword;

if (passwordCheck) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

const number = 6;
const numberCheck = number % 2;

console.log(numberCheck);

if (numberCheck) {
  console.log("Odd number");
} else {
  console.log("Even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 2;

if (numberOfHotdogs >= 1000000) {
  console.log("0.10 EUR per hotdog");
} else if (numberOfHotdogs >= 100) {
  console.log("1 EUR per hotdog");
} else if (numberOfHotdogs >= 5) {
  console.log("1.50 EUR per hotdog");
} else {
  console.log("2 EUR per hotdog");
}

// && AND operator
// || OR operator

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Peter";

const greeting = name == "Peter" ? "Hello Coach!" : "Hello " + name + "!";

console.log(greeting);
