import dbConnect from "../../../db/connect.js";
import Recipe from "../../../db/models/Recipe.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const recipe = await Recipe.findById(id);
      if (!recipe) {
        return response.status(404).json({ status: "Not Found" });
      }

      const decodedRecipe = {
        ...recipe._doc,
        image: decodeURIComponent(recipe.image),
      };

      response.status(200).json(decodedRecipe);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedRecipe = request.body;
      updatedRecipe.modified = new Date();
      updatedRecipe.image = encodeURIComponent(updatedRecipe.image);

      await Recipe.findByIdAndUpdate(id, updatedRecipe);
      response.status(200).json({ status: "Recipe successfully updated." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    await Recipe.findByIdAndDelete(id);
    response.status(200).json({ status: "Recipe successfully deleted." });
  }
}
