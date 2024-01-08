import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";

export default function Homepage() {
  const { data } = useSWR("/api/recipes");

  if (!data) {
    return <p>Loading...</p>; // Add loading indicator while data is being fetched
  }

  return (
    <>
      <h1>Recipes</h1>
      <p>
        <Link href="/new">New Recipe</Link>
      </p>
      <section>
        <h2>All Recipes</h2>
        <ul>
          {data.map((recipe) => (
            <li key={recipe._id}>
              <a href={`/recipes/${recipe._id}`}>
                <h3>{recipe.title}</h3>
              </a>
            </li>
          ))}
        </ul>
        <p>This is a list of the current recipes.</p>
      </section>
    </>
  );
}
