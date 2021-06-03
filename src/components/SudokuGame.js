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
          modalName={this.props.sudokuState.modalName}
          handleMode={this.props.handleMode}
          handleMap={this.props.handleMap}
          handleModal={this.props.handleModal}
        />
        <Modals
          modalStatus={this.props.sudokuState.modalStatus}
          modalName={this.props.sudokuState.modalName}
          handleModal={this.props.handleModal}
        />
      </div>
    );
  }
}

export default SudokuGame;
