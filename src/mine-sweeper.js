import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const masked = Array(rowCount).fill(null).map(row => new Array(colCount));

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      let minesCount = 0;

      function addMine(rowOffset, colOffset) {
        if (i + rowOffset < 0 || i + rowOffset >= rowCount) return;
        if (j + colOffset < 0 || j + colOffset >= colCount) return;

        const cell = matrix[i + rowOffset][j + colOffset];

        if (cell) {
          minesCount++;
        }
      }

      addMine(-1, -1);
      addMine(-1, 0);
      addMine(-1, 1);
      addMine(0, -1);
      addMine(0, 1);
      addMine(1, -1);
      addMine(1, 0);
      addMine(1, 1);

      masked[i][j] = minesCount;
    }
  }

  return masked;
}