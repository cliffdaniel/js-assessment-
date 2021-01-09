exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    return {
      gretting: function() {
        return `${str1} ${str2}`
      }
    }
  }
};
