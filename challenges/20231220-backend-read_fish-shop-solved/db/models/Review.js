// ============================= MongoDB backend
// Setup schema (description of mongoose document structure)
// Important: check data structure before setting up schema!
// (Model delivers programming interface for interacting with the database)

import mongoose from "mongoose";

// const { Schema } = mongoose;

const reviewSchema = new mongoose.Schema({
  title: String,
  text: String,
  rating: Number,
});

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   currency: { type: String, required: true },
// });

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
