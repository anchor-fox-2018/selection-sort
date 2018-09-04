function selectionSort(arr) {
  var sorted = [];

  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      var toSort = arr[i];
      arr[i] = arr[min];
      arr[min] = toSort;
    }
  }
  return arr;
}

var num1 = [33,2,52,106,73];
var num2 = [13,5,22,99,11];

console.log(selectionSort(num1)); // [2,33,52,73,106]
console.log(selectionSort(num2)); // [5,11,13,22,99]
