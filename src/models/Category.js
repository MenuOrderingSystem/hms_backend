const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    
        name:{
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false

    },
   
}, {
    timestamps: true
})

const FoodCategoryModel = mongoose.model("category", categorySchema)

module.exports = FoodCategoryModel