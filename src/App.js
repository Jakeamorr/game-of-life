import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="app">
      <a
        href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
        target="_blank"
        rel="noreferrer"
        className="game-title"
      >
        Conway's Game of Life
      </a>
      <Board />
    </div>
  );
}

export default App;
