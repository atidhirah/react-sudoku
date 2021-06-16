import {
  MODE,
  SELECTED_NODE,
  FILL_NODE,
  ERASER,
  MODAL,
  MAKE_GAME,
  NEW_GAME,
  SOLVE,
} from "../actions/SudokuActions";
import Sudoku from "../../controllers/Sudoku";

const sudoku = new Sudoku();
const emptyMap = Array(81).fill(".");
const defaultState = {
  mode: "answer", // ["answer", "notes", "makegame", "win"]
  solvedMap: [],
  starterMap: [],
  map: [],
  selected: undefined,
  helper: [],
  prohibitedNum: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  modalStatus: false,
  modalName: "", // ["", "makegame", "newgame", "solve"]
};

const sudokuReducer = (state = defaultState, action) => {
  let newState = { ...state };
  const { mode, map, selected } = newState;

  switch (action.type) {
    case MODE:
      if (mode === "answer" || mode === "notes") {
        newState.mode = mode === "answer" ? "notes" : "answer";
      }
      break;
    case SELECTED_NODE:
      const helper = sudoku.getHelper(map, action.pos);
      newState.selected = action.pos;
      newState.helper = helper.helperNode;
      newState.prohibitedNum = helper.prohibitedNum;
      break;
    case FILL_NODE:
      sudoku.solveGame(newState.map);
      if (mode === "answer" || mode === "makegame") {
        newState.map[selected] = action.val;
        newState.prohibitedNum = defaultState.prohibitedNum;
      } else if (mode === "notes") {
        newState.map[selected] = Array.isArray(map[selected])
          ? addOrRemoveNotes(map[selected], action.val)
          : [action.val];
      }

      break;
    case ERASER:
      if (selected) {
        if (map[selected] !== ".") {
          newState.map[selected] = ".";
          const helper = sudoku.getHelper(newState.map, selected);
          newState.helper = helper.helperNode;
          newState.prohibitedNum = helper.prohibitedNum;
        } else {
          newState.selected = undefined;
          newState.helper = [];
          newState.prohibitedNum = defaultState.prohibitedNum;
        }
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
        solvedMap: emptyMap,
        map: emptyMap,
      };
      break;
    case SOLVE:
      newState = {
        ...defaultState,
        mode: "win",
        map: newState.solvedMap,
      };
      break;
    case NEW_GAME:
    default:
      let difficulty = action.difficulty ? action.difficulty : "easy";
      let game = sudoku.generateGame(difficulty);
      newState = {
        ...defaultState,
        solvedMap: [...game.solvedMap],
        starterMap: [...game.gameMap],
        map: [...game.gameMap],
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

export default sudokuReducer;
