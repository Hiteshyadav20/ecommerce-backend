
import express from 'express';
import Order from '../models/Order.js';
const router=express.Router();

router.post('/', async(req,res)=>{
  try{
    const order=await Order.create(req.body);
    res.json(order);
  }catch(e){res.status(500).json({error:e.message});}
});

router.get('/:id', async(req,res)=>{
  const order=await Order.findById(req.params.id);
  res.json(order);
});

export default router;
