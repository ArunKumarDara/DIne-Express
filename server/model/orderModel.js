const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    orderNo: {
      type: Number,
      required: true,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    deliverTo: {
      type: Schema.Types.ObjectId,
      ref: "address",
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Confirm",
        "Preparing",
        "Ready",
        "Completed",
        "Deliver",
        "Cancelled",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
