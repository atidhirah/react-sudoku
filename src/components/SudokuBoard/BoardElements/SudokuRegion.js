import React from "react";

import SudokuNode from "./SudokuNode";

const SudokuRegion = () => {
  let nodeList = Array(9)
    .fill(0)
    .map(() => {
      return (
        <li>
          <SudokuNode />
        </li>
      );
    });

  return <ul className="sudoku-region">{nodeList}</ul>;
};

export default SudokuRegion;
