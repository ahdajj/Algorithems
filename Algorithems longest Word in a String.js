

let Str = 'The quick brown fox jumped over the lazy dog';
let split = Str.split(' ');
let max = 0 ;
for ( let i of split){
    if (max < i.split('').length){
        max= i.split('').length;
    }
}
console.log (max);