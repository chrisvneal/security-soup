import React, { useState, useRef, useEffect } from "react";

const Tasks = () => {
  const listUl = useRef();
  const inputRef = useRef();
  const taskInput = useRef();
  const trashIconRef = useRef();

  const [textInput, setTextInput] = useState("");

  // put an <li></li> around each task string
  const makeTaskListItem = (text) => {
    let num = Math.floor(Math.random() * 3 + 10);
    let newNum = Math.floor(Math.random() * 60 + 13);

    return <li key={num * newNum}>{text}</li>;
  };

  // clear input field
  const clearInput = () => setTextInput("");

  const [taskItems, setTaskItems] = useState([]);

  // insert task list items in array
  const insertTaskItem = (taskItem) => setTaskItems([...taskItems, taskItem]);

  const createTask = (task) => insertTaskItem(makeTaskListItem(task));

  useEffect(() => {
    if (inputRef.current) {
      // console.dir(inputRef.current);
      // Press 'Enter' on input to enter task
      inputRef.current.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          // console.log(e.target.value);
          createTask(e.target.value);

          // hide task input
          taskInput.current.classList.add("hidden");
        }
      });
    }

    return () => {
      clearInput();
    };
  }, [taskItems]);

  // functions to reset task and empty the list
  const resetTasks = () => {
    console.log("reset tasks");
    setTaskItems([]);
  };

  const emptyList = () => {
    Array.from(document.querySelectorAll(".task-list ul li")).forEach(
      (item) => {
        item.remove();
      }
    );
  };

  if (taskItems.length > 0) {
    trashIconRef.current.addEventListener("click", () => {
      // console.log("reset");
      resetTasks();
      emptyList();
    });
  }

  // toggle task input visibility
  const toggleTaskInput = () => {
    taskInput.current.classList.toggle("hidden");
  };

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
