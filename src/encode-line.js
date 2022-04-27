import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let strCopy = str.substring(0);
  let encoded = '';

  while (strCopy) {
    let char = strCopy.charAt(0);
    let regexp = new RegExp(`^(${char}+)`);
    let match = regexp.exec(strCopy);
    let charCount = match[1].length;
    strCopy = strCopy.replace(regexp, '');
    
    if (charCount > 1) {
      encoded += `${charCount}${char}`;
    } else {
      encoded += char;
    }
  }

  return encoded;
}