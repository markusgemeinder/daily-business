import dbConnect from "../../../db/connect.js";
import Recipe from "../../../db/models/Recipe.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const recipes = await Recipe.find();
    return response.status(200).json(recipes);
  }

  if (request.method === "POST") {
    try {
      const recipeData = request.body;
      console.log("Received recipeData:", recipeData);
      // Set the created and modified fields
      recipeData.created = new Date();
      recipeData.modified = new Date();
      const recipe = new Recipe(recipeData);
      await recipe.save();
      console.log("Saved recipe:", recipe);
      return response.status(201).json({ status: "Recipe created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
