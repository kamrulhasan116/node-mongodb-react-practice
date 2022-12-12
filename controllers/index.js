const express = require("express");
const router = express.Router();
const User = require("../models/index");

const getAllUsers = async(req, res) =>{
  
  try {
    const users = await User.find()

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message:"user not find"})
    
  }

};
const getOneUser = async(req, res)=>{
 try {
  const id = req.params.id;
  const oneUser = await User.findOne({_id:id});
  res.status(200).json(oneUser);
  
 } catch (error) {
  res.status(500).json({message:"user not found"})
 }
  
};

const deleteUser = async(req, res) =>{
 try {
  const id = req.params.id;
  await User.deleteOne({_id:id});
  res.status(200).json({message:"user is deleted sucessfully"})
 } catch (error) {
  res.status(500).json({message:"user not found"})
 }
}

const createUser = async(req, res)=>{
  try{
    const newUser = await new User({
        name:req.body.name,
        age:Number(req.body.age)

    });
    await newUser.save();
    res.status(200).json(newUser)
  }catch(error){
    res.status(500).send(error.message);
  }


};

const updateUser = async(req, res)=>{
  try{
    const id = req.params.id;
    const updatedUser = await User.findOne({_id:id});
    updatedUser.name=req.body.name,
    updatedUser.age=Number(req.body.age);
    await updatedUser.save();
    res.status(200).json({message:"update is successfull"})
  }catch(error){
    res.status(500).send(error.message);
  }


};
module.exports = {createUser, getAllUsers, getOneUser,deleteUser,updateUser};