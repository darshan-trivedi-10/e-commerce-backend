import mongoose from "mongoose";

const catalogSchema = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  name : {
    type : String,
    require : true
  },
  price : {
    type : Number,
    require : true
  }
};

const catalog = mongoose.model("catalog", catalogSchema);

export default catalog;