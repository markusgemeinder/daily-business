// TODO: Check, warum bei POST/GET lange Texte nicht umgebrochen werden

// MultiPullInput Field

import React, { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import Image from "next/image";

import { PageContainer } from "../components/Page.styled.js";

export default function RecipeForm() {
  const { mutate } = useSWR("/api/recipes");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipeData = {
      title: formData.get("title"),
      image: formData.get("image"), // encoded in api
      ingredients: [
        formData.get("ingredients1"),
        formData.get("ingredients2"),
        formData.get("ingredients3"),
      ].filter(Boolean), // Filter out empty strings
      directions: [
        formData.get("directions1"),
        formData.get("directions2"),
        formData.get("directions3"),
      ].filter(Boolean), // Filter out empty strings
    };
    console.log("recipeData:", recipeData);
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    // resetFormState();
    event.target.reset();

    mutate();
  }

  return (
    <>
      <PageContainer>
        <h1>New Recipe</h1>
        <p>
          <Link href="/">All Recipes Overview</Link>
        </p>
        <form id="recipeForm" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" required />

          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <input
              type="text"
              className="ingredients"
              name="ingredients1"
              required
            />
            <input
              type="text"
              className="ingredients"
              name="ingredients2"
              required
            />
            <input
              type="text"
              className="ingredients"
              name="ingredients3"
              required
            />
          </div>

          <div>
            <label htmlFor="directions">Directions:</label>
            <input
              type="text"
              className="directions"
              name="directions1"
              required
            />
            <input
              type="text"
              className="directions"
              name="directions2"
              required
            />
            <input
              type="text"
              className="directions"
              name="directions3"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </PageContainer>
    </>
  );
}
