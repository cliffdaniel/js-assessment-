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
    console.log(/[a-z0-9]{3}\.[a-z0-9]{3}\.[a-z0-9]{4}/.test(str.toLowerCase()));
    return /^([0-9]{12,})$/.test(str)
  },

  isUSD: function(str) {

  }
};
