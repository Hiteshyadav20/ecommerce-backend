import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import { MONGO_URL } from "./config.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// connect DB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Ecommerce backend is running!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
