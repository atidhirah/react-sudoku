import React from "react";
import { BiEraser } from "react-icons/bi";

class SudokuConsole extends React.Component {
  render() {
    let mode = this.getMode();
    let numberButtons = this.numberButtons();
    let gameButtons = this.gameButtons();

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

  getMode() {
    let mode = this.props.mode;
    switch (mode) {
      case "win":
        return "You Win!";
      case "makegame":
        return "Make Game";
      case "notes":
        return "Take Notes";
      default:
        return "Give Answer";
    }
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

    let isMakeGame = this.props.mode === "makegame" ? true : false;
    return (
      <>
        <li
          key="toggle"
          className={isMakeGame ? "console-toggle disabled" : "console-toggle"}
        >
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
    const mode = this.props.mode;
    let isMakeGame = mode === "makegame" ? true : false;
    return (
      <>
        <li key="newGame" className="console-new-game">
          <button onClick={() => this.props.handleModal(true, "newgame")}>
            New Game
          </button>
        </li>
        <li key="makeGame" className="console-make-game">
          <button onClick={() => this.props.handleModal(true, "makegame")}>
            {isMakeGame ? "Done" : "Make Own Game"}
          </button>
        </li>
        <li key="solve" className="console-solve">
          <button
            className={isMakeGame ? "disabled" : ""}
            onClick={() => this.props.handleModal(true, "solve")}
          >
            Solve this pls
          </button>
        </li>
      </>
    );
  }
}

export default SudokuConsole;
