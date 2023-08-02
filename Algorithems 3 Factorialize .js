function Factorialize (n){
    let sum = n;
    for ( let i = n-1 ; i>0 ; i--){
        sum = sum*i  ;
    }
   return sum ;
}
console.log(Factorialize(10));
