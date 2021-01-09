exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    
  },

  manipulateRemoteData: function(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
  }
};
