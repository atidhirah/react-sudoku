import {
  MODE,
  SELECTED_NODE,
  FILL_NODE,
  ERASER,
  MODAL,
  MAKE_GAME,
  NEW_GAME,
  SOLVE,
} from "./SudokuActions";
import Sudoku from "../controllers/Sudoku";

const sudoku = new Sudoku();
const emptyMap = Array(81).fill(".");

const defaultState = {
  mode: "answer", // ["answer", "notes", "makegame", "win"]
  solvedMap: [...emptyMap],
  starterMap: [...emptyMap],
  map: [...emptyMap],
  numberCount: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  selected: undefined,
  helper: [],
  prohibitedNum: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mistakes: 0,
  modalStatus: false,
  modalName: "", // ["", "makegame", "newgame", "unsolved", "solve"]
};

const sudokuReducer = (state = defaultState, action) => {
  let newState = { ...state };
  const { mode, solvedMap, starterMap, map, selected } = newState;

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
      if (mode === "notes") {
        newState.map[selected] = Array.isArray(map[selected])
          ? addOrRemoveNotes(map[selected], action.val)
          : [action.val];
      } else {
        let val = action.val;

        if (mode === "answer" && solvedMap[selected] !== val) {
          newState.mistakes += 1;
        }

        newState.map[selected] = val;
        newState.numberCount[val] += 1;
        newState.prohibitedNum = defaultState.prohibitedNum;
      }
      break;
    case ERASER:
      if (selected) {
        if (starterMap[selected] === "." && map[selected] !== ".") {
          if (Number.isInteger(map[selected])) {
            newState.numberCount[map[selected]] -= 1;
          }
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
      if (newState.mode !== "makegame") {
        newState = {
          ...defaultState,
          mode: "makegame",
          map: [...emptyMap],
        };
      } else {
        let solve = sudoku.solveGame(newState.map);
        if (solve) {
          newState = {
            ...defaultState,
            mode: "answer",
            solvedMap: [...solve],
            starterMap: [...newState.map],
            map: [...newState.map],
          };
        } else {
          newState.modalStatus = true;
          newState.modalName = "unsolved";
        }
      }
      break;
    case SOLVE:
      newState = {
        ...defaultState,
        mode: "win",
        solvedMap: [...solvedMap],
        starterMap: [...starterMap],
        map: [...solvedMap],
        numberCount: { 1: 9, 2: 9, 3: 9, 4: 9, 5: 9, 6: 9, 7: 9, 8: 9, 9: 9 },
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
        numberCount: { ...game.numberCount },
      };
  }

  if (newState.mistakes === 3) {
    newState.modalStatus = true;
    newState.modalName = "gameover";
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
