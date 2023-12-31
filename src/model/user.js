import mongoose from "mongoose";

const userSchema = {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    // 1 for seller, 2 for user
    type: Number,
    require: true,
  },
};

const user = mongoose.model("user", userSchema);

export default user;