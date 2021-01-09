exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    for (var [key, value] of Object.entries(data)) {
      console.log('key', key, 'value', value);   
    };
    // console.log(data, dirName);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
