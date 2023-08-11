
// Sum all numbers in range 
/*
function SumAll(x){
    let sum = 0;
    if (x[0]<x[1]){
        for ( let i = x[0] ; i<=x[1] ; i++){
           sum +=i;
        };
    } else {
        for ( let i = x[1] ; i<=x[0] ; i++){
        sum +=i;
        };
    }
    return sum
}
console.log(SumAll([1,4]));
*/

// Fibonacci Sequence
function Fibonacci (n){
    let x = [];
    for (let i = 0 ; i<n ; i++){
        if ( i === 0){
            x[i] = 1;
        } else if ( i === 1){
            x[i] = 1;
        } else {
            x[i] = x[i-1] + x[i-2];
          }
        };
        return x[x.length-1]
}

console.log(Fibonacci(20))

