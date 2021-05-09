//Given an array, iterate through and remove each element starting from the first element until the function returns true when the iterated element is passed through it.

//my  solution
// function dropElements(arr, func) {
//     //loop through array
//     for(let i = 0; i < arr.length; i++){
//         //create a conditional to drop every element till the return of the function
//         if(arr[i] !== func){
//             arr.shift()
//         }
//     }

//     return arr;
// }

//Working solution
function dropElements(arr, func) {
    // drop them elements.
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });

dropElements([1,2,3], function(n) { return n < 3})