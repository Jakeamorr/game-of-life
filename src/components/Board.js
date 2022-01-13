import Cell from "./Cell";

// When starting a new game light all of the cells in a snake light pattern starting from the edges inward
function Board() {
  const ARRAY_SIZE = 10;
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

  const cells = grid.map((row, i) => <Cell key={i} on={row[0]} />);
  return <div className="board">{cells}</div>;
}

export default Board;
