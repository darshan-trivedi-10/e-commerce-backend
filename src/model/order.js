import mongoose from "mongoose";

const orderSchema = {
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'catalog',
    require: true,
  },
};

const order = mongoose.model("order", orderSchema);

export default order;
