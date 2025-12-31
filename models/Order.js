import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  amount: Number,
  paymentStatus: String,
  orderStatus: {
    type: String,
    default: "Placed" // Placed → Packed → Shipped → Delivered
  }
});

export default mongoose.model("Order", OrderSchema);
