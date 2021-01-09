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
    var Formulas = (function(){
      var iva = 0.18;
  
      return {
          calcularIva: function(monto) {
              return monto * iva;
          },
          calcularMontoSinIva: function(monto){
              return monto / (1 + iva);
          },
          calcularUtilidad: function(costo, ingreso) {
              return ingreso - costo;
          },
          calcularTasaEfectivaAnual: function(capital, interes, periodos) {
              return capital * Math.pow(1 + interes, periodos);
          }
      };
  })();
    console.log('llega');
    console.log(Formulas.calcularIva(400));
    console.log('pasa');
    return Formulas.calcularIva(str1, str2);
  }
};
