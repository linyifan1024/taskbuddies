const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true,
  },
  taskDescription: {
    type: String,
    required: true,
    trim: true,
  },
  taskStartDate: {
    type: Date,
    required: true,
  },
  taskEndDate: {
    type: Date,
    required: true,
  },
  taskDailyActions: {
    type: [String], // Assuming it's an array of strings
    required: true,
  },
  taskActive: {
    type: Boolean,
    required: true,
  },
  taskMembers: {
    type: [mongoose.Schema.Types.ObjectId], // Assuming it's an array of user IDs
    required: true,
  },
  taskPosts: {
    type: [
      {
        userId: mongoose.Schema.Types.ObjectId, // Assuming user ID
        content: String,
        timestamp: Date,
      },
    ],
    required: true,
  },
  taskKickedOutMembers: {
    type: [mongoose.Schema.Types.ObjectId], // Assuming user IDs
    required: true,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;
