import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/create" element={<CreateTaskPage />} />
            <Route path="/tasks/:id" element={<TaskDetailPage />} />
            <Route path="/tasks/:id/members" element={<h1>Task Members</h1>} />
            <Route path="/mytasks" element={<h1>My Tasks</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
