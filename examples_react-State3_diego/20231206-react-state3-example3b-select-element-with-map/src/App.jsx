import { useState } from 'react';
import data from './users.json';
import './App.css';

export default function App() {
  const [users, setUsers] = useState(data);

  function handleSelect(id) {
    console.log('App:handleSelect', id);
    setUsers(
      users.map((user) => ({
        ...user,
        selected: user.id === id,
      }))
    );
  }

  return (
    <div className="app">
      {users.map((user) => (
        <User
          key={user.id}
          {...user}
          onSelect={handleSelect}
          selected={user.selected}
        />
      ))}
    </div>
  );
}

function User({ id, first_name, last_name, avatar, onSelect, selected }) {
  console.log('User', id, selected);
  function onClick() {
    console.log('User:onClick', id);
    onSelect(id);
  }

  const className = selected ? 'box selected' : 'box';

  return (
    <div className={className}>
      <span>
        {first_name} {last_name}
      </span>
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <button onClick={onClick}>Select</button>
    </div>
  );
}
