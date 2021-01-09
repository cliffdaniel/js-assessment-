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

    const perm = a => a.length ? a.reduce((r, v, i) => [ ...r, ...perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]]

    
    return perm;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
