import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe } = useSWR(`/api/recipes/${id}`);

  if (!recipe) {
    return <p>Loading...</p>; // Add loading indicator while data is being fetched
  }

  return (
    <>
      <h1>Recipe Details</h1>
      <p>
        <Link href="/">Back to All Recipes</Link>
      </p>
      <section>
        <h2>{recipe.title}</h2>
        <p>{recipe.directions.join(", ")}</p>
      </section>
    </>
  );
}
