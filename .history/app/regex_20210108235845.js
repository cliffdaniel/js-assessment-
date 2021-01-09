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
    return str.match(/\d{3}/) ? str.match(/\d{3}/)[0] : false;
  },

  matchesPattern: function(str) {
    console.log(/^([0-9]{5,})$/.test(str));
    return /^([0-9]{5,})$/.test(str)
  },

  isUSD: function(str) {

  }
};
