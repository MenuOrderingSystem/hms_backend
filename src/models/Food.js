const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({
    name: {
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
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
        required: false
    },

    price: {
        type: Number,
        required: false
    },

    rating: {
        type: Number,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },

    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'type'
    },
    description: {
        type: String,
        required: false
    }

    },{
        timestamps: true
    }
    )

    module.exports = mongoose.model("food", foodSchema)