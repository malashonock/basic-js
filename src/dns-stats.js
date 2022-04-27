import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
// function getDNSStats(domains) {
  const reversed = domains.map(domain => '.' + domain.split('.').reverse().join('.'));

  function getDnsOptions(domain) {
    const dnsOptions = [];
    const substrings = domain.split('.').filter(char => char != '');
    let accumStr = '';

    for (let i = 0; i < substrings.length; i++) {
      accumStr += '.' + substrings[i];
      dnsOptions.push(accumStr);      
    }

    return dnsOptions;
  }

  const all = reversed.map(domain => getDnsOptions(domain)).flat();

  const distinct = [...new Set(all)];

  const result = {};
  for (const domainOption of distinct) {
    result[domainOption] = reversed.filter(domain => domain.match(domainOption)).length;
  }

  return result;
}

// getDNSStats(['epam.com']);