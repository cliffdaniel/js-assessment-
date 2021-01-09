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
    // console.log(str);
    // console.log(/\d{3}\-\d{3}\-\d{4}/.test(str.toLowerCase()));
    return /\d{3}-\d{3}-\d{4}/.test(str.toLowerCase())
  },

  isUSD: function(str) {
    console.log(str);
    console.log(/(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/.test(str));
    return /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/.test(str)
  }
};
