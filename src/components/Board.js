import Cell from "./Cell";

function Board() {
  const ARRAY_SIZE = 100;
  const grid = new Array(ARRAY_SIZE);
  grid.fill(new Array(ARRAY_SIZE));

  // for (let i = 0; i < ARRAY_SIZE; i++) {
  //   for (let j = 0; j < ARRAY_SIZE; j++) {
  //     grid[i][j] = Math.floor(Math.random() * 100);
  //   }
  // }
  grid.forEach((row) => row.forEach((cell) => Math.floor(Math.random() * 100)));
  const cells = grid.map((row, i) => <Cell key={i} on={row[0] > 90} />);
  console.log(grid);
  // When starting a new game light all of the cells in a snake light pattern starting from the edges inward
  return <div className="board">{cells}</div>;
}

export default Board;
