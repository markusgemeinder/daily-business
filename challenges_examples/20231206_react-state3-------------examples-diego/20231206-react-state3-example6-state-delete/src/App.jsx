import { useState } from 'react';
import data from './users.json';
import './App.css';

export default function App() {
  const [users, setUsers] = useState(data);

  function handleDelete(id) {
    console.log('App:handleDelete', id);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  function handleReset() {
    console.log('App:handleReset');
    setUsers(data);
  }

  return (
    <div className="app">
      <button onClick={handleReset}>Reset</button>
      {users.map((user) => (
        <User key={user.id} {...user} onDelete={handleDelete} />
      ))}
    </div>
  );
}

function User({ id, first_name, last_name, avatar, onDelete }) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="box">
      <span>
        {first_name} {last_name}
      </span>
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
