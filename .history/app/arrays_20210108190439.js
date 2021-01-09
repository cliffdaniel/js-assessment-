exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, item) => sum + item, 0);
  },

  remove: function(arr, item) {
    return arr.filter((el) => el !== item);
  },

  removeWithoutCopy: function(arr, item) {
    arr.forEach(element => {
      arr.splice(this.indexOf(arr, item), 1);
    });
    return arr;
  },

  append: function(arr, item) {
    console.log(arr);
    console.log(item);
    console.log(arr.push(item));
    // return arr.push(item);
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
