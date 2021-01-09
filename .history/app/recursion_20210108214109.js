const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arr = []
    for (var [key, value] of Object.entries(data)) {
      if (typeof value === 'string' && value.lastIndexOf('.') > 0) {
        arr.push(value);
        console.log('value', value)
        // data[key].listFiles.contact(arr);
        console.log(data[key]);
      }
      if (typeof value === 'object') {
        this.listFiles(data[key], dirName);
      }
    }
    console.log(data['listFiles']);
    return arr;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
