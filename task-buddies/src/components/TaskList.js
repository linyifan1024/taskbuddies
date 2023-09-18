import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import "../App.css";
import { Link } from "react-router-dom";
const TaskList = () => {
  const [Tasks, setTasks] = useState([]);
  useEffect(() => {
    // Make a GET request to fetch Tasks from your backend API
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:5000/tasks");
      console.log(response.data);
      setTasks(response.data);
    };
    fetchTasks();
  }, []);
  return (
    <div className="Task-list text-container">
      {Tasks.map((Task) => (
        <Card key={Task._id} className="Task-card">
          <Card.Body>
            <Card.Title>
              <Link to={`/Tasks/${Task._id}`}>{Task.Name}</Link>
            </Card.Title>
            <Card.Text>{Task.Description}</Card.Text>
            <Card.Text>
              Members:
              {Task.ActiveMembers.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </Card.Text>
            <Button variant="primary">Join</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
