const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // console.log(typeof data);
    console.log("entra");
    
    for (var [key, value] of Object.entries(data)) {
      if (typeof value === 'string') {
        console.log('===', value, value.lastIndexOf('.'));
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
