'use strict'

// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.

function reverseInt(number){
    let result;
    let reversed = number.toString().split('');
    console.log(reversed);
    if (reversed[reversed.length-1] === "0") {
        result  = number;
        return result;
    }
    let tmp = reversed.pop();
    reversed.push(reversed[0]);
    reversed[0] = tmp;
    result = reversed.join('');
    return result;
}

console.log(reverseInt(367));
console.log(reverseInt(1002));
console.log(reverseInt(250));
console.log(reverseInt(8));