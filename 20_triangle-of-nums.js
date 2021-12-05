'use strict'

// Print the following pattern:
/* 
1
2 6      
3 7 10         
4 8 11 13      
5 9 12 14 15   
*/

function triangle(height){
    let result = [];
    let number = 1;
    for (let i=0; i<height; i++){
        result.push([]);
    }  
    let k=0;
    while(result[height-1].length<height){
        for (let i=k++; i<height; i++){
            result[i].push(String(number++));
        }
    }
    return result.join('\n');
}

console.log(triangle(5));

