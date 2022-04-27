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
  const digits = n
    .toString()
    .split("")
    .map((char) => Number.parseInt(char));
  const minDigit = Math.min(...digits);
  digits.splice(digits.indexOf(minDigit), 1);
  return Number.parseInt(digits.map((digit) => digit.toString()).join(""));
}

module.exports = {
  deleteDigit,
};
