exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    // var name = str1;
    // var lastname = str2;

    // var calculateBonus = function() {
    //   return `${str1} ${str2}`;
    // }

    return {
      name: str1,
      lastname: str2,
      calculateBonus: calculateBonus
    }
  }
};
