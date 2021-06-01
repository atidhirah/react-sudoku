import "./styles/index.scss";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SudokuReducer from "./redux/reducers/SudokuReducers";
import { Container } from "./redux/SudokuRedux";

const store = createStore(SudokuReducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container />
        </div>
      </Provider>
    );
  }
}

export default App;
