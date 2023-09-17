const express = require("express");
const app = express();
const port = 5000;

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
