import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Security Soup</h1>
      </header>
      <main>
        <section>
          <h2>Tasks</h2>
          <h2>Events</h2>
        </section>
        <section>
          <h2>Notes</h2>
        </section>
        <section>
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
        <section>
          <h2>Site Stats</h2>
        </section>
        <section>
          <h2>Random Topic Generator</h2>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
