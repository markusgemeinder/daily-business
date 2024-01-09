import React, { useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

import {
  GridSectionCard,
  StyledCard,
  StyledCardTitle,
  StyledTitle,
} from "../components/Card.styled.js";

import { PageContainer } from "../components/Page.styled.js";

export default function Homepage() {
  const { data } = useSWR("/api/recipes");

  useEffect(() => {
    if (data) {
      console.log("Data loaded:", data);
    }
  }, [data]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <PageContainer>
        <h1>Recipes</h1>
        <p>
          <Link href="/new">New Recipe</Link>
        </p>
        <h2>All Recipes</h2>
        <GridSectionCard>
          {data.map((recipe) => (
            <StyledCard href={`/recipes/${recipe._id}`}>
              <StyledCardTitle>
                <StyledTitle key={recipe._id}>{recipe.title}</StyledTitle>
              </StyledCardTitle>
              <Image
                src={recipe.image}
                width={240}
                height={240}
                alt={recipe.title}
                // objectFit="cover" // to crop the image
                // layout="responsive"
              />
            </StyledCard>
          ))}
        </GridSectionCard>
      </PageContainer>
    </>
  );
}
