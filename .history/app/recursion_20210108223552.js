const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var getArrFiles = (function(){
      return {
        recursiveReadDir: function(arr, extName, acc = []) {
          for (var [key, value] of Object.entries(arr)) {
            if (typeof value === 'string' && value.lastIndexOf('.') > 0) {
              if(extName) {
                if(value.includes('.' + dirName))
                  acc.push(value);
              } else {
                acc.push(value);
              }
            }
            if (typeof value === 'object') {
              this.recursiveReadDir(arr[key], extName, acc);
            }
          }
          return acc;
        },
      };
    })();

    return getArrFiles.recursiveReadDir(data, dirName);
  },

  permute: function(arr) {
    console.log(arr);

    function p(arr, temp) {
      var i, x;
      if (!arr.length) {
          result.push(temp);
      }
      for (i = 0; i < arr.length; i++) {
          x = arr.splice(i, 1)[0];
          p(arr, temp.concat(x));
          array.splice(i, 0, x);
      }
    }

    var result = [];
    p(arr, []);
    console.log(result);
    return result;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
