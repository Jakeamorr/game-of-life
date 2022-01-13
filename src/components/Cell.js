function Cell(props) {
  const cellClasses = "cell".concat(props.on ? " alive" : "");
  // const cellClasses = "cell alive";
  return <div className={cellClasses}></div>;
}

export default Cell;
