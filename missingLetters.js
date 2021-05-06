//find the missing letter in the passed letter range and return it if all letters are present in the range, return undefined.


// memorized solution
// function missingLetters(str){
//     let compare = str.charCodeAt(0);
//     let missing;

//     str.split('').map(function (char, i) {
//         if(str.charCodeAt(i) === compare){
//             compare++
//         } else{
//             missing = String.fromCharCode(compare);
//         }
//     })
//     return missing;
// }

//My solution
// function missingLetters(str){
//     let compare = str.charCodeAt(0);
//     let missing ;

//     let arrayedStr = str.split('');
//     //loop through arr
//     for(let i = 0; i < arrayedStr.length < i++){
//         //compare char code of each loop with compare and increment compare
//         if(arrayedStr){

//         }
//     }
// }



console.log(missingLetters("abce"))