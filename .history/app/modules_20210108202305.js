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
    const objModule = new module();
    console.log(objModule.name);
    console.log(objModule.greeting)
    console.log(objModule.sayIt())
    console.log(objModule.sayIt()
    return objModule;
  }
};
