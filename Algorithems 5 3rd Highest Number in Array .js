let x = [2,66,44,15,55,100];
let Max1 = 0;
let Max2 = 0;
let Max3 = 0;
for ( let i = 0 ; i<x.length ; i++ ){
    if( x[i]>Max1){
        Max3 = Max2 ;
        Max2 = Max1 ;
        Max1 = x[i];
    }else if (x[i]>Max2 ){
        Max3 = Max2 ;
        Max2 = x[i];
    } else if (x[i]>Max3 ){
        Max3 = x[i];
    }
}
console.log(Max1 , Max2 ,Max3)