import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskDetailPage = () => {
  const { id } = useParams();
  const [Task, setTask] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch the specific Task by ID from your backend API
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching Task:", error);
      }
    };
    fetchTask();
  }, [id]);

  // Render loading state while fetching data
  if (Task === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Task-detail-container text-container">
      <h1>{Task.Name}</h1>
      <p>Description: {Task.Description}</p>
      <p>Start Date: {Task.startDate}</p>
      <p>End Date: {Task.endDate}</p>
      <p>Members:</p>
      <ul>
        {Task.ActiveMembers.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDetailPage;
