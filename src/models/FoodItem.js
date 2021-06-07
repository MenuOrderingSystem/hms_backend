const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: false

    },

    photo: {
        type: Document,
        required: false
    },
    category: {
        type: Schema.Types.ObjectId,
        required: false

    },

    },{
        timestamps: true
    }
    )

    module.exports = mongoose.model("category", categorySchema)