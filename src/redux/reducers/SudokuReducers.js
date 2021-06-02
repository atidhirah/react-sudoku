import { MODE, MAP, SELECTED_NODE } from "../actions/SudokuActions";
import Sudoku from "../../controllers/Sudoku";

const sudoku = new Sudoku();
const defaultState = {
  mode: "answer", // "answer" or "notes"
  map: [],
  selected: undefined,
  helper: [],
};

const addOrRemoveNote = (arrInput, val) => {
  let arr = [...arrInput];
  if (arr.includes(val)) {
    arr.splice(arr.indexOf(val), 1);
  } else {
    arr.push(val);
  }
  return arr;
};

const timerReducer = (state = defaultState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case MODE:
      newState.mode = newState.mode === "answer" ? "notes" : "answer";
      break;
    case MAP:
      const pos = newState.selected;
      const val = action.val;
      if (newState.mode === "answer" || val === ".") {
        newState.map[pos] = val;
      } else {
        let posValue = newState.map[pos];
        if (Array.isArray(posValue)) {
          newState.map[pos] = addOrRemoveNote(posValue, val);
        } else {
          newState.map[pos] = [val];
        }
      }
      break;
    case SELECTED_NODE:
      newState.selected = action.pos;
      newState.helper = sudoku.getHelperNodes(action.pos);
      break;
    default:
      let map = Array(81).fill(".");
      newState.map = map;
      newState.selected = 0;
      newState.helper = sudoku.getHelperNodes(0);
  }

  return newState;
};

export default timerReducer;
