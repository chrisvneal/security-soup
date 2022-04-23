import React from "react";
import Notes from "./components/Notes";
import ListItems from "./components/ListItems";

import "./styles.scss";

const officers = [
  {
    name: "Mike Lowrey",
    id: 1
  },
  {
    name: "Mike Jones",
    id: 2
  },
  {
    name: "Harriet Tubman",
    id: 3
  },
  {
    name: "Charles Xavier",
    id: 4
  },
  {
    name: "Pierre Sims",
    id: 5
  },
  {
    name: "Julio Corcino",
    id: 6
  }
];

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
            <li>Tell Morgan Freeman to sign paperwork</li>
            <li>Help Manager with New Hire Orientation</li>
            <li>Establish Training for next 1st Watch Shift</li>
            <li>Load PPE into back / Admin office with Manager</li>
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
