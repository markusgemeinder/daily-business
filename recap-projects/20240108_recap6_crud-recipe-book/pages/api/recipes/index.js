import dbConnect from "../../../db/connect.js";
import Recipe from "../../../db/models/Recipe.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const recipes = await Recipe.find();
      const recipesWithDecodedImage = recipes.map((recipe) => ({
        ...recipe._doc,
        image: decodeURIComponent(recipe.image),
      }));

      return response.status(200).json(recipesWithDecodedImage);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (request.method === "POST") {
    try {
      const recipeData = request.body;

      recipeData.created = new Date();
      recipeData.image = encodeURIComponent(recipeData.image);

      const recipe = new Recipe(recipeData);
      await recipe.save();

      return response.status(201).json({ status: "Recipe created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
