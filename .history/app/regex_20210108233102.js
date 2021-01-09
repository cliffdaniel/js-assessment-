exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel: function(str) {
    return (/^([aeiou]).*\1$/i).test(str); 
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
