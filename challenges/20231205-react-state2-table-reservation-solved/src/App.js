import { useState } from "react";
import React from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncreasePeople() {
    if (people < 10) {
      setPeople(people + 1);
    }
  }

  function handleDecreasePeople() {
    if (people > 0) {
      setPeople(people - 1);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onIncreasePeople={handleIncreasePeople}
        onDecreasePeople={handleDecreasePeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
