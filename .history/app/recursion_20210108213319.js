const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arr = []
    for (var [key, value] of Object.entries(data)) {
      if (typeof value === 'string' && value.lastIndexOf('.') > 0) {
        console.log(value);
        arr.push(value);
      }
      if (typeof value === 'object') {
        this.listFiles(data[key], dirName);
      }
    }
    return arr;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
