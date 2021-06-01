import { connect } from "react-redux";
import {
  modeAction,
  mapAction,
  selectNodeAction,
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
});

export const Container = connect(
  mapStateToProp,
  mapDispatchToProps
)(SudokuGame);
