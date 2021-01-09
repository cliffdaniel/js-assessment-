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

    var getArrFiles = (function(){
      var ret = [];
      return {
        perm(arr) {
          for (let i = 0; i < arr.length; i = i + 1) {
            let rest = perm(arr.slice(0, i).concat(arr.slice(i + 1)));
        
            if(!rest.length) {
              this.ret.push([arr[i]])
            } else {
              for(let j = 0; j < rest.length; j = j + 1) {
                this.ret.push([arr[i]].concat(rest[j]))
              }
            }
          }
          return this.ret;
        }
      };
    })();

    let ret = getArrFiles.perm(arr);
    console.log(getArrFiles.perm(arr));
    
    return ret;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
