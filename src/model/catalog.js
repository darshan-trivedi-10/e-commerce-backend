import mongoose from "mongoose";

const catalogSchema = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  catelog : {
    type : [Object]
  }
};

const catalog = mongoose.model("catalog", catalogSchema);

export default catalog;