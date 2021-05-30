export const MODE = "MODE";
export const MAP = "MAP";

// Game have 2 mode, "answer" and "notes"
export const modeAction = (strMode) => ({
  type: MODE,
  strMode,
});

export const mapAction = (arrMap, pos, val) => ({
  type: MAP,
  arrMap,
  pos,
  val,
});
