import React from "react";
import Notes from "./components/Notes";
import Officers from "./components/Officers";
import Tasks from "./components/Tasks";
import { officers, supTasks } from "./data";

import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Security Soup</h1>
      </header>
      <main>
        <section className="section-border">
          <h2>Tasks</h2>

          <Tasks tasks={supTasks} />
        </section>

        <Notes />

        <section className="section-border">
          <h2>Officers</h2>

          <Officers officers={officers} />
        </section>
        <section className="section-border">
          <h2>Site Stats</h2>
        </section>
        <section className="section-border">
          <h2>Random Topic Generator</h2>
          <button>Generate topic</button>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
