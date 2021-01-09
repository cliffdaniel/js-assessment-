exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    
  },

  manipulateRemoteData: function(url) {
    console.log(url);
    console.log(fetch(`./${url}`))
    fetch(`./${url}`).then(data => console.log(data));
    // .then(response => response.json())
    // .then(data => console.log(data));
  }
};
