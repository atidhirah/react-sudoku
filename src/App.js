import React from "react";
import SudokuBoard from "./components/SudokuBoard";

import "./styles/index.scss";

const App = () => {
  return (
    <div className="App">
      <h1>SUDOKU</h1>
      <SudokuBoard />
    </div>
  );
};

export default App;
