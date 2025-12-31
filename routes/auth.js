
import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    const exists=await User.findOne({email});
    if(exists) return res.status(400).json({msg:"User exists"});
    const hash=await bcrypt.hash(password,10);
    await User.create({name,email,password:hash});
    res.json({msg:"Registered"});
  } catch(e){res.status(500).json({error:e.message});}
});

router.post('/login', async(req,res)=>{
  try{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) return res.status(404).json({msg:"No user"});
    const ok=await bcrypt.compare(password,user.password);
    if(!ok) return res.status(400).json({msg:"Wrong password"});
    const token=jwt.sign({id:user._id}, process.env.JWT_SECRET);
    res.json({token});
  }catch(e){res.status(500).json({error:e.message});}
});

export default router;
