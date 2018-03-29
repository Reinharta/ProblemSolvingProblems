"use strict";
/*function displayResult (result) {
     return console.log(result);
 }*/

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


// function happy (number) {
//   let array= [number];
//   let newNumber= 0;
//   let strNum= number.toString().split("");
//   for (let i = 0; i<=strNum.length-1; i++) {
//     array[i]= parseInt(strNum[i]);
//     newNumber += Math.pow(array[i], 2);
//     }
//   return newNumber
//   if (newNumber===1){
//     console.log("Happy")
//   }
//   else {
//     for (let i = 0; i<=strNum.length-1; i++) {
//     array[i]= parseInt(strNum[i]);
//     newNumber += Math.pow(array[i], 2);
//     }
//   return newNumber
//   }
// }







// console.log(happy(44))

// function happy (number) {
//   let i=0;
//   let newNumber= 0;

//   let array= [number];
//   array= number.toString().split(""); 
//   while (number!=1 && i<=array.length) {
 
//     // array[i]= parseInt(strNum[i]);
//     newNumber += Math.pow(array[i], 2);
    
//         if (i===strNum.length-1) {
//           let sum= newNumber
//               if (sum===1||sum===4) {
//                 return sum;
//               }
//               else {
//                 let strNum=newNumber.toString().split("");
//                 continue;
//               }
//         }
//         else {
//           i++;
//           continue;
//         }
//   } 
//   if (number===1) {
//     return "happy!"
//   }
// }
// //** task: re-run loop with new sum -- not doing that shit


// function results (number) {
// if (number === 1 ) {
//   console.log("Super Happy!");
// }
// if (number)
// else {
//   console.log(Happy);
// }
// }


// function displayResult (number) {
//      return (number);
//  }






// good shit

function happy (number) {
  let newNumber= 0;
  let array= [number];
  array= number.toString().split("");
  for (let i = 0; i < array.length; i++) {
    // let strNum= number.toString().split("");
    // array[i]= parseInt(strNum[i]);
    newNumber += Math.pow(array[i], 2);
  }
  if (newNumber === 1) {
    return "Happy"
  }
  else {
    if (newNumber === 4 || newNumber === 29) {
      return "Sad"
    }
    return happy(newNumber);
  }
}
console.log(happy(942))