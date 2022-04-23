import React from "react";
import Notes from "./components/Notes";
import ListItems from "./components/ListItems";
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
          <ul>
            <ListItems items={supTasks} />
          </ul>
        </section>

        <Notes />

        <section className="section-border">
          <h2>Officers</h2>
          <ul>
            <ListItems items={officers} />
          </ul>
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
