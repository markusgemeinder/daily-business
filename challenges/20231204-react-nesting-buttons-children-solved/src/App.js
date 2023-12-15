import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>No worries...</Button>
      <Button>... it doesn&apos;t hurt</Button>
      <Button>Did you understand?</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
