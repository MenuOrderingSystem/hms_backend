const  FoodCategoryModel = require ('../models/Category')

exports.getAllCategory = async(req, res) => {
  try{
      const getAllCategory = await FoodCategoryModel.find()
      res.status(200).json({success: true, getAllCategory})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

exports.postCategory = async (req, res) => {
    console.log(req.body)
try{
    const postCategory = new FoodCategoryModel(req.body)
    const savedCategory = await postCategory.save() 
    res.status(201).json({success: true, savedCategory})}
catch(e) {
    res.status(400).json({success: false, error: e.message})
}
}

exports.getCategoryById= async(req, res) => {
    const {id} = req.body
  try{
      const getCategoryById = await FoodCategoryModel.find({_id: id})
      res.status(200).json({success: true, getCategoryById})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

exports.deleteCategory = async(req, res) => {
    const {id} = req.body
  try{
      const deleteCategory = await FoodCategoryModel.remove({_id: id})
      res.status(200).json({success: true, deleteCategory})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}
