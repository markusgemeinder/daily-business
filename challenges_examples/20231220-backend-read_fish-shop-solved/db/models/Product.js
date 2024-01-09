// ============================= MongoDB backend
// Setup schema (description of mongoose document structure)
// Important: check data structure before setting up schema!
// (Model delivers programming interface for interacting with the database)

import mongoose from "mongoose";
import Review from "./Review.js";

const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   currency: { type: String, required: true },
// });

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
