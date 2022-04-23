import React from "react";
import Notes from "./components/Notes";

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
            <li>Matt Lowry</li>
            <li>Mike Jones</li>
            <li>Wendy Williams</li>
            <li>Clifford Smith</li>
            <li>Morgan Freeman</li>
            <li>Chris Xavier</li>
            <li>Cindi Domingo</li>
          </ul>
        </section>
        <section className="section-border">
          <h2>Site Stats</h2>
        </section>
        <section className="section-border">
          <h2>Random Topic Generator</h2>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
