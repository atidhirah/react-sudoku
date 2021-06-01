import React from "react";
import SudokuNode from "./SudokuNode";

class SudokuRegion extends React.Component {
  render() {
    const arrPos = this.props.arrPos;
    const arrVal = this.props.arrVal;
    const selectedVal = this.props.selectedVal;

    let nodeList = Array(9)
      .fill(0)
      .map((_, i) => {
        const isSelected = selectedVal === arrPos[i] ? true : false;
        return (
          <li key={arrPos[i]}>
            <SudokuNode
              pos={arrPos[i]}
              val={arrVal[i]}
              isSelected={isSelected}
              handleSelect={this.props.handleSelect}
            />
          </li>
        );
      });

    return <ul className="sudoku-region">{nodeList}</ul>;
  }
}

export default SudokuRegion;