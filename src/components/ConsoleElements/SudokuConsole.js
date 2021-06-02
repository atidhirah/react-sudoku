import React from "react";
import { BiEraser } from "react-icons/bi";

class SudokuConsole extends React.Component {
  render() {
    let numberButtons = Array(9)
      .fill(0)
      .map((_, i) => {
        let num = i + 1;
        return (
          <li key={num} className="console-number">
            <button onClick={() => this.props.handleMap(num)}>{num}</button>
          </li>
        );
      });

    return (
      <div className="sudoku-console">
        <ul className="console-buttons">
          <button
            className="console-switch"
            onClick={() => this.props.handleMode()}
          >
            Change mode
          </button>
          {numberButtons}
          <button
            className="console-eraser"
            onClick={() => this.props.handleMap(".")}
          >
            <BiEraser />
          </button>
        </ul>
      </div>
    );
  }
}

export default SudokuConsole;
