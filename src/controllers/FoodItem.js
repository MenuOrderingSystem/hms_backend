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

const postFood = async (req, res) => {
    try{
        const { filename: image } = req.file;

        // await sharp(req.file.path)
        //     .resize(200*200)
        //     .jpeg({quality:90})
        //     .toFile(
        //         path.resolve(req.file.destination,'resized',image)
        //     )
        //         fs.unlinkSync(req.file.path)

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

module.exports= {
    getAllFoods,
    postFood
};