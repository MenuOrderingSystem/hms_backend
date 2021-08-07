const  OrderModel = require ('../models/Order')
const { success, error, validation } = require("../helper/responseApi");
const { validationResult } = require("express-validator");



exports.getAllOrder = async(req, res) => {
  try{
      const getAllOrder = await OrderModel.find()
      res.status(201).json(success("successfully Fetched All Orders", getAllOrder, res.statusCode))
  }
  catch(e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
}


exports.getOrderById = async(req, res) => {
    const id = req.params.id
  try{
      const getOrderById = await OrderModel.findById(id)

      if(getOrderById == null){
        return res.status(400).json(error("Order Not Found", res.statusCode));
      }

      res.status(200).json(success("Successfully Get Order By Id", getOrderById, res.statusCode));
  }
  catch(e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
}



exports.deleteOrder = async(req, res) => {
    
  try{
      const deleteOrder = await OrderModel.findOneAndDelete({table_no : req.body.table_no})

      if(deleteOrder == null) {
        return res.status(400).json(error("Order Not Found", res.statusCode));
      }

      res.status(200).json(success("Successfully Deleted Order By Id", deleteOrder, res.statusCode));
  }
  catch(e) {
    res.status(500).json(error(e.message, res.statusCode));
  }
}



exports.postOrder = async (req, res) => {


    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json(validation(errors.array()))
    }

        try{

            const postOrder = new OrderModel(req.body)
            
            const savedOrder = await postOrder.save() 

            res.status(200).json(success("Successfully Posted Order", savedOrder, res.statusCode));
        
        }
        catch(e) {
            res.status(500).json(error(e.message, res.statusCode));
        }
}





