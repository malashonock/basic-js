const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let gapIndices = arr
    .map((height, index) => {
      if (height == -1) {
        return index;
      } else {
        return null;
      }
    })
    .filter((index) => index != null);

  let sortable = arr.filter((height) => height != -1);
  let sorted = sortable.sort((a, b) => a - b);

  let injectedGaps = [...sorted];
  for (const gapIndex of gapIndices) {
    injectedGaps.splice(gapIndex, 0, -1);
  }

  return injectedGaps;
}

module.exports = {
  sortByHeight,
};
