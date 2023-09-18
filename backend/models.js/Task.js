const mongoose = require("mongoose");
const UserModel = require("./User");

// Define a schema for Task posts
const TaskPostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

// Define a schema for a daily Task
const dailyTaskSchema = new mongoose.Schema({
  dayNumber: {
    type: Number,
    required: true,
  },
  actions: [String], // Array to store user-inputted actions for the day
  posts: [TaskPostSchema], // An array of Task posts
});

// Define the main Task schema
const TaskSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
  Duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  ActiveMembers: [String],
  KickedOutMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  ],
  isActive: {
    type: Boolean,
  },
  isCompleted: {
    type: Boolean,
  },
  dailyTasks: [dailyTaskSchema], // An array of daily Tasks
});

// Define a pre-save hook to generate daily Tasks based on start and end date
TaskSchema.pre("save", async function (next) {
  const startDate = this.startDate; // Corrected variable name
  const duration = this.Duration; // Corrected variable name
  this.endDate = new Date(startDate.getTime() + duration * 24 * 60 * 60 * 1000);
  this.isActive = true;
  this.isCompleted = false;
  this.dailyTasks = [];

  console.log("log from pre save : ", this);
  // Generate daily Tasks for each day in the range
  for (let i = 0; i < duration; i++) {
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    this.dailyTasks.push({
      date,
      actions: [], // You can populate this array with default actions if needed
    });
  }

  next();
});
const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;
