import React from "react";
import SudokuNode from "./SudokuNode";

class SudokuRegion extends React.Component {
  render() {
    const arrPos = this.props.arrPos;
    const arrVal = this.props.arrVal;

    let nodeList = Array(9)
      .fill(0)
      .map((_, i) => {
        return (
          <li key={arrPos[i]}>
            <SudokuNode
              arrMap={this.props.arrMap}
              pos={arrPos[i]}
              val={arrVal[i]}
              handleMap={this.props.handleMap}
            />
          </li>
        );
      });

    return <ul className="sudoku-region">{nodeList}</ul>;
  }
}

export default SudokuRegion;
