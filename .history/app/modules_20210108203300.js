const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);

    var module = (function(){
      var greeting;
      var name;

      return {
        greeting: greeting,
        name: name,
        sayIt: function() {
          return `${greeting}, ${name}`;
        },
      };
    })();

    console.log(module.name);
    console.log(module.greeting)
    console.log(module.sayIt())
    console.log(typeof module.sayIt)
    return module;
  }
};
