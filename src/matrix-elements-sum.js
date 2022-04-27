const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const excludedColumns = [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let sum = 0;

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (!excludedColumns.includes(j)) {
        if (matrix[i][j] != 0) {
          sum += matrix[i][j];
        } else {
          excludedColumns.push(j);
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
