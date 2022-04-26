import React from "react";
import Notes from "./components/Notes";
import Officers from "./components/Officers";
import Tasks from "./components/Tasks";
import SiteHeader from "./components/Site/SiteHeader";
import SiteFooter from "./components/Site/SiteFooter";
import SiteStatus from "./components/SiteStatus";
import { officers, supTasks } from "./data";

import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <main>
        <SiteStatus />
        <Tasks tasks={supTasks} />

        <Notes />

        <Officers officers={officers} />

        <section className="section-border">
          <h2>Random Topic Generator</h2>
          <button>Generate topic</button>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
