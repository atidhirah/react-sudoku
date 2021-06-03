import { connect } from "react-redux";
import {
  modeAction,
  mapAction,
  selectNodeAction,
  modalAction,
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
});

export const Container = connect(
  mapStateToProp,
  mapDispatchToProps
)(SudokuGame);
