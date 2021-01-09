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
        calcularIva: function() {
          return `asd`;
        },
      }
    })
    console.log('llega');
    console.log(formulas.calcularIva());
    console.log('pasa');
    return Formulas.calcularIva(str1, str2);
  }
};
