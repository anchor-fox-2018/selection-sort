function selectionSort (array){
    for(var i =0;i< array.length;i++){
        for(var j = i+1; j < array.length;j++){
            if(array[j] < array[i]){
                var penampung = array[i];
                array[i] = array[j];
                array[j] = penampung;
            }
        }
    }
    return array
}
console.log(selectionSort([33,2,52,106,73]))