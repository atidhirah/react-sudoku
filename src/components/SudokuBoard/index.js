import React from "react";
import SudokuRegion from "./BoardElements/SudokuRegion";
import Sudoku from "../../controllers/Sudoku";

class SudokuBoard extends React.Component {
  render() {
    const sudoku = new Sudoku();
    const regionMap = sudoku.regionMap;
    const arrMap = this.props.sudokuState.map;

    let regionList = Array(9)
      .fill(0)
      .map((_, i) => {
        const key = `region_${i + 1}`;
        const arrPos = regionMap[key];
        const arrVal = arrPos.map((pos) => arrMap[pos]);

        return (
          <li key={key}>
            <SudokuRegion
              id={key}
              arrMap={arrMap}
              arrPos={arrPos}
              arrVal={arrVal}
              handleMap={this.props.handleMap}
            />
          </li>
        );
      });

    return (
      <div id="sudoku-board">
        <ul className="board-container">{regionList}</ul>
      </div>
    );
  }
}

export default SudokuBoard;
