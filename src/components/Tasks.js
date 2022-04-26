import React from "react";
import TaskDetails from "./TaskDetails";

const Tasks = ({ tasks }) => {
  const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  return (
    <section className="tasks">
      <h2>Tasks</h2>
      <ul className="tasks-list">{taskList}</ul>
      <TaskDetails />
    </section>
  );
};

export default Tasks;
