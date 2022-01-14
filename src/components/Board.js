import Row from "./Row";

// When starting a new game light all of the cells in a snake light pattern starting from the edges inward
function Board() {
  const ARRAY_SIZE = 90;
  const temp = new Array(ARRAY_SIZE).fill(null);
  const grid = temp.map((row) => randomArray(ARRAY_SIZE));

  function randomNum() {
    return Math.floor(Math.random() * 10);
  }

  function randomArray() {
    const arr = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      arr.push(randomNum() > 5 ? true : false);
    }
    return arr;
  }

  function checkNeighbors() {
    // Any live cell with two or three live neighbours survives.
    // Any dead cell with three live neighbours becomes a live cell.
    // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        let live = 0;
        if (j - 0 >= 0) live++;

        if (grid[i][j] && (live === 2 || live === 3)) return true;
        else if (!grid[i][j] && live === 3) return true;
        else return false;
      }
    }
  }
  const cells = grid.map((row, i) => <Row key={i} cells={row} />);
  return <div className="board">{cells}</div>;
}

export default Board;
