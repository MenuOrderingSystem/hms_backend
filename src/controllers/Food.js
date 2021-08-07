const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const FoodItemModel = require ('../models/Food')
const { success, error, validation } = require("../helper/responseApi");
const { validationResult } = require("express-validator");

exports.getAllFoods = async(req, res) => {
  try{
      const getAllFoods = await FoodItemModel.find()
      res.status(201).json(success("successfully Fetched All Foods", getAllFoods, res.statusCode))
  }
  catch(e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
}


exports.getFoodById = async(req, res) => {
    const id = req.params.id

  try{
      const getFoodById = await FoodItemModel.findById(id)

      if(getFoodById == null) {
        return res.status(400).json(error("Food Not Found", res.statusCode));
      }

      res.status(200).json(success("Successfully Get Food By Id", getFoodById, res.statusCode));
  }
  catch(e) {
     return res.status(400).json({success: false, error: e.message})
  }
}



exports.deleteFood = async(req, res) => {
  const id = req.params.id
try{
    const deleteFood = await FoodItemModel.findByIdAndRemove(id)

    if(deleteFood == null) {
      return res.status(400).json(error("Food Not Found", res.statusCode));
    }

    res.status(200).json(success("Successfully Deleted Food", deleteFood, res.statusCode))
}
catch(e) {
    res.status(500).json(error(e.message, res.statusCode))
}
}





exports.postFood = async (req, res) => {


  const errors = validationResult(req);

  if(!errors.isEmpty()){
    if(req.file){
      fs.unlinkSync(req.file.path)
    }
      return res.status(422).json(validation(errors.array()))
  }
  
    try{

      const findFood = await FoodItemModel.find({name : req.body.name})

      if(findFood.length !== 0){
          return res.status(500).json(error("Food Already Present, Cannot post new One", res.statusCode));
      }

        await sharp(req.file.path)
            .resize(null, 300)
            .toFile(
              `${req.file.destination}/_${req.file.filename}`
                )
              
             fs.unlinkSync(req.file.path)

        const newFood = new FoodItemModel(req.body);

        newFood.image = `${req.file.destination}/_${req.file.filename}`;

        const savedFood = await newFood.save()

        res.status(200).json(success("Successfully Uploaded Food", savedFood, res.statusCode))
    }
    catch(e) {
        res.status(400).json({success: false, error: e.message})
    }
}


exports.editFood = async(req, res) => {

    const id = req.params.id;

    try {
      const editFood = await FoodItemModel.findByIdAndUpdate(
        {
          _id: id,
        },
        req.body,
        {new: true}
      );
      res.status(200).json(success("Successfully Uploaded Food", editFood, res.statusCode))
    } catch (err) {
      res.status(400).json({success: false, error: err.message})
    }
}

