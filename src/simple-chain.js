import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

// const chainMaker = {
export default {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) 
      || position < 1
      || position > this.links.length) {
      this.links = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    const toString = this.links
      .map(linkValue => `( ${linkValue} )`)
      .join('~~');

    this.links = [];
    return toString;    
  }
};

// let chain = chainMaker;
// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();