exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    console.log(str);
    var numberPattern = /\d+/g;
    console.log(str.match(numberPattern));
    return str.match(numberPattern)
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
