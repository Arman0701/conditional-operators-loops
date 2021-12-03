'use strict'

// Enter a number. Find the difference between its biggest and smallest digits.

function difference(number){
    let arr = String(number).split('');

    for (let i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return max - min
}

console.log(difference(5));
console.log(difference(152));
console.log(difference(4593653));