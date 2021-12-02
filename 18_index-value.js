'use strict'

// Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
// new array where each element from that array is placed under the index of its value. Start from the
// smallest value and end with the biggest one. If there are missing values, put in its places undefined.

function replacing(arr){
    let placed = [];

    for (let i=0; i<Math.max(...arr); i++){
        placed[arr[i]] = arr[i];
    }
    for (let i=0; i<placed.length; i++){
        if (! (arr.includes(placed[i]))){
            placed[i] = undefined;
        }
    }

    return placed;
}

console.log(replacing([4, 3, 0, 9]));
console.log(replacing([26, 30, 19, 5]));
