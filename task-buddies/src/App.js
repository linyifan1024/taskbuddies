import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Task Buddies</h1>
        <Routes>
          <Route path="/" />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/create" element={<h1>Create Task</h1>} />
          <Route path="/tasks/:id" element={<h1>Task Detail</h1>} />
          <Route path="/tasks/:id/members" element={<h1>Task Members</h1>} />
        </Routes>
        <NavBar />
      </div>
      <Home />
    </BrowserRouter>
  );
}

export default App;
