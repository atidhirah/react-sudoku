import solvedSudoku from "../db/solvedSudoku";

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

  getHelper(map, pos) {
    const selectedValue = map[pos];
    const row = this.getRowNodes(pos);
    const col = this.getColumnNodes(pos);
    const reg = this.getRegionNodes(pos);

    const helperNode = row.concat(col, reg);
    if (selectedValue !== ".") {
      map.forEach((val, i) => {
        if (selectedValue === val) helperNode.push(i);
      });
    }

    let pNum = [];
    if (Number.isInteger(selectedValue)) {
      pNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else {
      helperNode.forEach((i) => {
        let val = map[i];
        if (Number(val) && !pNum.includes(val)) {
          pNum.push(val);
        }
      });
    }

    return {
      helperNode: helperNode,
      prohibitedNum: pNum,
    };
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
    if (val < 1 || val > 9) return false;
    if (!this.checkRowPlacement(sudokuMap, pos, val)) return false;
    if (!this.checkColumnPlacement(sudokuMap, pos, val)) return false;
    if (!this.checkRegionPlacement(sudokuMap, pos, val)) return false;

    return true;
  }

  solveGame(sudokuMap) {
    // Delete all notes in sudoku map
    let arr = sudokuMap.map((node) => (Array.isArray(node) ? "." : node));
    // Find all empty nodes position
    let emptyNodes = arr.reduce((acc, val, i) => {
      if (val === ".") acc.push(i);
      return acc;
    }, []);

    let i = 0; // Index for iterate through emptyNodes array
    while (i >= 0 && i < emptyNodes.length) {
      let pos = emptyNodes[i];
      let num = arr[pos] === "." ? 1 : arr[pos] + 1;
      let isFilled = false;
      while (!isFilled && num <= 9) {
        if (this.checkPlacement(arr, pos, num)) {
          arr[pos] = num;
          i += 1;
          isFilled = true;
        } else {
          num += 1;
        }
      }

      if (!isFilled) {
        arr[pos] = ".";
        i -= 1;
      }
    }

    return i < 0 ? false : arr;
  }

  generateGame(level) {
    const random = (i) => Math.floor(Math.random() * (i - 1));
    const solved = solvedSudoku[random(solvedSudoku.length)]
      .split("")
      .map((item) => +item);
    const outputMap = [...solved];

    let clueCount = level === "easy" ? 38 : level === "medium" ? 30 : 20;
    let emptyNodeCount = 81 - clueCount;
    let arrEmptyNode = [];

    while (arrEmptyNode.length < emptyNodeCount) {
      let index = random(81);
      if (!arrEmptyNode.includes(index)) {
        arrEmptyNode.push(index);
        outputMap[index] = ".";
        if (!this.solveGame(outputMap)) {
          outputMap[index] = solved[index];
          arrEmptyNode.pop();
        }
      }
    }

    const numberCount = {};
    outputMap.forEach((node) => {
      if (Number.isInteger(node)) {
        if (numberCount.hasOwnProperty(node)) {
          numberCount[node] += 1;
        } else {
          numberCount[node] = 1;
        }
      }
    });

    const solvedMap = this.solveGame(outputMap);
    return {
      solvedMap: solvedMap,
      gameMap: outputMap,
      numberCount: numberCount,
    };
  }
}

export default Sudoku;
