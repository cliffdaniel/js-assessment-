const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var module = (function(str1, str2){
      var greeting = str1;
      var name = str2;
      return {
          setGresayIteting: function() {
            return `${greeting} ${name}`;
          },
      };
    })();
    const objModule = new module(str1, str2);
    return objModule;
  }
};
