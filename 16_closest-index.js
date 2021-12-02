'use strict'

// Given an array of numbers and a number. Find the index of a first element which is equal to that
// number. If there is not such a number, that find the index of the first element which is the closest to it.

function closestTo(numbersStr, number){
    let diff = 0;
    let min_diff = Infinity;
    let diffArray = [];
    let index = 0;
    for (let i=0; i<numbersStr.length; i++){
        if (numbersStr[i] == number){
            return i;
        } else {
            diff = Math.abs(numbersStr[i]) - Math.abs(number);
            diffArray.push(Math.abs(diff));
            if (min_diff > Math.min(...diffArray)){
                min_diff = Math.min(...diffArray);
                index = i;
            }
        }
    }
    return index;
    // console.log(Math.min(...diffArray));
}

console.log(closestTo([21, -9, 15, 2116, -71, 33], -71));
console.log(closestTo([36, -12, 47, -58, 148, -55, -19, 10], -56));
console.log(closestTo([5, 46, 17, -2, 89, 0, 26 ], 36));