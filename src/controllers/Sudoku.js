import solvedSudoku from "./solvedSudoku";

class Sudoku {
  constructor() {
    this.regionMap = {
      region_1: [0, 1, 2, 9, 10, 11, 18, 19, 20],
      region_2: [3, 4, 5, 12, 13, 14, 21, 22, 23],
      region_3: [6, 7, 8, 15, 16, 17, 24, 25, 26],
      region_4: [27, 28, 29, 36, 37, 38, 45, 46, 47],
      region_5: [30, 31, 32, 39, 40, 41, 48, 49, 50],
      region_6: [33, 34, 35, 42, 43, 44, 51, 52, 53],
      region_7: [54, 55, 56, 63, 64, 65, 72, 73, 74],
      region_8: [57, 58, 59, 66, 67, 68, 75, 76, 77],
      region_9: [60, 61, 62, 69, 70, 71, 78, 79, 80],
    };
  }

  getRowNodes(pos) {
    const row = parseInt(pos / 9);
    return Array(9)
      .fill(0)
      .map((_, i) => {
        return row * 9 + i;
      });
  }

  getColumnNodes(pos) {
    const column = pos % 9;
    return Array(9)
      .fill(0)
      .map((_, i) => {
        return i * 9 + column;
      });
  }

  getRegionNodes(pos) {
    let region;
    let map = this.regionMap;
    for (let key in map) {
      if (map[key].includes(pos)) {
        region = map[key];
      }
    }
    return region;
  }

  getHelperNodes(pos) {
    const row = this.getRowNodes(pos);
    const col = this.getColumnNodes(pos);
    const reg = this.getRegionNodes(pos);
    const helper = row.concat(col, reg);

    return helper;
  }

  checkRowPlacement(map, pos, val) {
    const rowPos = this.getRowNodes(pos);
    const rowValues = rowPos.map((position) => {
      return position === pos ? "X" : map[position];
    });

    return rowValues.includes(val) ? false : true;
  }

  checkColumnPlacement(map, pos, val) {
    const columnPos = this.getColumnNodes(pos);
    const columnValues = columnPos.map((position) => {
      return position === pos ? "X" : map[position];
    });

    return columnValues.includes(val) ? false : true;
  }

  checkRegionPlacement(map, pos, val) {
    let region = this.getRegionNodes(pos);
    const regionValues = region.map((position) => {
      return position === pos ? "X" : map[position];
    });

    return regionValues.includes(val) ? false : true;
  }

  checkPlacement(sudokuMap, pos, val) {
    if (
      this.checkRowPlacement(sudokuMap, pos, val) &&
      this.checkColumnPlacement(sudokuMap, pos, val) &&
      this.checkRegionPlacement(sudokuMap, pos, val)
    ) {
      return true;
    } else {
      return false;
    }
  }

  solveGame(sudokuMap) {
    let arr = sudokuMap.map((node) => (Array.isArray(node) ? "." : node));
  }

  generateGame(difficulty) {
    const solved =
      solvedSudoku[Math.floor(Math.random() * (solvedSudoku.length - 1))];
    const arrMap = Array(81).fill(".");
    let clue = difficulty === "easy" ? 38 : difficulty === "medium" ? 30 : 21;
    let cluePos = [];
    while (cluePos.length < clue) {
      let pos = Math.floor(Math.random() * 80);
      if (!cluePos.includes(pos)) cluePos.push(pos);
    }

    return arrMap.map((_, i) => (cluePos.includes(i) ? solved[i] : "."));
  }
}

export default Sudoku;
