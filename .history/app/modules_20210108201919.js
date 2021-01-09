const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var module = (function(var1, var2){
      var greeting = var1;
      var name = var2;
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
