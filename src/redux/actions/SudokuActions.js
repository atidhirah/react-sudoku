export const MODE = "MODE";
export const MAP = "MAP";
export const SELECTED_NODE = "SELECTED_NODE";
export const MODAL = "MODAL";

// Game have 2 mode, "answer" and "notes"
export const modeAction = () => ({
  type: MODE,
});

export const mapAction = (val) => ({
  type: MAP,
  val,
});

export const selectNodeAction = (pos) => ({
  type: SELECTED_NODE,
  pos,
});

export const modalAction = (modalStatus, modalName) => ({
  type: MODAL,
  modalStatus,
  modalName,
});
