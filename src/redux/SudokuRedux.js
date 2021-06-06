import { connect } from "react-redux";
import {
  modeAction,
  mapAction,
  selectNodeAction,
  modalAction,
  makeGameAction,
  newGameAction,
  solveAction,
} from "./actions/SudokuActions";
import SudokuGame from "../components/SudokuGame";

const mapStateToProp = (state) => ({ sudokuState: state });
const mapDispatchToProps = (dispatch) => ({
  handleMode: () => {
    dispatch(modeAction());
  },
  handleMap: (val) => {
    dispatch(mapAction(val));
  },
  selectNode: (pos) => {
    dispatch(selectNodeAction(pos));
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
