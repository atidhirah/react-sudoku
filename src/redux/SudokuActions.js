export const MODE = "MODE";
export const SELECTED_NODE = "SELECTED_NODE";
export const FILL_NODE = "FILL_NODE";
export const ERASER = "ERASER";
export const MODAL = "MODAL";
export const MAKE_GAME = "MAKE_GAME";
export const NEW_GAME = "NEW_GAME";
export const SOLVE = "SOLVE";

// Change mode on game, "answer" or "notes"
export const modeAction = () => ({
  type: MODE,
});

// Called when user click on a node
export const selectNodeAction = (pos) => ({
  type: SELECTED_NODE,
  pos,
});

// Called when user filling node on sudoku board
export const fillNodeAction = (val) => ({
  type: FILL_NODE,
  val,
});

export const eraserAction = () => ({
  type: ERASER,
});

// Show or hide modal pop-up
export const modalAction = (modalStatus, modalName) => ({
  type: MODAL,
  modalStatus,
  modalName,
});

export const makeGameAction = () => ({
  type: MAKE_GAME,
});

export const newGameAction = (difficulty) => ({
  type: NEW_GAME,
  difficulty,
});

export const solveAction = () => ({
  type: SOLVE,
});
