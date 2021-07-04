import React from "react";
import SudokuNode from "./SudokuNode";

class SudokuRegion extends React.Component {
  render() {
    const { arrPos, arrSolved, arrStarter, arrVal, arrHelper, selectedVal } =
      this.props;

    let nodeList = Array(9)
      .fill(0)
      .map((_, i) => {
        const isStarter = arrStarter[i] !== "." ? true : false;
        const isSelected = selectedVal === arrPos[i] ? true : false;
        const isHelper = arrHelper.includes(arrPos[i]) ? true : false;
        return (
          <li key={arrPos[i]}>
            <SudokuNode
              pos={arrPos[i]}
              solvedVal={arrSolved[i]}
              val={arrVal[i]}
              isStarter={isStarter}
              isSelected={isSelected}
              isHelper={isHelper}
              handleSelect={this.props.handleSelect}
            />
          </li>
        );
      });

    return <ul className="sudoku-region">{nodeList}</ul>;
  }
}

export default SudokuRegion;
