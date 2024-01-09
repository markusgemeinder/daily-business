import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image.js";

import { PageContainer } from "../../components/Page.styled.js";
import {
  GridRecipeContainer,
  GridRecipeLeftColumn,
  GridRecipeRightColumn,
  StyledRecipeTitle,
  StyledRecipeSubtitle,
  StyledOrderedList,
  StyledUnorderedList,
} from "../../components/Recipe.styled.js";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe } = useSWR(`/api/recipes/${id}`);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <PageContainer>
        <h1>Recipe Details</h1>
        <p>
          <Link href="/">Back to All Recipes</Link>
        </p>
        <GridRecipeContainer>
          <GridRecipeLeftColumn>
            <StyledRecipeTitle>{recipe.title}</StyledRecipeTitle>
            <Image
              src={recipe.image}
              width={300}
              height={300}
              alt={recipe.title}
              // objectFit="cover" // crop the image
              // layout="responsive"
            />
          </GridRecipeLeftColumn>
          <GridRecipeRightColumn>
            {recipe.ingredients && (
              <>
                <StyledRecipeSubtitle>Zutaten</StyledRecipeSubtitle>
                <ul>
                  {recipe.ingredients.map((step, index) => (
                    <StyledUnorderedList key={index}>
                      {step}
                    </StyledUnorderedList>
                  ))}
                </ul>
              </>
            )}

            {recipe.directions && (
              <>
                <StyledRecipeSubtitle>Zubereitung</StyledRecipeSubtitle>
                <ol>
                  {recipe.directions.map((step, index) => (
                    <StyledOrderedList key={index}>{step}</StyledOrderedList>
                  ))}
                </ol>
              </>
            )}
          </GridRecipeRightColumn>
        </GridRecipeContainer>
      </PageContainer>
    </>
  );
}
