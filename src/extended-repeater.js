import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // default options
  const props = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
  }

  // override default options 
  if (options) {
    for (const prop in props) {
      if (Object.hasOwnProperty.call(options, prop)) {
        props[prop] = options[prop];
      }
    }
  }

  // do main task
  const repeatedAddition = Array(props.additionRepeatTimes)
    .fill(props.addition)
    .reduce((prev, curr) => prev + props.additionSeparator + curr);

  const repeatedMainStr = Array(props.repeatTimes)
    .fill(str + repeatedAddition)
    .reduce((prev, curr) => prev + props.separator + curr);
    
  return repeatedMainStr;
}