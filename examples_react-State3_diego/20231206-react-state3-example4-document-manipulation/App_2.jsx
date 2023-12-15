import { useState } from 'react';
import './App.css';

export default function App() {
  const [total, setTotal] = useState(3);

  function handleIncrement() {
    console.log('incremented a counter');
    // from here we can update the total
    setTotal(total + 1);
  }

  return (
    <div className="app">
      <p>Total count: {total}</p>
      <Counter value={2} onIncrement={handleIncrement} />
      <Counter value={1} onIncrement={handleIncrement} />
    </div>
  );
}

function Counter({ value = 0, onIncrement }) {
  const [count, setCount] = useState(value);

  function handleClick() {
    setCount(count + 1);
    onIncrement();
  }

  return (
    <div className="box">
      <span>Count: {count}</span>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
