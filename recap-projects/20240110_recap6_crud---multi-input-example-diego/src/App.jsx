// useState and useEffect are Hooks
import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  function onSubmit(data) {
    console.log('App:onSubmit', data);
  }
  return (
    <div className="app">
      <FancyForm onSubmit={onSubmit} />
    </div>
  );
}

function FancyForm({ onSubmit }) {
  const [friends, setFriends] = useState([]);
  const [enemies, setEnemies] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    // we pass friends and enemies manually, and append the rest of the data at the end
    onSubmit({ friends, enemies, ...data });
  }

  return (
    <form onSubmit={handleSubmit} className="box">
      <h1>Multi-Field form example</h1>
      <label>
        Name <input name="name" required placeholder="Your Name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required placeholder="Your E-Mail" />
      </label>
      <fieldset>
        <legend>Friends</legend>
        <MultiInput onChange={(entries) => setFriends(entries)} />
      </fieldset>
      <fieldset>
        <legend>Enemies</legend>
        <MultiInput onChange={(entries) => setEnemies(entries)} />
      </fieldset>
      <button>Send</button>
    </form>
  );
}

function MultiInput({ onChange }) {
  // let's display an empty field by default
  const [entries, setEntries] = useState([{ value: '' }]);

  // whenever the local entries are modified,
  // notify the parent compo by calling onChange accordingly
  useEffect(() => {
    onChange(entries);
  }, [entries]);

  // update the index-th entry of the array with the input value
  function handleInput(value, index) {
    setEntries((prev) => prev.map((x, i) => (i === index ? { value } : x)));
  }

  // push a new empty field at the end of the current entries
  function handleAddEntry() {
    setEntries((prev) => [...prev, { value: '' }]);
  }

  // remove the index-th entry
  function handleRemoveEntry(index) {
    setEntries((prev) => prev.filter((x, i) => index !== i));
  }

  return (
    <div>
      {entries.map(({ value }, index) => (
        <div key={index}>
          <input
            required
            value={value}
            onInput={(event) => handleInput(event.target.value, index)}
          />
          <button type="button" onClick={() => handleRemoveEntry(index)}>
            &times;
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddEntry}>
        Add Entry
      </button>
    </div>
  );
}
