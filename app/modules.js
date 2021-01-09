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
          return `${this.greeting}, ${this.name}`;
        },
      };
    })();
    return module;
  }
};
