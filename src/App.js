import "./styles/index.scss";
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import { modeAction, mapAction } from "./redux/actions/SudokuActions";
import SudokuReducer from "./redux/reducers/SudokuReducers";
import SudokuBoard from "./components/SudokuBoard";

const store = createStore(SudokuReducer);

const mapStateToProp = (state) => ({ sudokuState: state });
const mapDispatchToProps = (dispatch) => ({
  handleMode: (strMode) => {
    dispatch(modeAction(strMode));
  },
  handleMap: (strMap, pos, num) => {
    dispatch(mapAction(strMap, pos, num));
  },
});

const Container = connect(mapStateToProp, mapDispatchToProps)(SudokuBoard);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SUDOKU</h1>
          <Container />
        </div>
      </Provider>
    );
  }
}

export default App;
