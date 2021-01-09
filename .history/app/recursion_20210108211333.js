const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    console.log(typeof data);
    if (typeof data === 'object') {
      for (var [key, value] of Object.entries(data)) {
        console.log(value);
        this.listFiles(value, dirName);
      }
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
