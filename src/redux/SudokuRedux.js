import { connect } from "react-redux";
import {
  modeAction,
  fillNodeAction,
  selectNodeAction,
  eraserAction,
  modalAction,
  makeGameAction,
  newGameAction,
  solveAction,
} from "./SudokuActions";
import SudokuGame from "../components/SudokuGame";

const mapStateToProp = (state) => ({ sudokuState: state });
const mapDispatchToProps = (dispatch) => ({
  handleMode: () => {
    dispatch(modeAction());
  },
  handleMap: (val) => {
    dispatch(fillNodeAction(val));
  },
  selectNode: (pos) => {
    dispatch(selectNodeAction(pos));
  },
  handleEraser: () => {
    dispatch(eraserAction());
  },
  handleModal: (modalStatus, modalName) => {
    dispatch(modalAction(modalStatus, modalName));
  },
  handleNewGame: (difficulty) => {
    dispatch(newGameAction(difficulty));
  },
  handleMakeGame: () => {
    dispatch(makeGameAction());
  },
  handleSolve: () => {
    dispatch(solveAction());
  },
});

export const Container = connect(
  mapStateToProp,
  mapDispatchToProps
)(SudokuGame);
