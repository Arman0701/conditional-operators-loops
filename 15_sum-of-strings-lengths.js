'use strict'

// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
// of their lengths.

function calculateLengths(arr){
    let max = arr[0].length;
    let min = arr[0].length;

    for (let i=0; i<arr.length; i++){
        if (max<arr[i].length){
            max = arr[i].length;
        }
        if (min > arr[i].length){
            min = arr[i].length;
        }
    }
    return min + max
}

console.log(calculateLengths(['anymore', 'raven', 'me', 'communicate']));
console.log(calculateLengths(['wish', 'slightly', 'understand', 'longer', 'unexpected', 'heart']));