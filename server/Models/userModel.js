import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  age: Number,
  email: {
    type: String,
  },
  contact: Number,
});

const userModel = mongoose.model("User", userSchema);
userModel.init();
export { userModel };
