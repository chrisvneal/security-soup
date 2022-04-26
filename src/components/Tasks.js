import React from "react";
import DetailedTasks from "./DetailedTasks";

const Tasks = ({ tasks }) => {
  const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  return (
    <>
      <section className="section-border tasks">
        <h2>Tasks</h2>
        <ul className="tasks-list">{taskList}</ul>
      </section>
      <DetailedTasks />
    </>
  );
};

export default Tasks;
