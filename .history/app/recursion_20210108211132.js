const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    console.log(typeof data);
    if (typeof data === 'object') {
      console.log('llega')
      // for (var [key, value] of Object.entries(data)) {
      //   console.log('key', key, Object.is(key, key))
      // }
    }
    // for (var [key, value] of Object.entries(data)) {
    //   console.log(Object.is(key));

    //   // console.log('key', key, 'value', value);   
    // };
    // console.log(data, dirName);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
