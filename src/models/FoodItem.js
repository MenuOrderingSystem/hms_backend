const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false

    },

    photo: {
        type: String,
        required: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },

    price: {
        type: Number,
        required: false
    },

    rating: {
        type: Number,
        required: false
    }

    },{
        timestamps: true
    }
    )

    module.exports = mongoose.model("food", foodSchema)