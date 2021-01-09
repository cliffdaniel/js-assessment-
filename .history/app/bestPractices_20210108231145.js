/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    const myObject = {
      name: 'Jory'
    };
    console.log(myObject);
    return myObject;
  },

  parseInt: function(num) {
    return parseInt(num, 10);
  },

  identity: function(val1, val2) {
    console.log(val1, val2);
    console.log(eval(val1), eval(val2), eval(val1) === eval(val2));
    return eval(val1) === eval(val2);
  }
};
