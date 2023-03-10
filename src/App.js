import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!!! </h1>
        <Weather city="London" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
