import { useState } from 'react';
import './App.css';

const initialNumbers = [7, 5, 99, 666];

export default function App() {
  const [numbers, setNumbers] = useState(initialNumbers);

  console.log('App', numbers);

  function onSubmit(event) {
    event.preventDefault();
    const newNumber = event.target.quantity.value;
    console.log('App:onSubmit', newNumber);
    setNumbers([...numbers, newNumber]);
    // see how numbers.push(newNumber) DOES NOT cause a re-render!
  }

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <label>
          Number
          <input type="number" name="quantity" required />
        </label>
        <button>Add</button>
      </form>
      {numbers.map((number) => (
        <div key={number} className="box">
          {number}
        </div>
      ))}
    </div>
  );
}
