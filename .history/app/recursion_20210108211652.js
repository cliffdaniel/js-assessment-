const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // console.log(typeof data);
    let arr = [];
    for (var [key, value] of Object.entries(data)) {
      // console.log(value, typeof value === 'string');
      if (typeof value === 'string') {
        arr.push(value);
      }
      this.listFiles(value, dirName);
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
