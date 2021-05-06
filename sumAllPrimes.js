//pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factor are 1 and itself


//My solution
// function sumAllPrimes(num){
//     //declare a counter to zero
//     let prime = 0;
//     //loop to num
//     for(let i = 0; i <= num ; i++){
//         //if number in loop is a prime number add it to count
//         if(i % 1 === 0 || i % i === 0){
//             prime += i;
//         } 
//     }
//     return prime;
// }

// Brad solution 1
function sumAllPrimes(num){
    let total = 0;

    function checkForPrime(i){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                return false
            }
        }
        return true;
    }

    for(let i = 2; i <= num; i++){
        if(checkForPrime(i)){
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10));