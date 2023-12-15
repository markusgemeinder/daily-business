// useState and useEffect are Hooks
import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://reqres.in/api/users';

// it's good to wrap all the request considerations
// in a function with its own name
async function getUsers() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // since the funciton passede to useEffect cannot be async,
    // we need this not so beautiful workaround:
    // - an async function called like you want
    // - that is called right away
    // - this way we can use await!
    async function run() {
      setLoading(true);
      const users = await getUsers();
      setUsers(users);
      setLoading(false);
    }
    run();
  }, []); // important: EMPTY dependence array!

  // This way we decide to display a loading message
  // if the request takes too long
  if (loading) {
    return 'Loading...';
  }

  return (
    <div className="app">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

function User({ first_name, last_name, avatar }) {
  return (
    <div className="box">
      <span>
        {first_name} {last_name}
      </span>
      <img src={avatar} alt={`${first_name} ${last_name}`} />
    </div>
  );
}
