
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            // console.log('i: ' + i + ' j: ' + j);
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));