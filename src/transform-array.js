import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);

export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let action = null;
  const transformed = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    switch (el) {
      case '--double-next':
        action = 'double';
        break;
      case '--discard-next':
        action = 'discard';
        break;
      case '--double-prev':
        if (transformed.length > 0) {
          if (arr[i - 2] && arr[i - 2] != '--discard-next') {
            transformed.push(arr[i - 1]);
          }
        }
        break;       
      case '--discard-prev':
        if (transformed.length > 0) {
          if (arr[i - 2] && arr[i - 2] != '--discard-next') {
            transformed.pop();
          }
        }
        break;
      default:
        if (!action) {
          transformed.push(el);          
        } else {
          switch (action) {
            case 'double':
              transformed.push(el)
              transformed.push(el);
              action = null;
              break;
            case 'discard':
              // skip element
              action = null;
            default:
              break;
          }
        }
        break;
    }
  }

  return transformed;
}
