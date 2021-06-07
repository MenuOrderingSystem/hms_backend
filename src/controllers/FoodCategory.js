const  FoodCategoryModel = require ('../models/FoodCategory')

const getAllCategory = async(req, res) => {
  try{
      const getAllCategory = await FoodCategoryModel.find()
      res.status(200).json({success: true, getAllCategory})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

const postCategory = async (req, res) => {
    console.log(req.body)
try{
    const postCategory = new FoodCategoryModel(req.body)
    const savedCategory = await postCategory.save() 
    res.status(201).json({success: true, savedCategory})}
catch(e) {
    res.status(400).json({success: false, error: e.message})
}
}

module.exports= {
    getAllCategory,
    postCategory
};