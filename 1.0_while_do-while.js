'use strict'

let a = [1,2,3,4,5];

// try to write a the following loop with while and do-while:

// for(let i=0; i< a.length; i++){
//     console.log("for: ", i, a[i]);
// }

// while loop 
let i=0;

while(i<a.length){
    console.log("for: ", i, a[i]);
    i++;
}

// do-while loop
let i1=0;
do {
    console.log("for: ", i1, a[i1]);
    i1++;
} while(i1<a.length);