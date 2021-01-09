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
    
    var i, ch;
    for (i = 0; i < arr.length; i++) {
      ch = arr.splice(i, 1)[0];
      usedChars.push(ch);
      if (arr.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(arr);
      arr.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
