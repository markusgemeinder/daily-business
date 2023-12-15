import { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedID, setSelectedID] = useState(null);

  function handleSelect(id) {
    console.log('App:handleSelect', id);
    setSelectedID(id);
  }

  console.log('App', selectedID);

  return (
    <div className="app">
      <p>
        Selected ID: <strong>{selectedID}</strong>
      </p>
      <Dummy
        value="A"
        id={1}
        onSelect={handleSelect}
        selected={selectedID === 1}
      />
      <Dummy
        value="B"
        id={2}
        onSelect={handleSelect}
        selected={selectedID === 2}
      />
    </div>
  );
}

function Dummy({ value, id, onSelect, selected }) {
  function handleClick() {
    console.log('Dummy:handleClick', id);
    onSelect(id);
  }

  console.log('Dummy', id, selected);

  return (
    <div className={selected ? 'box selected' : 'box'}>
      <span>{value}</span>
      <button onClick={handleClick}>Select</button>
    </div>
  );
}
