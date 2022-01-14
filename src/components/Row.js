import Cell from "./Cell";

function Row(props) {
  const cellElements = props.cells.map((cell, i) => <Cell key={i} on={cell} />);
  return <div className="row">{cellElements}</div>;
}

export default Row;
