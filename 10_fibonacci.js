'use strict'

// Given a number n ( n >= 0 ) . Print n Fibonacci number. 
//(Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)

function fib(seq_length){
    if (seq_length == 0) return 0
    let arr = [0,1];
    for (let i=1; i<seq_length; i++){
        arr.push(arr[i] + arr[i-1]);
    }
    return arr[arr.length-1]
}

console.log(fib(0));
console.log(fib(2));
console.log(fib(10));
console.log(fib(20));