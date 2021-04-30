//compare 2 arrays and return a new array with any item only found in one of th two given arrays, but not both. in other words, return the symmetric difference of the two arrays .

//My solution

// function diffArray(arr1, arr2){

//     let frequencyCounter = {};
//     //loop through array 1 and store frequency in new object
//     for(let i = 0; i < arr1.length; i++){
//         if(frequencyCounter[arr1[i]]){
//             frequencyCounter[arr1[i]] += 1;
//         } else {
//             frequencyCounter[arr1[i]] = 1
//         }
//     }

    
//     //loop through array 2 compare to the frequency counter and remove what already exist and add what does not

//     for(let j = 0; j < arr2.length; j++){
//         if(frequencyCounter[arr2[j]]){
//             frequencyCounter[arr2[j]] -= 1
//         } else {
//             frequencyCounter[arr2[j]] = 1
//         }
//     }
//     console.log(frequencyCounter);
//     // return frequencyCounter
// }

//frecodecamp solution 
function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);