const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const FoodItemModel = require ('../models/Food')

exports.getAllFoods = async(req, res) => {
  try{
      const getAllFoods = await FoodItemModel.find()
      res.status(200).json({success: true, getAllFoods})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}
exports.getFoodById = async(req, res) => {
    const {id} = req.body
  try{
      const getFoodById = await FoodItemModel.find({_id: id})
      console.log(getFoodById.length)
      if(getFoodById.length ==0) {
        
         return res.status(401).json({success: false, msg: "No food found"})
      }
      return res.status(200).json({success: true, getFoodById})
  }
  catch(e) {
     return res.status(400).json({success: false, error: e.message})
  }
}

exports.postFood = async (req, res) => {
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

exports.deleteFood = async(req, res) => {
    const {id} = req.body
  try{
      const deleteFood = await FoodItemModel.remove({_id: id})
      res.status(200).json({success: true, deleteFood})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

exports.editFood = async(req, res) => {
    const id = req.params.id;

    try {
      const editFood = await Service.findByIdAndUpdate(
        {
          _id: id,
        },
        req.body
      );
      res.status(200).json({ success: true, editFood });
    } catch (err) {
      res.status(400).json({ success: false, err: err.message });
    }
}

