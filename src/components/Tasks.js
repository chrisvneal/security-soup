import React from "react";
import TaskInput from "./TaskInput";

const Tasks = () => {
  // store all tasks in list items
  // let taskItems = [];

  // toggle task input visibility
  const toggleTaskInput = () => {
    // taskInput.classList.toggle("hidden");
    console.log("input should be toggled");
  };

  // const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  return (
    <section className="tasks">
      <h2>
        Tasks: <span className="task-count">5</span>
      </h2>
      <div className="tasks-list">
        <ul></ul>
      </div>

      <div className="tasks-header">
        <div
          onClick={() => {
            toggleTaskInput();
            // focus on input
            document.querySelector(".task-input input").focus();
          }}
          className="add-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
            alt=""
          />
        </div>
        <div className="trash-icon">
          <img src="./images/delete.png" />
        </div>
      </div>

      <TaskInput />
    </section>
  );
};

export default Tasks;
