const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    food: [{
        type: mongoose.Schema.ObjectId,
        required: false
    }],

    table: {
        type: Number,
        required: false
    },

    description: {
        type: String,
        required: false

    },

    },{
        timestamps: true
    }
    )

    module.exports = mongoose.model("order", orderSchema)