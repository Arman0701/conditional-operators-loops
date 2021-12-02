'use strict'

// Insert a digit and a number. Check whether the digits contains in the number or not.

function checking(dig, number){
    let result = "No"
    let check = String(number).split('');
    for (let i=0; i<check.length; i++){
        if (check[i] == dig){
            result = "Yes";
        }
    }

    return result;
}

console.log(checking(5, 2463));
console.log(checking(4, 6));
console.log(checking(8, 45689));