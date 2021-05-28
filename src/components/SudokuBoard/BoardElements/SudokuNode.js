import React from "react";

const SudokuNode = () => {
  let btnList = Array(9)
    .fill(0)
    .map((_, i) => {
      return (
        <li className="node-item">
          <button className="node-button">{i + 1}</button>
        </li>
      );
    });

  return <ul className="sudoku-node">{btnList}</ul>;
};

export default SudokuNode;
