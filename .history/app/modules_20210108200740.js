exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    // var name = str1;
    // var lastname = str2;

    // var calculateBonus = function() {
    //   return `${str1} ${str2}`;
    // }

    // return {
    //   name: name,
    //   lastname: lastname,
    //   calculateBonus: calculateBonus
    // }

    var newEmployee = EmployeeDetails();
    console.log(newEmployee);
    return newEmployee;
  },
  EmployeeDetails: function() {
    var name = "Mayank";
    var age = 30;
    var designation = "Developer",
  
    var calculateBonus = function(amount) {
      return `${name} ${designation}`;
    }
  
    return {
      name: name,
      age: age,
      calculateBonus: calculateBonus
    }
  }
};
