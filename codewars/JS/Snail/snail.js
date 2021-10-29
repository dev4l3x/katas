
class LeftRightState {

    isCollisionWithEdgeInNextIncrement(i, j, array){
        return ((j + 1 >= array.length) || array[i][j+1] === null)
    }

    moveCoordinates(coordinates){
        coordinates[1]++;
    }

    getNextState(){
        return new UpDownState();
    }
}

class RightLeftState {
    isCollisionWithEdgeInNextIncrement(i, j, array){
        return ((j - 1 < 0 ) || array[i][j-1] === null)
    }

    moveCoordinates(coordinates){
        coordinates[1]--;
    }

    getNextState(){
        return new DownUpState();
    }
}

class UpDownState {
    isCollisionWithEdgeInNextIncrement(i, j, array){
        return ((i + 1 >= array.length) || array[i+1][j] === null)
    }

    moveCoordinates(coordinates){
        coordinates[0]++;
    }

    getNextState(){
        return new RightLeftState();
    }
}

class DownUpState {
    isCollisionWithEdgeInNextIncrement(i, j, array){
        return ((i - 1 < 0) || array[i-1][j] === null)
    }

    moveCoordinates(coordinates){
        coordinates[0]--;
    }

    getNextState(){
        return new LeftRightState();
    }
}

snail = function(array){
    let i = 0, j = 0;
    let numbers = [];
    var currentState = new LeftRightState();
    while(numbers.length < array.length * array[0].length){
        numbers.push(array[i][j]);
        array[i][j] = null;

        if(currentState.isCollisionWithEdgeInNextIncrement(i, j, array)){
            currentState = currentState.getNextState();
        }

        var coords = [i, j];
        currentState.moveCoordinates(coords);
        [i, j] = coords;

    }
    return numbers;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));