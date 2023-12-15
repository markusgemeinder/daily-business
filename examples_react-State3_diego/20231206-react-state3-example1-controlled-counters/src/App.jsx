import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState({
    adults: 3,
    children: 2,
    animals: 5,
  });

  function handleIncrement(name) {
    console.log('App:handleIncrement', name);
    const newCount = {
      ...count,
      [name]: count[name] + 1,
    };
    setCount(newCount);
  }

  return (
    <div className="app">
      <p>
        Total count:
        <strong>{count.adults + count.children + count.animals}</strong>
      </p>
      <Counter
        name="adults"
        value={count.adults}
        onIncrement={handleIncrement}
      />
      <Counter
        name="children"
        value={count.children}
        onIncrement={handleIncrement}
      />
      <Counter
        name="animals"
        value={count.animals}
        onIncrement={handleIncrement}
      />
    </div>
  );
}

// CONTROLLED component - value comes from outside
function Counter({ value = 0, onIncrement, name }) {
  function handleClick() {
    console.log('Counter:handleClick', name);
    onIncrement(name);
  }

  return (
    <div className="box">
      <span>Count: {value}</span>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
