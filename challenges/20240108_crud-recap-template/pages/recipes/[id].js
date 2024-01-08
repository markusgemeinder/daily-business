import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image.js";

import {
  GridContainer,
  GridLeftColumn,
  GridRightColumn,
  StyledRecipeTitle,
  StyledRecipeSubtitle,
  StyledOrderedList,
  StyledUnorderedList,
} from "../../components/Recipe.styled.js";

import { PageContainer } from "../../components/Card.styled.js";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe } = useSWR(`/api/recipes/${id}`);

  if (!recipe) {
    return <p>Loading...</p>; // Add loading indicator while data is being fetched
  }

  return (
    <>
      <PageContainer>
        <h1>Recipe Details</h1>
        <p>
          <Link href="/">Back to All Recipes</Link>
        </p>
        <GridContainer>
          <GridLeftColumn>
            <StyledRecipeTitle>{recipe.title}</StyledRecipeTitle>
            <Image
              src={recipe.image}
              width={360}
              height={360}
              alt={recipe.title}
              objectFit="cover" // Use objectFit to crop the image
              // layout="responsive"
            />
          </GridLeftColumn>
          <GridRightColumn>
            <StyledRecipeSubtitle>Zutaten</StyledRecipeSubtitle>
            <ul>
              {recipe.ingredients.map((step, index) => (
                <StyledUnorderedList key={index}>{step}</StyledUnorderedList>
              ))}
            </ul>

            <StyledRecipeSubtitle>Zubereitung</StyledRecipeSubtitle>
            <ol>
              {recipe.directions.map((step, index) => (
                <StyledOrderedList key={index}>{step}</StyledOrderedList>
              ))}
            </ol>
          </GridRightColumn>
        </GridContainer>
      </PageContainer>
    </>
  );
}
