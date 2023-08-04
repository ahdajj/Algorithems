; 
let pali = 'hellesssh';
function Palindromes(m){
   var Sp = [];
   var Re ;
     Sp = pali.split('');
     console.log(Sp);
   for ( let i = 0; i <= Sp.length/2 ; i++){
      if ( Sp[i] != Sp[Sp.length -1 -i]){
            Re = false ;
            break;
      }else {
             Re =  true    
      }
}
         return Re        
}
console.log(Palindromes(pali))
