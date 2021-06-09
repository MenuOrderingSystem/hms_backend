const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const FoodItemModel = require ('../models/FoodItem')

const getAllFoods = async(req, res) => {
  try{
      const getAllFoods = await FoodItemModel.find()
      res.status(200).json({success: true, getAllFoods})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}
const getFoodById = async(req, res) => {
    const {id} = req.body
  try{
      const getFoodById = await FoodItemModel.find({_id: id})
      res.status(200).json({success: true, getFoodById})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

const postFood = async (req, res) => {
    try{
        const { filename: image } = req.file;

        await sharp(req.file.path)
            .resize(200, 200)
            .toFile(
                 `${req.file.destination}/pic-${Date.now()}.jpg`
                )
              
             fs.unlinkSync(req.file.path)

        const postFood = new FoodItemModel();
        postFood.name = req.body.name;
        postFood.photo = req.file.path;
         const savedFood = await postFood.save()
        res.status(201).json({success: true, savedFood})
    }
    catch(e) {
        res.status(400).json({success: false, error: e.message})
    }
}

const deleteFood = async(req, res) => {
    const {id} = req.body
  try{
      const deleteFood = await FoodItemModel.remove({_id: id})
      res.status(200).json({success: true, deleteFood})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

module.exports= {
    getAllFoods,
    postFood,
    getFoodById,
    deleteFood
};