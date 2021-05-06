//write a function that takes in 2 arrays and returns a new array of unique values in the order of the original provided arrays. basically return a union of the arrays 

//my solution

// function sortedUnion(arr1, arr2){
//     //declare a new array
//     let newArray = [];
//     //spread array 1 into new array
//     newArray = [...arr1];
//     //loop through new array
//     for(let i = 0; i < newArray.length; i++){
//         //loop through array 2
//         for(let j = 0; j < arr2.length; j++){
//             //if element in array 2 is not in new array push it to new array 
//             if(arr2[j] !== newArray[i]){
//                 newArray.push(arr2[j]);
//             }
//         }
//     }
//     //return new array 
//     return newArray
// }

//Working solution 
function unitUnique(arr1, arr2, arr3){
    //create an empty array to store our final result.
    let finalArray = [];
    //loop through the argument object to make the function work with 2 or more arguments instead of 3
    for(let i = 0; i < arguments.length; i++){
        let arrayArguments = arguments[i];

        //loop through the array at hand 
        for(let j = 0; j < arrayArguments.length; j++){
            let indexValue = arrayArguments[j]

            //check if the value is already in final array 
            if(finalArray.indexOf(indexValue) < 0){
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray
}

console.log(unitUnique([1, 2, 3], [5, 2, 1]));