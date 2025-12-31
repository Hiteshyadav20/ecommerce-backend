import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// get products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// add product (admin only — simple version)
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

export default router;
