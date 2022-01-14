import { useEffect, useState } from "react";
import Row from "./Row";

function Board() {
  const ARRAY_HEIGHT = 70;
  const ARRAY_WIDTH = 120;
  const temp = new Array(ARRAY_WIDTH).fill(null);
  const [grid, setGrid] = useState(
    temp.map((row) => randomArray(ARRAY_HEIGHT))
  );

  useEffect(() => {
    // Check whether a cell lives or dies
    function checkCells() {
      return grid.map((column, i) => {
        return column.map((cell, j) => {
          // Check how many of the cell's neighbors are alive
          let live = 0;
          // check top
          if (grid[i][j - 1]) live++;
          // check bottom
          if (grid[i][j + 1]) live++;
          // check left
          if (grid[i - 1] && grid[i - 1][j]) live++;
          // check right
          if (grid[i + 1] && grid[i + 1][j]) live++;
          // check top left diagonal
          if (grid[i - 1] && grid[i - 1][j - 1]) live++;
          // check bottom left diagonal
          if (grid[i + 1] && grid[i + 1][j - 1]) live++;
          // check top right diagonal
          if (grid[i - 1] && grid[i - 1][j + 1]) live++;
          // check bottom right diagonal
          if (grid[i + 1] && grid[i + 1][j + 1]) live++;

          // Any live cell with two or three live neighbours survives.
          // Any dead cell with three live neighbours becomes a live cell.
          // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
          if (cell && (live === 2 || live === 3)) return true;
          else if (!cell && live === 3) return true;
          else return false;
        });
      });
    }
    const interval = setInterval(() => {
      const newGrid = checkCells();
      setGrid(newGrid);
    }, 200);
    return () => clearInterval(interval);
  });

  function randomNum() {
    return Math.floor(Math.random() * 10);
  }

  function randomArray() {
    const arr = [];
    for (let i = 0; i < ARRAY_HEIGHT; i++) {
      arr.push(randomNum() > 5 ? true : false);
    }
    return arr;
  }

  return (
    <div className="board">
      {grid.map((row, i) => (
        <Row key={i} cells={row} />
      ))}
    </div>
  );
}

export default Board;
