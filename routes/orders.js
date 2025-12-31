import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// place order
router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// track order
router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// update status (admin)
router.put("/:id/status", async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { orderStatus: req.body.status },
    { new: true }
  );
  res.json(order);
});

export default router;
