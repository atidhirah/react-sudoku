import React from "react";
import SudokuBoard from "./BoardElements/SudokuBoard";
import SudokuConsole from "./ConsoleElements/SudokuConsole";

class SudokuGame extends React.Component {
  render() {
    return (
      <div id="sudoku-game" className="sudoku-game">
        <SudokuBoard
          sudokuState={this.props.sudokuState}
          handleSelect={this.props.selectNode}
        />

        <SudokuConsole
          mode={this.props.sudokuState.mode}
          handleMode={this.props.handleMode}
          handleMap={this.props.handleMap}
        />
      </div>
    );
  }
}

export default SudokuGame;
