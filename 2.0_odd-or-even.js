'use strict'

// Given a number. Print “odd” if the number is odd and “even” if itʼs even.

function oddOrEven(number){
    return number % 2==0 ? "even" : "odd";
}

console.log(oddOrEven(5)); // returns "odd"
console.log(oddOrEven(4)); // returns "even"