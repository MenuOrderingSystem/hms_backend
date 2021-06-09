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

const getOrderById = async(req, res) => {
    const {id} = req.body
  try{
      const getOrderById = await OrderModel.find({_id: id})
      res.status(200).json({success: true, getOrderById})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

const deleteOrder = async(req, res) => {
    const {id} = req.body
  try{
      const deleteOrder = await OrderModel.remove({_id: id})
      res.status(200).json({success: true, deleteOrder})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}


module.exports= {
    getAllOrder,
    postOrder,
    getOrderById,
    deleteOrder
};