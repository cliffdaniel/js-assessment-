exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var greeting = function(){
      return `${str1} ${str2}`;
    }
    console.log(greeting());
    return greeting();
  }
};
