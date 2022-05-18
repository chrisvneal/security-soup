import React, { useState, useRef } from "react";

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

const Tasks = () => {
  const listUl = useRef();
  const inputRef = useRef();
  const taskInput = useRef();
  const trashIconRef = useRef();

  const [textInput, setTextInput] = useState("");
  // put an <li></li> around each task string
  const makeTaskListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  };

  // clear input field
  const clearInput = () => {
    setTextInput("");
  };

  const [taskItems, setTaskItems] = useState(() => {
    return supTasks.map((task) => {
      makeTaskListItem(task.title);
    });
  });
  // const taskInput = document.querySelector(".task-input");

  // insert task list items in array
  const insertTaskItem = (taskItem) => {
    // taskItems.push(taskItem);

    setTaskItems(...taskItems, taskItem);
  };

  // appends each task to Tasks List
  const placeItems = () => {
    taskItems.forEach((task) => {
      listUl.append(task);
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

  // functions to reset task and empty the list
  const resetTasks = () => {
    // taskItems = [];
    setTaskItems([]);
  };

  // const emptyList = () => {
  //   Array.from(document.querySelectorAll(".task-list ul li")).forEach(
  //     (item) => {
  //       item.remove();
  //     }
  //   );
  // };

  if (inputRef.current) {
    // Press 'Enter' on input to enter task
    inputRef.current.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        createTask(e.target.value);

        // hide task input
        taskInput.current.classList.add("hidden");
      }
    });
  } else {
    console.log("Input element not found!");
  }

  if (trashIconRef.current) {
    trashIconRef.current.addEventListener("click", () => {
      resetTasks();
      emptyList();
    });
  }

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
        <ul ref={listUl}></ul>
      </div>

      <div className="tasks-header">
        <div
          onClick={() => {
            toggleTaskInput();
            // focus on input
            inputRef.current.focus();
          }}
          className="add-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
            alt=""
          />
        </div>
        <div ef={trashIconRef} className="trash-icon">
          <img src="./images/delete.png" />
        </div>
      </div>

      <div ref={taskInput} className="task-input hidden">
        <input
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          ref={inputRef}
          type="text"
          placeholder="Enter task ..."
          value={textInput}
        />
      </div>
    </section>
  );
};

export default Tasks;
