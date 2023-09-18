const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  joinedTasks: {
    type: [mongoose.Schema.Types.ObjectId], // Assuming it's an array of Task IDs
  },
  currentTaskId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming it's a single Task ID
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
