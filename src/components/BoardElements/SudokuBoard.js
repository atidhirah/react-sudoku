import React, { Component } from "react";
import SudokuRegion from "./SudokuRegion";
import Sudoku from "../../controllers/Sudoku";

class SudokuBoard extends Component {
  render() {
    const sudoku = new Sudoku();
    const regionMap = sudoku.regionMap;
    const arrStarterMap = this.props.sudokuState.starterMap;
    const arrMap = this.props.sudokuState.map;
    const arrHelper = this.props.sudokuState.helper;
    const selectedVal = this.props.sudokuState.selected;

    let regionList = Array(9)
      .fill(0)
      .map((_, i) => {
        const key = `region_${i + 1}`;
        const arrPos = regionMap[key];
        const arrStarter = arrPos.map((pos) => arrStarterMap[pos]);
        const arrVal = arrPos.map((pos) => arrMap[pos]);

        return (
          <li key={key}>
            <SudokuRegion
              id={key}
              arrPos={arrPos}
              arrStarter={arrStarter}
              arrVal={arrVal}
              arrHelper={arrHelper}
              selectedVal={selectedVal}
              handleSelect={this.props.handleSelect}
            />
          </li>
        );
      });

    return (
      <div>
        <ul className="sudoku-board">{regionList}</ul>
      </div>
    );
  }
}

export default SudokuBoard;
