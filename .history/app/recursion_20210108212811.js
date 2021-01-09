const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // console.log(typeof data);
    for (var [key, value] of Object.entries(data)) {
      if (typeof value === 'string' && value.lastIndexOf('.') > 0) {
        console.log(value);
      }
      if (typeof value === 'object') {
        this.listFiles(data[key], dirName);
      }
    }
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
