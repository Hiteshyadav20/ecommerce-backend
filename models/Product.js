import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String
});

export default mongoose.model("Product", ProductSchema);
