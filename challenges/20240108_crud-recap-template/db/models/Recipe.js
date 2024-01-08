import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    directions: { type: Array, required: true },
    ingredients: { type: Array, required: true },
  },
  // add other needed fields here
  { timestamps: true }
);

const Recipe = models?.Recipe || model("Recipe", recipeSchema);

export default Recipe;
