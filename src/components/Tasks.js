import React from "react";

const Tasks = ({ tasks }) => {
  const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  return (
    <section className="tasks">
      <h2>
        Tasks: <span className="task-count">{tasks.length}</span>
      </h2>
      <ul className="tasks-list">{taskList}</ul>
    </section>
  );
};

export default Tasks;
