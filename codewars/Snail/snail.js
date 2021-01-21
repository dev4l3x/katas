
const directions = {
    LeftRight: "LR",
    RightLeft: "RL",
    UpDown: "UD",
    DownUp: "DU"
}

snail = function(array){
    let i = 0, j = 0;
    let numbers = [];
    let currentDirection = directions.LeftRight;
    while(numbers.length < array.length * array[0].length){
        numbers.push(array[i][j]);
        array[i][j] = null;
        if(currentDirection === directions.LeftRight && ((j + 1 >= array.length) || array[i][j+1] === null)){
            currentDirection = directions.UpDown;
        }
        else if(currentDirection === directions.RightLeft && ((j - 1 < 0 ) || array[i][j-1] === null)){
            currentDirection = directions.DownUp;
        }
        else if(currentDirection === directions.DownUp && ((i - 1 < 0) || array[i-1][j] === null)){
            currentDirection = directions.LeftRight;
        }
        else if(currentDirection === directions.UpDown && ((i + 1 >= array.length) || array[i+1][j] === null)){
            currentDirection = directions.RightLeft;
        }

        if(currentDirection === directions.LeftRight){
            j++;
        }
        else if(currentDirection === directions.UpDown){
            i++;
        }
        else if(currentDirection === directions.RightLeft){
            j--;
        }
        else{
            i--;
        }

    }
    return numbers;
}

console.log(snail([[]]));