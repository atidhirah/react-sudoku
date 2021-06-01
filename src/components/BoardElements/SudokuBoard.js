import React, { Component } from "react";
import SudokuRegion from "./SudokuRegion";
import Sudoku from "../../controllers/Sudoku";

class SudokuBoard extends Component {
  render() {
    const sudoku = new Sudoku();
    const regionMap = sudoku.regionMap;
    const arrMap = this.props.sudokuState.map;
    const selectedVal = this.props.sudokuState.selected;

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
              arrPos={arrPos}
              arrVal={arrVal}
              selectedVal={selectedVal}
              handleSelect={this.props.handleSelect}
            />
          </li>
        );
      });

    return (
      <>
        <p>Mode : {this.props.sudokuState.mode}</p>
        <ul className="sudoku-board">{regionList}</ul>
      </>
    );
  }
}

export default SudokuBoard;
