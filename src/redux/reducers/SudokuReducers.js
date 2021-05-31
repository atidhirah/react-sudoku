import { MODE, MAP } from "../actions/SudokuActions";

const defaultState = {
  mode: "answer", // "answer" or "notes"
  map: [],
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
      newState.mode = action.strMode;
      break;
    case MAP:
      const { arrMap, pos, val } = action;
      if (newState.mode === "answer") {
        arrMap[pos] = val;
      } else {
        let posVal = arrMap[pos];
        if (Array.isArray(posVal)) {
          arrMap[pos] = addOrRemoveNote(posVal, val);
        } else {
          arrMap[pos] = [val];
        }
      }

      newState.map = arrMap;
      break;
    default:
      let map = Array(81).fill(".");
      newState.map = map;
  }

  return newState;
};

export default timerReducer;
