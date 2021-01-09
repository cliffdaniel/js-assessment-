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
    var Formulas = (function(name, lastname){
      return {
        calcularIva: function() {
          return `${name} ${lastname}`;
        },
      }
    })
    console.log('llega');
    console.log(Formulas.calcularIva(str1, str2));
    console.log('pasa');
    return Formulas.calcularIva(str1, str2);
  }
};
