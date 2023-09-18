import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

import InputGroup from "react-bootstrap/InputGroup";
const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [member, setMember] = useState(""); // Input for a single member
  const [members, setMembers] = useState([]); // Array to store members

  const handleAddMember = () => {
    if (member.trim() !== "") {
      // Check if the member input is not empty
      setMembers([...members, member]); // Add the member to the array
      setMember(""); // Clear the member input field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, duration, members);
    const Task = { title, description, duration, members };
    axios.post("http://localhost:5000/Tasks/create", Task).then((res) => {
      console.log("log from frontend :", res.data);
      // Clear form fields after successful submission
      setTitle("");
      setDescription("");

      setMembers([]);
    });
  };
  return (
    <div className="add-Task-page text-container">
      <h1>Add Task</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDuration">
          <Form.Label>Duration</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <InputGroup.Text id="basic-addon2">days</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMembers">
          <Form.Label>Members</Form.Label>
          <div className="input-group">
            <Form.Control
              type="text"
              placeholder="Enter member"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
            <Button variant="primary" onClick={handleAddMember}>
              Add Member
            </Button>
          </div>
          {/* Display added members */}
          <div className="added-members-container">
            {members.map((m, index) => (
              <div key={index} className="added-member">
                {m}
              </div>
            ))}
          </div>
        </Form.Group>

        <button className="btn btn-primary">Add Task</button>
      </Form>
    </div>
  );
};

export default CreateTaskForm;
