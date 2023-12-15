Notes (2023/11/29 + 30)

# Recap Project Rick And Morty

## Tasks

### 1. Character Card Component

For now you have only one hard coded character card for Rick Sanchez in your HTML. We want to create
them dynamically in our JavaScript.

- Write a function `CharacterCard` inside the `CharacterCard.js` file and export it.
- You can use `innerHTML` to generate the HTML of the card. Cut and paste the relevant HTML code of the card from the `index.html` and use it in your function.
- The following elements of the card need to be dynamic and change for each character:
  - the `src` of the image
  - the name of the character
  - the status, type and occurrences values
- HINT: go to the docs and look where you can find all the information in the character objects you
  will receive from the API.
- Think about which input parameter(s) this function will need.
- The function finally returns the created `li` HTML element.

#### Step: API structure checked

[API URL = "https://rickandmortyapi.com/api/character"](https://rickandmortyapi.com/documentation/#get-all-characters)

```js
// index.js

import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
```

```js
// CharacterCard.js

export function CharacterCard({ image, alt, name, status, type, episode }) {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  cardContainer.innerHTML += `<li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src="${image}"
        alt="${alt}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">${status}</dt>
        <dd class="card__info-description">Alive</dd>
        <dt class="card__info-title">${type}</dt>
        <dd class="card__info-description"></dd>
        <dt class="card__info-title">${episode.length}</dt>
        <dd class="card__info-description">51</dd>
      </dl>
    </div>
  </li>`;
}

console.log(CharacterCard);

// const button = document.querySelector("button");
// const list = document.querySelector("ul");

// button.addEventListener("click", onClick);
// button.addEventListener("click", async () => {
//    /// ..
// });

// async function onClick() {
//   const users = await getUsers();
//   list.innerHTML = "";
//   renderUsers(users);
//   button.disabled = true;
// }

// // ['a', 'b', 'c', 'd'].slice(0, 2) -> ['a', 'b']
// async function getUsers() {
//   const response = await fetch("https://reqres.in/api/users");
//   const json = await response.json();
//   return json.data;
// }

// function renderUsers(users) {
//   users.forEach((user) => {
//     list.innerHTML += `
// 		<li>
// 			<span>${user.first_name} ${user.last_name}</span>
// 			<img src=${user.avatar} alt="Picture of ${user.first_name}"/>
// 		</li>
// 		`;
//   });
// }
```

### Fetch the Data

Now we can fetch the character data from the API and generate our cards with it.

- Inside of the `index.js` create a function called `fetchCharacters`.
- Use your knowledge about fetching to get the first 20 characters from the API. You can find the
  correct API endpoint in the docs.
- Import the `CharacterCard` function.
- After successfully fetching the character data, use array methods to create an HTML card for each
  character and append it to the `cardContainer`.
- Make sure that the `cardContainer` is emptied every time new characters are fetched (HINT: you can
  use `innerHTML = ''` for that).
- Call the function inside the `index.js`. Now you should see 20 cards in your app.

```js
// index.js Stand Tag 1:

import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const json = await response.json();
  return json.results;
}
const characters = await fetchCharacters();

characters.forEach((character) => {
  CharacterCard(character);
});
```

### Pagination

Great Job! But we want to see not only 20 characters, we want all of them! So lets implement the
pagination.

- By adding the string `?page=<pageIndex>` to the end of the fetch URL, you can receive the
  respective page of characters.
- Use here the state variable `page` to keep track of the current page index.
- Inside of the `info` part of the received data you can find the max page count.
- Add an event listener on each of the next and prev buttons which do the following
  - it is prevented that the page index could go higher than the max page index or below 1
  - the page index is increased / decreased
  - the `fetchCharacters` function is called
- Update the pagination display each time characters are fetched to show the current page index and
  the current max page index.

### The Search Bar

Now we want even more functionality in our app. We want to find individual characters by typing
their name into the search bar.

- Create a 'submit' event listener on the search bar.
- Update the state variable `searchQuery` with the current text inside the search bar every time
  this event is triggered.
- Modify the fetch URL again by adding another url encoded attribute `name`: append
  `&name=<searchQuery>` to the url. If the search query is an empty string, it will be ignored by
  the API, so don't worry about that.
- Now trigger the function `fetchCharacters` whenever a submit event happens.

> 💡 You might run into some bugs at this point. Think about how the page and max page index might
> have to change when you start searching for only subsets of all characters.

### Extra: Refactoring your Code

You've done it: your app is working as expected. 🚀✨

However, we want to tidy up our code so that not everything is written in a single javascript file.

- The next and prev button as well as the pagination and the search bar are currently hard coded in
  the `index.html`. Remove the HTML code and generate them via JavaScript. Use the respective
  JavaScript component files for that.
- The component functions should be called `NavButton`, `NavPagination`, and `SearchBar`
  and should return the created elements.
- HINT: It is challenging to get the event listener functions right for these components. Use an
  extra input parameter `onClick` or `onSubmit` in your components.
- Use the create functions inside your `index.js` to generate the UI components. You'll need to
  specify the event listener callback functions here either as anonymous arrow functions or as named
  functions. Use them as the argument for `onClick` or `onSubmit`, respectively.
- Append the created components at the right places in your HTML. All container elements are already
  available in the `index.js`.

```

```

```

```
