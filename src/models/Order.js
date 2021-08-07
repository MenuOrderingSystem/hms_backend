const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    food: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "food",
          required: false,
        },
        quantity: {
          type: Number,
          required: false,
        },
      },
    ],

    order_no: {
      type: Number,
      required: false,
    },

    table_no: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
