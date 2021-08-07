const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: false
    },

    },{
        timestamps: true
    }
    )

    module.exports = mongoose.model("subCategory", subCategorySchema)