import { useState, useEffect } from "react";

export default function List({ storedActivities }) {
  return (
    <>
      <ul>
        <li>Blablabla {storedActivities}</li>
        {/* {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))} */}
      </ul>
    </>
  );
}
