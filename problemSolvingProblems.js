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

// function stringInput (str) {
//     let string= prompt("Enter Text Here");
//     return string;
// }
// function palindrome (str) {
//     let newString= /[\W_]/g;
//     let lowerStr= str.toLowerCase().replace(newString,"");
//     let reverseStr= lowerStr.split("").reverse().join("");
//     return reverseStr === lowerStr;
// }
// console.log(palindrome(stringInput()))


/*#6*/

function happy (number) {
  let array= [number];
  let newNumber= 0;
  let strNum= number.toString().split("");
  for (let i = 0; ;i++) {
    array[i]= parseInt(strNum[i]);
    newNumber += Math.pow(array[i], 2);
    }
  return newNumber
}
  
////for loop conditional statement (length) screwed up from beginning by stopping too soon, without it it ran one extra loop ending with NaN////

console.log(happy(998))


// if (sum=== 4||16||37||58||89||145||42||20) {
//   return false;
// }
// else {
//   return true;
// }
// for (var i = Things.length - 1; i >= 0; i--) {
//   Things[i]
// }
// for (var i = 0; i < Things.length; i++) {
//   Things[i]
// }

// function digitsSplit (number) {
//     let example= 404;
//     let spltNum= example.toString(10).split("");
//     let digit= 
// }
// function digitsSquared (number) {
//     let square= Math.pow(digit, 2);
// }
// function squaresAdded (square) {
// //     let sum= 
// // }
//     let sum= squaresAdded
//     return square;
// }
// function 
 

// console.log(digitsSquared())



