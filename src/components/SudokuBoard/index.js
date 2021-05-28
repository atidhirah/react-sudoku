import React from "react";
import SudokuRegion from "./BoardElements/SudokuRegion";

const SudokuBoard = () => {
  let regionList = Array(9)
    .fill(0)
    .map((_, i) => {
      return (
        <li>
          <SudokuRegion id={`region-${i + 1}`} />
        </li>
      );
    });

  return (
    <div id="sudoku-board">
      <ul className="board-container">{regionList}</ul>
    </div>
  );
};

export default SudokuBoard;
