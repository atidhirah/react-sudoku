import React from "react";
import { BiEraser } from "react-icons/bi";

class SudokuConsole extends React.Component {
  render() {
    let numberButtons = this.numberButtons();
    let gameButtons = this.gameButtons();

    let mode = this.props.mode;
    mode = mode[0].toUpperCase() + mode.slice(1);
    mode = mode === "Answer" ? `Give ${mode}` : `Take ${mode}`;

    return (
      <div className="sudoku-console">
        <p className="console-mode">
          Mode : <span>{mode}</span>
        </p>
        <ul className="console-buttons">
          {numberButtons}
          {gameButtons}
        </ul>
      </div>
    );
  }

  numberButtons() {
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
      <>
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
      </>
    );
  }

  gameButtons() {
    let name = this.props.modalName;
    return (
      <>
        <li key="newGame" className="console-new-game">
          <button onClick={() => this.props.handleModal(true, name)}>
            New Game
          </button>
        </li>
        <li key="makeGame" className="console-make-game">
          <button onClick={() => this.props.handleModal(true, name)}>
            Make Own Game
          </button>
        </li>
        <li key="solve" className="console-solve">
          <button onClick={() => this.props.handleModal(true, name)}>
            Solve this pls
          </button>
        </li>
      </>
    );
  }
}

export default SudokuConsole;
