const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

// mongodb
const mongoose = require("mongoose");
const TaskModel = require("./models.js/Task");
const UserModel = require("./models.js/User");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/task-together";
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/tasks", async (req, res) => {
  try {
    // Fetch Tasks from your MongoDB database

    const tasks = await TaskModel.find();
    // Send Tasks as JSON data
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching Tasks:", error);
    res.status(500).json({ error: "Unable to fetch Tasks" });
  }
});
app.post("/tasks/create", async (req, res) => {
  try {
    const input = req.body;
    const name = input.title;
    const description = input.description;
    const duration = parseInt(input.duration);
    const members = input.members;
    const newTask = new TaskModel({
      Name: name,
      Description: description,
      Duration: duration,
      startDate: Date.now(),
      ActiveMembers: members,
      isActive: true,
      isCompleted: false,
    });
    console.log("log from backend: ", newTask);
    await newTask.save().catch((err) => res.status(400).json("Error: " + err));
    console.log("log from backend: ", input);
  } catch (err) {
    console.log(err);
  }
  res.send("Task created");
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Task = await TaskModel.findById(id);

    if (!Task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(Task);
  } catch (error) {
    console.error("Error fetching Task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/tasks/:id/posts", (req, res) => {
  res.send("Task posts page");
});

app.get("/tasks/:id/dailyTasks", (req, res) => {
  res.send("Task actions page");
});

app.get("/tasks/:id/members", (req, res) => {
  res.send("Task members page");
});

// Tasks are not editable or deletable, so no need for edit and delete routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
