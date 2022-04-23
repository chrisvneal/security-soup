import React from "react";

const Tasks = ({ tasks }) => {
  const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  return <ul className="task-list">{taskList}</ul>;
};

export default Tasks;
