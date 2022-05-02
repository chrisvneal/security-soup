import React from "react";
import Notes from "./components/Notes";
import Officers from "./components/Officers";
import Tasks from "./components/Tasks";
import SiteHeader from "./components/Site/SiteHeader";
import SiteFooter from "./components/Site/SiteFooter";
import SiteStatus from "./components/SiteStatus";
import SecurityTopicGenerator from "./components/SecurityTopicGenerator";
import { officers, supTasks } from "./data";

import "./sass/styles.scss";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <main>
        <SiteStatus />
        <Officers officers={officers} />
        <Tasks tasks={supTasks} />

        <Notes />

        <SecurityTopicGenerator />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
