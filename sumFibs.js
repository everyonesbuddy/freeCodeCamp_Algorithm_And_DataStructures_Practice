//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num

function sumFibs(num) {
    let fibSequence = [0,1];

    let counter = fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length -1]

    while(counter <= num) {
        fibSequence.push(counter);
        counter = fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length -1]
    }

    let sumOfOdd = 0
    fibSequence.forEach(function(num){
        if(num % 2 !== 0){
            sumOfOdd += num;
        }
    })

    return sumOfOdd;

}

sumFibs(1000)