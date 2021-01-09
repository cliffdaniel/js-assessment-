exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel: function(str) {
    return /[a,e,i,o,u]$/.test(str.toLowerCase()); 
  },

  captureThreeNumbers: function(str) {
    console.log(str);
    
    console.log(str.match(/\d{3}/) || false)
    
    return str.match(/\d{3}/)[0] || false;
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
