import Chance from "chance";

const chance = new Chance();

// if the variable is added outside the function one random character is displayed and stays with each refresh
// if used inside the function on each refresh a new random character is displayed

// const character = {
//   prefix: chance.prefix(),
//   firstName: chance.first(),
//   lastName: chance.last(),
//   age: chance.age(),
//   twitterName: chance.twitter(),
//   geohash: chance.geohash(),
// };

export default function handler(request, response) {
  const character = {
    prefix: chance.prefix(),
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
