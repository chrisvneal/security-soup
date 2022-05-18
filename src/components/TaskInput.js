import React, { useState } from "react";

const supTasks = [
  {
    title: "Tell Jim to sign paperwork",
    completed: false,
    id: 1,
  },
  {
    title: "Help Manager with New hire Orientation",
    completed: false,
    id: 2,
  },
  {
    title: "Establish Training for next 1st Watch Shift",
    completed: false,
    id: 3,
  },
  {
    title: "Load PPE into back / Admin office with Manager",
    completed: false,
    id: 4,
  },
];

const TaskInput = () => {
  // put an <li></li> around each task string
  const makeTaskListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  };

  const [taskItems, setTaskItems] = useState(() => {
    return supTasks.map((task) => {
      makeTaskListItem(task.title);
    });
  });
  const taskInput = document.querySelector(".task-input");

  // clear input field
  const clearInput = () => {
    document.querySelector("input").value = "";
  };

  // insert task list items in array
  const insertTaskItem = (taskItem) => {
    // taskItems.push(taskItem);

    setTaskItems(...taskItems, taskItem);
  };

  // appends each task to Tasks List
  const placeItems = () => {
    taskItems.forEach((task) => {
      document.querySelector(".task-list ul").append(task);
    });
  };

  const createTask = (task) => {
    // insert new list itemm into array
    insertTaskItem(makeTaskListItem(task));

    // append list items to list (show in task list)
    placeItems();

    // clear the field
    clearInput();
  };

  if (document.querySelector("input")) {
    // Press 'Enter' on input to enter task
    document.querySelector("input").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        createTask(e.target.value);

        // hide task input
        taskInput.classList.add("hidden");
      }
    });
  } else {
    console.log("There is no input element!");
  }

  // functions to reset task and empty the list
  const resetTasks = () => {
    // taskItems = [];
    setTaskItems([]);
  };

  const emptyList = () => {
    Array.from(document.querySelectorAll(".task-list ul li")).forEach(
      (item) => {
        item.remove();
      }
    );
  };

  if (document.querySelector(".trash-icon")) {
    document.querySelector(".trash-icon").addEventListener("click", () => {
      resetTasks();
      emptyList();
    });
  }

  return (
    <div className="task-input hidden">
      <input type="text" placeholder="Enter task ..." />
    </div>
  );
};

export default TaskInput;
