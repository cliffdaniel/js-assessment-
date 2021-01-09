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
    var permute = (function () {
      return permute;
  
      function permute(list) {
          return list.length ?
              list.reduce(permutate, []) :
              [[]];
      }
  
      function permutate(permutations, item, index, list) {
          return permutations.concat(permute(
              list.slice(0, index).concat(
              list.slice(index + 1)))
              .map(concat, [item]));
      }
  
      function concat(list) {
          return this.concat(list);
      }
    }());

    return permute(arr);
  },

  fibonacci: function(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    
    for(let i = 2; i <= n; i++){
        c = a + b; 
        a = b; 
        b = c; 
    }
    
    return n ? b : a;
  },

  validParentheses: function(n) {
    const result = [];
    breathFirstSearch("", 0, 0);
    return result;
    function breathFirstSearch(str, left, right) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        breathFirstSearch(str + "(", left + 1, right);
      }
      if (left > right) {
        breathFirstSearch(str + ")", left, right + 1);
      }
    }
  }
};
