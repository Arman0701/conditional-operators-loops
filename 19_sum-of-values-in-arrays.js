'use strict'

// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

function sumOfRow(arr){
    let result = [];
    for (let i=0; i<arr.length; i++){
        let sum = 0;
        for (let j=0; j<arr[i].length; j++){
            sum += arr[i][j];
        }
        result.push(sum);
    }
    return result;
}

console.log(sumOfRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(sumOfRow([[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]]));
console.log(sumOfRow([[1], [2], [3], [4]]));