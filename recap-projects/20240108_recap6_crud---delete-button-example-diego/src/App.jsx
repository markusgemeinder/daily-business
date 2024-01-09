import { useState } from 'react';
import './App.css';

// simulates an HTTP call
async function deleteEntry(id) {
  console.log('Deleting entry with id', id);
  return new Promise((resolve) => setTimeout(() => resolve(), 300));
}

export default function App() {
  const [entries, setEntries] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
  ]);

  function onToggle(id) {
    setEntries((prev) =>
      prev.map((x) => (x.id === id ? { ...x, selected: !x.selected } : x))
    );
  }

  async function handleDeleteSelected() {
    const idsToDelete = entries.filter((x) => x.selected).map((x) => x.id);

    console.log('Deleting', idsToDelete);
    await Promise.all(idsToDelete.map(deleteEntry));
    console.log('Done');

    setEntries((prev) => prev.filter((x) => !x.selected));
  }

  return (
    <div className="app">
      {entries.map(({ id, selected }) => (
        <Entry key={id} id={id} selected={selected} onToggle={onToggle} />
      ))}
      <button
        disabled={!entries.some((x) => x.selected)}
        onClick={handleDeleteSelected}
      >
        Delete Selected
      </button>
    </div>
  );
}

function Entry({ id, selected, onToggle }) {
  return (
    <div className={`box ${selected ? ' selected' : ''}`}>
      <span>{id}</span>
      <button onClick={() => onToggle(id)}>Toggle</button>
    </div>
  );
}
