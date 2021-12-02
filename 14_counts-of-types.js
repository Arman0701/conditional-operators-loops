'use strict'

// Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function splitting(arr){
    let numbersCount = 0;
    let stringsCount = 0;
    for (let i=0; i<arr.length; i++){
        if (typeof arr[i] == 'number'){
            numbersCount++;
        } else if (typeof arr[i] == 'string'){
            stringsCount++;
        }
    }
    return `Numbers: ${numbersCount}, Strings ${stringsCount}`
}

console.log(splitting([1, '10', 'hi', 2, 3]));
console.log(splitting([1, 4, 'i am a string', '456']));