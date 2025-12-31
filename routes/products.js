
import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();

router.post('/', async(req,res)=>{
  try{
    const p=await Product.create(req.body);
    res.json(p);
  }catch(e){res.status(500).json({error:e.message});}
});
router.get('/', async(req,res)=>{
  const p=await Product.find();
  res.json(p);
});
export default router;
