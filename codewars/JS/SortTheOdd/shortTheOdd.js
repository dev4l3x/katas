
function sortArray(array) {
    var deletedNumbers = [];
  
    let i = 0;
    while(i < array.length)
    {
        if(array[i] % 2 == 0){
            deletedNumbers.push([i, array[i]]);
            array.splice(i, 1);
        }
        else{
            i++;
        }
    }
  
    array.sort(compare);
    deletedNumbers.reverse();
  
    for(let deleted of deletedNumbers){
        array.splice(deleted[0], 0, deleted[1]);
    }

    return array;
}

function compare(a, b){
  
        if(a < b)
            return -1;
        if(a > b)
            return 1;
        else 
            return 0;
}

console.log(sortArray([ 5, 3, 2, 8, 1, 4, 11 ]));