const express = require("express");
const app = express();
const port = 5000;

// mongodb
const mongoose = require("mongoose");
const TaskModel = require("./models.js/Task");
const UserModel = require("./models.js/User");
// const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/task-together";

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/tasks", (req, res) => {
  res.send("tasks page");
});
app.get("/tasks/create", (req, res) => {
  res.send("create task page");
});
app.get("/tasks/:id", (req, res) => {
  res.send("task detail page");
});
app.get("/tasks/:id/members", (req, res) => {
  res.send("task members page");
});

// tasks are not editable or deletable, so no need for edit and delete routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
