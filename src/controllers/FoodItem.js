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
    console.log(req.body)
try{
    const postFood = new FoodItemModel(req.body)
    const savedFood = await postFood.save() 
    res.status(201).json({success: true, savedFood})}
catch(e) {
    res.status(400).json({success: false, error: e.message})
}
}

module.exports= {
    getAllFoods,
    postFood
};