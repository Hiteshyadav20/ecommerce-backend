
import mongoose from 'mongoose';
const orderSchema=new mongoose.Schema({
  userId:String,
  items:Array,
  total:Number,
  status:{type:String, default:"Placed"}
});
export default mongoose.model("Order",orderSchema);
