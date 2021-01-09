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
    var salary = 10000;
  
    var calculateBonus = function(amount) {
      salary = salary + amount;
    }
  
    return {
      name: name,
      age: age,
      designation: designation,
      calculateBonus: calculateBonus
    }
  }
};
