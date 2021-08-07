const  TypeModel = require ('../models/Type')
const { validationResult } = require("express-validator");
const {success, error, validation} = require('../helper/responseApi');

exports.postType = async(req,res) => {

    //validation 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json(validation(errors.array()))
    }

    const {type} = req.body;
    
    try{
        const newType = new TypeModel();
        newType.type = type;
        const savedType = await newType.save();
        res.status(200).json(success("Successfully Uploaded Type", savedType, res.statusCode))

    }catch(e){
        res.status(500).json(error(e.message, res.statusCode))
    }

}

exports.getAllType = async(req,res) => {
    try{

        const getType = await TypeModel.find();
        res.status(201).json(success("Successfully Fetched Types", getType, res.statusCode))

    }catch(e){
        res.status(500).json(error(e.message, res.statusCode))
    }
}

exports.deleteType = async(req, res) =>{

    const id = req.params.id;


    try{
        const deleteType = await  TypeModel.findByIdAndRemove(id)

        if(deleteType == null){
            return res.status(400).json(error("Type Not Found in Database", res.statusCode))
        }

        res.status(200).json(success("Successfully Deleted Type", deleteType, res.statusCode))
    }catch(e){
        res.status(500).json(error(e.message, res.statusCode))
    }
}

exports.modifyType = async(req, res) =>{

    const id = req.params.id;

    try{

        const editType = await TypeModel.findByIdAndUpdate(
            {
                _id : id
            },
            req.body,
            {new: true}
        );

        res.status(201).json(success("Successfully Updated Type", editType, res.statusCode))

    }catch(e){
        res.status(500).json(error(e.message, res.statusCode))
    }

}