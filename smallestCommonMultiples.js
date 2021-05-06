//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// basically it is the number that is divisible by both numbers


//My solution
// function smallestCommons(arr){
//     //define a number and set it to 1
//     let num = 1
//     //loop through array
//     for(let i = 0; i < arr.length; i++){
//         //if num after divided by both is not equal zero num ++
//         if(num % arr[i] !== 0){
//             num ++
//         } else{
//             return num;
//         }
//     }
    

// }


//Working solution
function smallestCommons(arr){    
    arr.sort((a,b) => a > b ? 1 : -1)
    let[div, num] = arr
    while(div < arr[1]){
        if(num % div === 0){
            div++
        } else {
            num += arr[1];
            div = arr[0];
        }
    }
}

smallestCommons([1, 5])