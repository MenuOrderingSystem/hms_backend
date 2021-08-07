const FoodCategoryModel = require("../models/Category");
const { success, error, validation } = require("../helper/responseApi");
const { validationResult } = require("express-validator");

const sharp = require('sharp');
const fs = require('fs');

exports.getAllCategory = async (req, res) => {
  try {
    const getAllCategory = await FoodCategoryModel.find();
    res.status(201).json(success("Successfully Fetched Category", getAllCategory, res.statusCode));
  } catch (e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
};



exports.postCategory = async (req, res) => {


  const errors = validationResult(req);

  if(!errors.isEmpty()){

    console.log(errors)

    if(req.file){
      fs.unlinkSync(req.file.path)
    }
      
      return res.status(422).json(validation(errors.array()))
  }


  try {

       const findCategory = await FoodCategoryModel.find({name : req.body.name})

        if(findCategory.length !== 0){
            return res.status(500).json(error("Category Already Present, Cannot post new One", res.statusCode));
        }

        await sharp(req.file.path)
            .resize(null, 300)
            .toFile(
                 `${req.file.destination}/_${req.file.filename}`
                )            
             fs.unlinkSync(req.file.path)

        const newCategory = new FoodCategoryModel();
        newCategory.image = `${req.file.destination}/_${req.file.filename}`
        newCategory.name = req.body.name;

        const savedCategory = await newCategory.save();

        res.status(200).json(success("Successfully Uploaded Category", savedCategory, res.statusCode))

    
  } catch (e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
};



exports.getCategoryById = async (req, res) => {
  const id  = req.params.id;

  try {
    const getCategoryById = await FoodCategoryModel.findById(id);

    if(getCategoryById == null) {
        return res.status(400).json(error("Category Not Found", res.statusCode));
    }

    res.status(200).json(success("Successfully Get Category By Id", getCategoryById, res.statusCode));

  } catch (e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
};


exports.deleteCategory = async (req, res) => {
  const  id  = req.params.id;
  try{
    const deleteCategory = await  FoodCategoryModel.findByIdAndRemove(id)

    if(deleteCategory == null){
        return res.status(400).json(error("Category Not Found in Database", res.statusCode))
    }

    res.status(200).json(success("Successfully Deleted Category", deleteCategory, res.statusCode))
}catch(e){
    res.status(500).json(error(e.message, res.statusCode))
}
};
