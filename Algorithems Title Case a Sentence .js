
let St = 'sHoRt AnD sToUt';
let sp = St.toLowerCase().split(' ');
let m =[] ;
for ( let i of sp){
    let ar = i.split('');
       ar[0]= ar[0].toUpperCase();
       // console.log(ar);
        m.push(ar.join(''));
}
St = m.join(' ');
console.log(St);