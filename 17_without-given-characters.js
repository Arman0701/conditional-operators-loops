'use strict'

// Given a sentence as a string. Split it according to space and comma and create an array consisting of
// the words of the array. The last word should not contain the last . or ! .

function cuttingLastChar(str){
    let splitted = str.split('');

    for (let i=0; i<splitted.length; i++){
        if (splitted[i] == '!' || splitted[i] == '.' || splitted[i] == ','){
            splitted.splice(i, 1)
        }
    }
    return splitted.join('').split(' ');
}

console.log(cuttingLastChar('May the Force be with you.'));
console.log(cuttingLastChar('Keep your friends close, but your enemies closer.'));