const FoodSubCategoryModel = require("../models/SubCategory")

const { success, error, validation } = require("../helper/responseApi");
const { validationResult } = require("express-validator");

const sharp = require('sharp');
const fs = require('fs');
const FoodCategoryModel = require("../models/Category");


exports.getAllSubCategory = async(req, res) =>{
    try {
        const getAllSubCategory = await FoodSubCategoryModel.find();
        console.log(getAllSubCategory)
        res.status(201).json(success("Successfully Fetched SubCategory", getAllSubCategory, res.statusCode));
      } catch (e) {
        res.status(500).json(error(e.message, res.statusCode));
      }
}


exports.postSubCategory = async(req,res) =>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        if(req.file){
            fs.unlinkSync(req.file.path)
          }
        return res.status(422).json(validation(errors.array()))
    }


    try{
            const findSubCategory = await FoodSubCategoryModel.find({name : req.body.name})

            if(findSubCategory.length !== 0){
                return res.status(500).json(error("SubCategory Already Present, Cannot post new One", res.statusCode));
            }

            await sharp(req.file.path)
            .resize(null, 300)
            .toFile(
                 `${req.file.destination}/_${req.file.filename}`
                )
             fs.unlinkSync(req.file.path)



            const newSubCategory = new FoodSubCategoryModel();
            newSubCategory.name = req.body.name;
            newSubCategory.image = `${req.file.destination}/_${req.file.filename}`
            newSubCategory.category = req.body.category

            const savedSubCategory = await newSubCategory.save();

            res.status(200).json(success("Successfully Uploaded SubCategory", savedSubCategory, res.statusCode))
      

    }catch(e){
        res.status(500).json(error(e.message, res.statusCode));
    }

}

exports.deleteSubCategory = async(req,res) =>{
    const  id  = req.params.id;
    try{
        const deleteSubCategory = await  FoodSubCategoryModel.findByIdAndRemove(id)

        if(deleteSubCategory == null){
            return res.status(400).json(error("SubCategory Not Found in Database", res.statusCode))
        }

        res.status(200).json(success("Successfully Deleted SubCategory", deleteSubCategory, res.statusCode))
    }catch(e){
        res.status(500).json(error(e.message, res.statusCode))
    }
}
