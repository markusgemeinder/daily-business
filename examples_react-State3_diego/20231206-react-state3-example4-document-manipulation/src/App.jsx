// useState and useEffect are Hooks
import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://reqres.in/api/users';

async function getUsers() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
}

export default function App() {
  const [messageCount, setMessageCount] = useState(0);
  // useEffect accepts 2 parameters:
  // 1. a function
  // 2. an array of variables (optional): Dependency Array
  //
  // useEffect manages "side-effects"
  // (things not directly related to JSX stuff)
  useEffect(() => {
    document.title = `Incoming messages: ${messageCount}`;
  }, [messageCount]);

  function handleClick() {
    setMessageCount(messageCount + 1);
  }

  return (
    <div className="app">
      <button onClick={handleClick}>Increment</button>
      <div className="box">{messageCount}</div>
    </div>
  );
}

// custom hook
function useTitle() {}
