'use strict';

// Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1)

function fac(number){
    let prod = 1;
    for (let i=1; i<=number; i++){
        prod *= i;
    }
    return prod;
}

console.log(fac(1));
console.log(fac(5));
console.log(fac(7));
