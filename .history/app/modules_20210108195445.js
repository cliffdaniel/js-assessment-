exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    return {
      gretting: function(var1, var2) {
        return `${var1} ${var2}`
      }
    }
    console.log(gretting(str1, str2));
  }
};
