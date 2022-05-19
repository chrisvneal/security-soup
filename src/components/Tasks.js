import React, { useState, useRef, useEffect } from "react";
// import { lazy } from "react/cjs/react.production.min";

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
    // const li = document.createElement("li");
    // console.log(<li>{text}</li>);

    return <li>{text}</li>;
  };

  // clear input field
  const clearInput = () => {
    setTextInput("");
  };

  const tasks = supTasks.map((task) => {
    return makeTaskListItem(task.title);
  });

  // console.log(tasks);

  const [taskItems, setTaskItems] = useState([...tasks]);

  // console.log("task items", taskItems);

  // insert task list items in array
  const insertTaskItem = (taskItem) => {
    // console.log(taskItem);
    // console.log(taskItem);
    setTaskItems([...taskItems, taskItem]);
    // console.log("task inserted");
  };

  const createTask = (task) => {
    // insert new list itemm into array
    // console.log(task);
    // console.log(makeTaskListItem(task));
    // console.log(task);
    insertTaskItem(makeTaskListItem(task));

    // append list items to list (show in task list)
    // placeItems();

    // clear the field
    // clearInput();
  };

  useEffect(() => {
    if (inputRef.current) {
      // console.dir(inputRef.current);
      // Press 'Enter' on input to enter task
      inputRef.current.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          // console.log(e.target.value);
          createTask(e.target.value);

          // const li = document.createElement("li");
          // li.append(e.target.value);
          // li.setAttribute("key", 34);
          // console.log(li);

          // hide task input
          // taskInput.current.classList.add("hidden");
        }
      });
    }
  });

  // console.log("task items: " + taskItems);
  // const taskInput = document.querySelector(".task-input");

  // appends each task to Tasks List
  const placeItems = () => {
    // console.log("List: " + listUl);
    taskItems.forEach((task) => {
      listUl.current.append(task);
    });
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

  // if (trashIconRef.current) {
  //   trashIconRef.current.addEventListener("click", () => {
  //     resetTasks();
  //     emptyList();
  //   });
  // }

  // store all tasks in list items
  // let taskItems = [];

  // toggle task input visibility
  const toggleTaskInput = () => {
    taskInput.current.classList.toggle("hidden");
  };

  // const taskList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  return (
    <section className="tasks">
      <h2>
        Tasks: <span className="task-count">{taskItems.length}</span>
      </h2>
      <div className="tasks-list">
        <ul ref={listUl}>{taskItems}</ul>
      </div>

      <div className="tasks-header">
        <div
          onClick={() => {
            toggleTaskInput();
            inputRef.current.focus();
          }}
          className="add-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
            alt=""
          />
        </div>
        <div ref={trashIconRef} className="trash-icon">
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
