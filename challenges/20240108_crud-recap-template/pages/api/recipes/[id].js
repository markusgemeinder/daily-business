import dbConnect from "../../../db/connect.js";
import Recipe from "../../../db/models/Recipe.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(recipe);
  }

  if (request.method === "PUT") {
    try {
      const updatedRecipe = request.body;
      // Set the modified field
      updatedRecipe.modified = new Date();
      await Todo.findByIdAndUpdate(id, updatedRecipe);
      response.status(200).json({ status: "Recipe successfully updated." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "DELETE") {
    // console.log("hit the delete part")
    await Todo.findByIdAndDelete(id);
    response.status(200).json({ status: "Recipe successfully deleted." });
  }
}
