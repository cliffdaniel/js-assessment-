exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    console.log(str);
    var pattern = /^\d+$/;
    console.log(pattern.test(str));
    return pattern.test(str)
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
