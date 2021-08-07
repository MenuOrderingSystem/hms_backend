const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
    type:{
        type: String,
        required: false
    }

    },{
        timestamps: true
    }
    )

    module.exports = mongoose.model("type", typeSchema)