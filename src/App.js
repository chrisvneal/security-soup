import React from "react";
import Notes from "./components/Notes";
import Officers from "./components/Officers";
import Tasks from "./components/Tasks";
import SiteHeader from "./components/Site/SiteHeader";
import SiteFooter from "./components/Site/SiteFooter";
import SiteStatus from "./components/SiteStatus";
import RandomTopicGenerator from "./components/RandomTopicGenerator";
import { officers, supTasks } from "./data";

import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <main>
        <SiteStatus />
        <Officers officers={officers} />
        <Tasks tasks={supTasks} />

        <Notes />

        <RandomTopicGenerator />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
