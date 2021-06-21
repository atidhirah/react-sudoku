import React from "react";
import { BiEraser } from "react-icons/bi";

class SudokuConsole extends React.Component {
  render() {
    return (
      <div className="sudoku-console">
        <ul className="console-buttons">
          <li key="row1" className="console-row-1">
            <p className="console-mode">
              Mode : <span>{this.getModeText()}</span>
            </p>
            {this.toggleModeButton()}
            {this.eraserButton()}
          </li>
          <li key="row2" className="console-row-2">
            {this.numberButtons()}
          </li>
          <li key="row3" className="console-row-3">
            {this.newGameButton()}
            {this.makeGameButton()}
            {this.solveGameButton()}
          </li>
        </ul>
      </div>
    );
  }

  getModeText() {
    switch (this.props.mode) {
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
    const numberCount = this.props.numberCount;
    const prohibited = this.props.prohibitedNum;

    let numberButtons = Array(9)
      .fill(0)
      .map((_, i) => {
        let num = i + 1;
        let className = prohibited.includes(num)
          ? "console-number disabled"
          : "console-number";
        return (
          <li key={num} className={className}>
            <div className="console-number-count">{numberCount[num]}</div>
            <button onClick={() => this.props.handleMap(num)}>{num}</button>
          </li>
        );
      });

    return (
      <>
        <div className="console-numbers">
          <ul>{numberButtons}</ul>
        </div>
      </>
    );
  }

  toggleModeButton() {
    const mode = this.props.mode;
    let classToggleButton = "console-toggle";
    if (mode === "makegame" || mode === "win") classToggleButton += " disabled";

    return (
      <div className={classToggleButton}>
        <button onClick={() => this.props.handleMode()}>Toggle Mode</button>
      </div>
    );
  }

  eraserButton() {
    const mode = this.props.mode;
    const selected = this.props.selected;
    let classEraserButton = "console-eraser";
    if (mode === "win" || !selected) classEraserButton += " disabled";
    return (
      <div className={classEraserButton}>
        <button onClick={() => this.props.handleEraser()}>
          <BiEraser />
        </button>
      </div>
    );
  }

  newGameButton() {
    return (
      <div className="console-new-game">
        <button onClick={() => this.props.handleModal(true, "newgame")}>
          New Game
        </button>
      </div>
    );
  }

  makeGameButton() {
    const isMakeGame = this.props.mode === "makegame";
    return (
      <div className="console-make-game">
        <button
          onClick={() =>
            isMakeGame
              ? this.props.handleMakeGame()
              : this.props.handleModal(true, "makegame")
          }
        >
          {isMakeGame ? "Done" : "Make Own Game"}
        </button>
      </div>
    );
  }

  solveGameButton() {
    const mode = this.props.mode;
    let classSolveButton = "";
    if (mode === "makegame" || mode === "win") classSolveButton = "disabled";

    return (
      <div className="console-solve">
        <button
          className={classSolveButton}
          onClick={() => this.props.handleModal(true, "solve")}
        >
          Solve this pls
        </button>
      </div>
    );
  }
}

export default SudokuConsole;
