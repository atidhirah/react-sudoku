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

    let mode = this.props.mode;
    mode = mode[0].toUpperCase() + mode.slice(1);
    mode = mode === "Answer" ? `Give ${mode}` : `Take ${mode}`;

    return (
      <div className="sudoku-console">
        <p className="console-mode">
          Mode : <span>{mode}</span>
        </p>
        <ul className="console-buttons">
          <li key="toggle" className="console-toggle">
            <button onClick={() => this.props.handleMode()}>Toggle Mode</button>
          </li>
          <li key="eraser" className="console-eraser">
            <button onClick={() => this.props.handleMap(".")}>
              <BiEraser />
            </button>
          </li>
          <li key="numbers" className="console-numbers">
            <ul>{numberButtons}</ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default SudokuConsole;
