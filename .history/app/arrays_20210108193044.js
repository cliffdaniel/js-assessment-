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
    arr.forEach(() => {
      arr.splice(this.indexOf(arr, item), 1);
    });
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((acc, cur) => {
      return (cur === item) ? acc + 1: acc;
    }, 0);
  },

  duplicates: function(arr) {
    const test = arr.reduce((acc, cur) => {
      if (this.indexOf(acc, cur) < 0)
        this.append(acc, cur);
      return acc;
    }, []);
    console.log(test);
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
