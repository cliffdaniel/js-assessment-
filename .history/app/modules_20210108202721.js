const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var module = (function(){
      return {
        greeting: str1,
        name: str2,
        sayIt: function() {
          return `${str1}, ${str2}`;
        },
      };
    })();
    console.log(module.name);
    console.log(module.greeting)
    console.log(module.sayIt())
    console.log(typeof module.sayIt)
    return objModule;
  }
};
