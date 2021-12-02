'use strict'

// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
// words from the array.

function replaceWith(sentence, words){
    let str = sentence.split('');
    let k = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] == '_'){
            str.splice(i, 1, words[k++]);
        }
    }
    return str.join('');
}

console.log(replaceWith('_, we have a _.', ['Houston', 'problem']));
console.log(replaceWith('If at _ you don\'t _, try, try _.', ['first', 'succeed', 'again']));
console.log(replaceWith('May the _ _ _ _.', ['Force', 'be', 'with', 'you']));