import React from "react";
import { BiEraser } from "react-icons/bi";

class SudokuConsole extends React.Component {
  render() {
    return (
      <div className="sudoku-console">
        <p className="console-mode">
          Mode : <span>{this.getModeText()}</span>
        </p>
        <ul className="console-buttons">
          {this.toggleModeButton()}
          {this.eraserButton()}
          {this.numberButtons()}
          {this.newGameButton()}
          {this.makeGameButton()}
          {this.solveGameButton()}
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
        <li key="numbers" className="console-numbers">
          <ul>{numberButtons}</ul>
        </li>
      </>
    );
  }

  toggleModeButton() {
    const mode = this.props.mode;
    let classToggleButton = "console-toggle";
    if (mode === "makegame" || mode === "win") classToggleButton += " disabled";

    return (
      <li key="toggle" className={classToggleButton}>
        <button onClick={() => this.props.handleMode()}>Toggle Mode</button>
      </li>
    );
  }

  eraserButton() {
    const mode = this.props.mode;
    const selected = this.props.selected;
    let classEraserButton = "console-eraser";
    if (mode === "win" || !selected) classEraserButton += " disabled";
    return (
      <li key="eraser" className={classEraserButton}>
        <button onClick={() => this.props.handleEraser()}>
          <BiEraser />
        </button>
      </li>
    );
  }

  newGameButton() {
    return (
      <li key="newGame" className="console-new-game">
        <button onClick={() => this.props.handleModal(true, "newgame")}>
          New Game
        </button>
      </li>
    );
  }

  makeGameButton() {
    const isMakeGame = this.props.mode === "makegame";
    return (
      <li key="makeGame" className="console-make-game">
        <button
          onClick={() =>
            isMakeGame
              ? this.props.handleMakeGame()
              : this.props.handleModal(true, "makegame")
          }
        >
          {isMakeGame ? "Done" : "Make Own Game"}
        </button>
      </li>
    );
  }

  solveGameButton() {
    const mode = this.props.mode;
    let classSolveButton = "";
    if (mode === "makegame" || mode === "win") classSolveButton = "disabled";

    return (
      <li key="solve" className="console-solve">
        <button
          className={classSolveButton}
          onClick={() => this.props.handleModal(true, "solve")}
        >
          Solve this pls
        </button>
      </li>
    );
  }
}

export default SudokuConsole;
