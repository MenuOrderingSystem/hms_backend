const  OrderModel = require ('../models/Order')

const getAllOrder = async(req, res) => {
  try{
      const getAllOrder = await OrderModel.find()
      res.status(200).json({success: true, getAllOrder})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

const postOrder = async (req, res) => {
    console.log(req.body)
try{
    const postOrder = new OrderModel(req.body)
    const savedOrder = await postOrder.save() 
    res.status(201).json({success: true, savedOrder})}
catch(e) {
    res.status(400).json({success: false, error: e.message})
}
}



module.exports= {
    getAllOrder,
    postOrder
};