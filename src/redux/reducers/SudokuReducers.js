import {
  MODE,
  SELECTED_NODE,
  MAP,
  MODAL,
  MAKE_GAME,
  NEW_GAME,
  SOLVE,
} from "../actions/SudokuActions";
import Sudoku from "../../controllers/Sudoku";

const sudoku = new Sudoku();
const defaultState = {
  mode: "answer", // ["answer", "notes", "makegame", "win"]
  map: Array(81).fill("."),
  selected: undefined,
  helper: [],
  prohibitedNum: [],
  modalStatus: false,
  modalName: "", // ["", "makegame", "newgame", "solve"]
};

const timerReducer = (state = defaultState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case MODE:
      newState.mode = newState.mode === "answer" ? "notes" : "answer";
      break;
    case SELECTED_NODE:
      newState.selected = action.pos;
      newState.helper = sudoku.getHelperNodes(newState.map, action.pos);
      newState.prohibitedNum = sudoku.getProhibitedNum(
        newState.map,
        newState.helper,
        action.pos
      );
      break;
    case MAP:
      let [mode, pos, val] = [newState.mode, newState.selected, action.val];
      if (mode === "answer" || mode === "makegame" || val === ".") {
        newState.map[pos] = val.toString();
      } else {
        let posValue = newState.map[pos];
        newState.map[pos] = Array.isArray(posValue)
          ? addOrRemoveNotes(posValue, val)
          : [val];
      }
      break;
    case MODAL:
      newState.modalStatus = action.modalStatus;
      newState.modalName = action.modalName;
      break;
    case MAKE_GAME:
      newState = {
        ...defaultState,
        mode: "makegame",
        map: Array(81).fill("."),
      };
      break;
    case SOLVE:
      newState = {
        ...defaultState,
        mode: "win",
      };
      break;
    case NEW_GAME:
    default:
      let difficulty = action.difficulty ? action.difficulty : "easy";
      newState = {
        ...defaultState,
        map: sudoku.generateGame(difficulty),
      };
  }

  return newState;
};

const addOrRemoveNotes = (arrInput, val) => {
  let arr = [...arrInput];
  if (arr.includes(val)) {
    arr.splice(arr.indexOf(val), 1);
  } else {
    arr.push(val);
  }
  return arr;
};

export default timerReducer;
