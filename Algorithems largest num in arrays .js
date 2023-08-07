let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let max=[];

// soloution 1 
/*
for (let i of arr ){
    max.push(i.reduce((a,b) => { if (a<b) {a=b} return a}));
}
console.log(max);
*/

// soloution 2

for (let i = 0 ; i<arr.length ; i++){
    max.push(0);
    for ( let j = 0 ; j<arr[i].length ; j++){
         if ( arr[i][j]>max[i]){
            max[i]=arr[i][j];
         }
    }
}
console.log(max);


