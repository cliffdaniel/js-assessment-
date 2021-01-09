exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel: function(str) {
    return (/\b([aeiou])[a-z]+\1\b/i).test(str); 
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
