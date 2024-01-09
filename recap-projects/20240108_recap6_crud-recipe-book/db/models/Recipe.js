import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
      minlength: [1, "Ingredients array must not be empty"],
    },
    directions: {
      type: [String],
      required: true,
      minlength: [1, "Directions array must not be empty"],
    },
  },
  { timestamps: true }
);

const Recipe = models?.Recipe || model("Recipe", recipeSchema);

export default Recipe;

// ============================ Original code with ingredients + directions = required
// export default Recipe;
// import mongoose from "mongoose";
// const { Schema, model, models } = mongoose;

// const recipeSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     ingredients: { type: Array, required: true },
//     directions: { type: Array, required: true },
//   },
//   // add other needed fields here
//   { timestamps: true }
// );

// const Recipe = models?.Recipe || model("Recipe", recipeSchema);

// export default Recipe;
