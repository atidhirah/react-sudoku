import React, { Component } from "react";
import SudokuRegion from "./SudokuRegion";
import Sudoku from "../controllers/Sudoku";
import { GoPrimitiveDot } from "react-icons/go";

class SudokuBoard extends Component {
  render() {
    return (
      <div className="sudoku-board-container">
        {this.renderMistakeDot()}
        {this.renderBoard()}
      </div>
    );
  }

  renderMistakeDot() {
    const m = this.props.sudokuState.mistakes;
    let d1 = m >= 1 ? <GoPrimitiveDot className="red" /> : <GoPrimitiveDot />;
    let d2 = m >= 2 ? <GoPrimitiveDot className="red" /> : <GoPrimitiveDot />;
    let d3 = m >= 3 ? <GoPrimitiveDot className="red" /> : <GoPrimitiveDot />;

    return (
      <p className="sudoku-mistake">
        {d1}
        {d2}
        {d3}
      </p>
    );
  }

  renderBoard() {
    const sudoku = new Sudoku();
    const regionMap = sudoku.regionMap;
    const { solvedMap, starterMap, map, helper, selected } =
      this.props.sudokuState;

    let regionList = Array(9)
      .fill(0)
      .map((_, i) => {
        const key = `region_${i + 1}`;
        const arrPos = regionMap[key];
        const arrSolved = arrPos.map((pos) => solvedMap[pos]);
        const arrStarter = arrPos.map((pos) => starterMap[pos]);
        const arrVal = arrPos.map((pos) => map[pos]);

        return (
          <li key={key}>
            <SudokuRegion
              id={key}
              arrPos={arrPos}
              arrSolved={arrSolved}
              arrStarter={arrStarter}
              arrVal={arrVal}
              arrHelper={helper}
              selectedVal={selected}
              handleSelect={this.props.handleSelect}
            />
          </li>
        );
      });
    return <ul className="sudoku-board">{regionList}</ul>;
  }
}

export default SudokuBoard;
