const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var module = (function(){
      var greeting = str1;
      var name = str2;
      // var sayIt = new Function();
      return {
        sayIt: function() {
            return `${greeting}, ${name}`;
          },
      };
    })();
    console.log(module.name);
    console.log(module.greeting)
    console.log(module.sayIt())
    console.log(module.sayIt)
    return objModule;
  }
};
