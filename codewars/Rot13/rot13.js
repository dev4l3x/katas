

function rot13(message){

    const minAsciiCodeForMinusLetters = 96;
    const maxAsciiCodeForMinusLetters = 122;
    const minAsciiCodeForMayusLetters = 64;
    const maxAsciiCodeForMayusLetters = 90;

    let arrayMessage = Array.from(message);
    var result = arrayMessage.map((char) => {
        if(isLetter(char)){
            return char
        }

        var min = isMinus(char) ? 
            minAsciiCodeForMinusLetters : minAsciiCodeForMayusLetters;
        var max = isMinus(char) ? 
            maxAsciiCodeForMinusLetters : maxAsciiCodeForMayusLetters;

        let charCode = getCharCode(char);
        if(charCode + 13 > max){
            return String.fromCharCode(min + (charCode + 13 - max));
        }
        else{
            return String.fromCharCode(charCode + 13);
        }
    });
    return result.join('');
}

function getCharCode(char){
    return char.charCodeAt(0);
}

function isLetter(char){
    return /[^a-zA-Z]/.test(char);
}

function isMinus(char){
    return /[a-z]/.test(char)
}


console.log(rot13('Test'));