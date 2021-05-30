import { MODE, MAP } from "../actions/SudokuActions";

const defaultState = {
  mode: "notes", // "answer" or "notes"
  map: [],
};

const timerReducer = (state = defaultState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case MODE:
      newState.mode = action.strMode;
      break;
    case MAP:
      const { arrMap, pos, val } = action;
      newState.mode === "answer"
        ? (arrMap[pos] = val)
        : Array.isArray(arrMap[pos])
        ? arrMap[pos].push(val)
        : (arrMap[pos] = [val]);

      newState.map = arrMap;
      break;
    default:
      let map = Array(81).fill(".");
      newState.map = map;
  }

  return newState;
};

export default timerReducer;
