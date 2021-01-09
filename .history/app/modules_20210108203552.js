const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {

    var module = (function(){
      var greeting = str1;
      var name = str2;

      return {
        greeting: greeting,
        name: name,
        sayIt: function() {
          return `${greeting}, ${name}`;
        },
      };
    })();

    console.log(module.name);
    console.log(module.name = 'lol');
    console.log(module.greeting)
    console.log(module.sayIt())
    return module;
  }
};
