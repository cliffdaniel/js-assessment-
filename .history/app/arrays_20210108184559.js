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
    console.log(arr);
    arr.forEach(element => {
      console.log(element, this.indexOf(arr, item));
      arr.splice(this.indexOf(arr, element), 1);
    });
    console.log(arr);
    // const index = []
    // for(let i in arr) {
    //   console.log('arr[i]', arr[i]);
    //   if(arr[i] == item) {
    //     index.push(i);
    //   }
    // }
    // console.log('item', item);
    // console.log('index', index);
    // let len = 0;
    // for(let i of index) {
    //   arr.splice(i-len, 1);
    //   len++;
    // }
    // console.log('len', len);
    // console.log('arr', arr);
    return arr;
  },

  append: function(arr, item) {
    
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
