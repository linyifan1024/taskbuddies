const tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "This is task 1",
    length: 7,
    days: {
      day1: "complete by user 1, 2",
      day2: "",
    },
    members: [{ username: "user1" }, { username: "user2" }],
    status: "incomplete",
    dueDate: "2021-10-01",
  },
  {
    id: 2,
    name: "Task 2",
    description: "This is task 2",
    members: [
      { username: "user1" },
      { username: "user2" },
      { username: "user3" },
    ],
    status: "incomplete",
    dueDate: "2021-10-02",
  },
];
function TaskList() {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Members:</p>
            <ul>
              {task.members.map((member, index) => (
                <li key={index}>{member.username}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
