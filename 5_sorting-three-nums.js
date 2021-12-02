'use strict'

// Given three numbers. Sort them by the ascending order.

function sort(first, second, third){
    let arr = [first, second, third];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }
    return arr.toString();
}

console.log(sort(45, 26, 78));
console.log(sort(-23, -456, 0));