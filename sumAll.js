//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//MY SOLUTION
// function sumAll(arr){
//     //return the sum of the 2 numbers 
//     //return the sum of all the numbers between those two numbers
//     let total = 0
//     let start = 0;
//     let end = arr.length - 1;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[1];
//     }
//     return (arr[start] + arr[end], total)
// }

// sumAll([4,1])


//correct solution
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);