const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var module = (function(){
      return {
          setGreeting: function(greeting, name) {
            return `${greeting} ${name}`;
          },
      };
    })();
    console.log(module.setGreeting(str1, str2));
    return module.setGreeting(str1, str2);
  }
};
