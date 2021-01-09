const { last } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    // var name = str1;
    // var lastname = str2;

    // var calculateBonus = function() {
    //   return `${str1} ${str2}`;
    // }

    console.log(str1, str2);
    var formulas = (function(){
      return {
        calcularIva: function(name,lastname) {
          return `${name} ${lastname}`;
        },
      }
    })
    console.log('llega');
    console.log(formulas.calcularIva(str1, str2));
    console.log('pasa');
    return Formulas.calcularIva(str1, str2);
  }
};
