//Check if the predicate (second argument) is truthy on all elements of a collection(first argument).

//in other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if it value is truthy. Otherwise return false

function truthCheck(collection, pre) {
    //create a counter to check how many are true.
    let counter = 0;

    //check for each object
    for(let c in collection){
        //If it is has property and value is truthy
        if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter ++
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}

truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  );