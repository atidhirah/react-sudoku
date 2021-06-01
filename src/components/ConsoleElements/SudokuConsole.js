import React from "react";

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
        <button onClick={() => this.props.handleMode()}>Switch mode</button>
        <ul className="console-numbers">{numberButtons}</ul>
      </div>
    );
  }
}

export default SudokuConsole;
