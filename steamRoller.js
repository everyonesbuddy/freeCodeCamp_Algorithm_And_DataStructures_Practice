//Flatten a nested array. you mus account for varying levels of nesting

function steamrollArray(arr){
    const flattenedArray = [];
    //loop over array contents
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])) {
            //Recursively flatten entries that are arrays
            //and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            //copy content that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);