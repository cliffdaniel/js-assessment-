const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {

    var module = (function(){
      var greeting, name;
      greeting = str1;
      name = str2;

      return {
        greeting: greeting,
        name: name,
        sayIt: function() {
          return `${str1}, ${str2}`;
        },
      };
    })();

    console.log(module.name);
    // console.log(module.name = 'lol');
    console.log(module.greeting)
    console.log(module.sayIt())
    return module;
  }
};
