const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let max = 0;

  for (let index = 0; index < str.length; index++) {
    const reducedStr = str.substring(0, index) + str.substring(index + 1);
    const reducedNum = Number.parseInt(reducedStr);

    if (reducedNum > max) {
      max = reducedNum;
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};
