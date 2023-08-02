/*
let add = 0 ;
let i ;
for (  i = 200 ; i<=2700 ; i++){
    if (i%3 ===0 || i%5 === 0 ){
        if(i%3 ===0 && i%5 === 0){
        }else{
        add = add + i ;
        console.log(i);
        }
    }
}
console.log(add);
*/


/*
// shift 
let x = [1,2,3,4,5,6,7];
for ( let i = 0; i <= (x.length/2)-1 ; i++){
    let shift ;
    shift = x[i];
    x[i]=x[x.length-i-1];
    x[x.length-1-i]=shift ;
}
console.log(x)
*/

/*
//fizz buzz
let x = [] ;
for ( i=1 ; i<136 ; i++){
    if (i%3 === 0 && i%5 === 0 ){
        x[i]='fizzbuzz';
    }else if ( i%3 === 0){
        x[i]='fizz';
    } else if(i%5 === 0){
        x[i]='buzz';
    }else {
        x[i]=i;
    }
}
console.log(x);
*/ 


//Fibonacci
/*
let x = [];
for ( let i=0 ; i<100 ; i++){
    if ( i === 0 ){
        x[i]=0 ;
    }else if ( i === 1){
        x[i]=1;
    }else {
        x[i]=x[i-1]+x[i-2];
    }
}
console.log(x);
*/

/*
//Remove the Negative
let x = [-1,0,5,-2,3];
let positiveX = [];
for ( let i = 0 ; i<x.length ; i++ ){
    if (x[i]>=0){
        positiveX.push(x[i]);
    }
 }
 x = positiveX;
console.log(x);
*/


/*
//Communist Censorship ( by changing CC value we pick any world we want to change )
let x = ['hello', 'man', 'program' , 'it'];
let CC = 'program';
for ( let i = 0 ; i<x.length ; i ++){
    if (x[i] === CC){
        x[i]='*****';
    }
}
console.log(x);
*/
