exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    console.log(str1, str2);
    return {
      // A public variable
      publicVar: "foo",

      // A public function utilizing privates
      publicMethod: function( bar ) {
          // ..
      }
    }
  }
};
