exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    var me = function (options) {
      me.doThings(options); 
    }

    me.doThings = function(options) {
       return `hola mundo`
    } 
    return me;   
  }
};
