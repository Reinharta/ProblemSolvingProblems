"use strict";
// function displayResult (result) {
//      return console.log(result);
//  }

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

// function reverseString(text){
//     let resultString="";
//     for (let i= text.length -1;i>=0;i--){
//         resultString += text[i];
//     }
//     return resultString
// }
// displayResult(reverseString("hello"));


/*#3*/
// function makeLowCaseOnSpace(text){
//     let workingString = text.toLowerCase().split(' ');
//     return workingString;
// }
// function captilzeFirstLetter(workingString){
    
//     for(let idx = 0; idx < workingString.length; idx++){
//         workingString[idx] = workingString[idx].charAt(0).toUpperCase() + workingString[idx].substring(1);
//     }
//     return workingString.join(' ');
// }

// displayResult(captilzeFirstLetter(makeLowCaseOnSpace("hello i am learning.")))


/*#4*/

// function stringInput (str) {
//     let string= prompt("Enter Text Here");
//     return string;
// }

// function stringCompression (str) {
//   if (str.length ==0) {
//     console.log('Please enter stuff.');
//     return;
//   }
//   let output = '';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     count++;
//     if (str[i] != str[i+1]) {
//       output += count + str[i];
//       count = 0;
    
//     }
//   }
//   return output
// }
// console.log(stringCompression(stringInput()));


/*#5*/

function stringInput (str) {
    let string= prompt("Enter Text Here");
    return string;
}
function palindrome (str) {
    let newString= /[\W_]/g;
    let lowerStr= str.toLowerCase().replace(newString,"");
    let reverseStr= lowerStr.split("").reverse().join("");
    return reverseStr === lowerStr;
}
console.log(palindrome(stringInput()))