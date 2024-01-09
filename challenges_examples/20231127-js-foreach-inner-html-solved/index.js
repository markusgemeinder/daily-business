function getUsers() {
  return [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
  ];
}

const button = document.querySelector('[data-js="button"]');
const list = document.querySelector('[data-js="ul"]');

// button.addEventListener("click", async () => {

button.addEventListener("click", () => {
  // 1. call getUsers and save the users in a variable of your choice (hint: DON'T be creative!)
  const users = getUsers();
  // 2. loop over the users via forEach
  // console.log(users);
  renderUsers(users);

  // button.disabled = true;
});

button.addEventListener("click", () => {
  const users = getUsers();
  renderUsers(users);
});

function renderUsers(users) {
  console.log(users);
  users.forEach((user) => {
    // 3. in the loop, add an entry to the <ul> with the user first and last names
    // feel free to user innerHTML/dollars or createElement + append
    // 3b. feel free to display the user avatar and email as well
    // list.innerHTML += `<li>${user.first_name} ${user.last_name} | <a href="mailto:${user.email}">${user.email}</a> | <a href="${user.avatar}">Avatar</a> </li>`;
    list.innerHTML += `<li>${user.first_name} ${user.last_name} | <a href="mailto:${user.email}">${user.email}</a> <br/><br/> <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" /><br/><br/> </li>`;
  });
}
