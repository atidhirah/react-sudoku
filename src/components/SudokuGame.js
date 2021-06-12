import React from "react";
import SudokuBoard from "./BoardElements/SudokuBoard";
import SudokuConsole from "./ConsoleElements/SudokuConsole";
import Modals from "./Modals";

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
          selected={this.props.sudokuState.selected}
          prohibitedNum={this.props.sudokuState.prohibitedNum}
          modalName={this.props.sudokuState.modalName}
          handleMode={this.props.handleMode}
          handleMap={this.props.handleMap}
          handleEraser={this.props.handleEraser}
          handleModal={this.props.handleModal}
        />
        <Modals
          modalStatus={this.props.sudokuState.modalStatus}
          modalName={this.props.sudokuState.modalName}
          handleModal={this.props.handleModal}
          handleNewGame={this.props.handleNewGame}
          handleMakeGame={this.props.handleMakeGame}
          handleSolve={this.props.handleSolve}
        />
      </div>
    );
  }
}

export default SudokuGame;
