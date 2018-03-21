"use strict";
function displayResult (result) {
     return console.log(result);
 }

/* #1 */
// function fizzbuzz () {
//     let result = "";
//     for (let i=0; i<101; i++) {
//         if (i%3===0 && i%5===0) {
//             result+= "FizzBuzz\n";
//         }
//         else if (i%3===0) {
//             result+= "Fizz\n";
//         }
//         else if (i%5===0) {
//             result+= "Buzz\n";
//         }
//         else {
//             result+= i + "\n";
//         }
//     }
//     return result 
// }

// displayResult(fizzbuzz());


/* #2 */

function reverseString(text){
    let resultString="";
    for (let i= text.length -1;i>=0;i--){
        resultString += text[i];
    }
    return resultString
}
displayResult(reverseString("hello"));
