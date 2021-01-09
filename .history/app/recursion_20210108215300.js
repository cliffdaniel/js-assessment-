const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var getArrFiles = (function(){
      return {
        sayIt: function(arr, dir, acc = []) {
          for (var [key, value] of Object.entries(arr)) {
            if (typeof value === 'string' && value.lastIndexOf('.') > 0) {
              acc.push(value);
            }
            if (typeof value === 'object') {
              this.sayIt(arr[key], dirName, acc);
            }
          }
          return acc;
        },
      };
    })();

    console.log(getArrFiles.sayIt(data, dirName));

    return getArrFiles.sayIt(data, dirName);


    // var arr = []
    // for (var [key, value] of Object.entries(data)) {
    //   if (typeof value === 'string' && value.lastIndexOf('.') > 0) {
    //     arr.push(value);
    //     console.log('value', value)
    //   }
    //   if (typeof value === 'object') {
    //     this.listFiles(data[key], dirName);
    //   }
    // }
    // return arr;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
