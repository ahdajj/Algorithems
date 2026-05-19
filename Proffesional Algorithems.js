/*

                         ////// **game 0f 3s** //////
 //soloution 1
function Gameof3(num){
    while(num>1){
        if(num%3==0){
            console.log(num , 0)
            num/=3 
        }else if (num%3==1){
            console.log(num , -1)
            num=num-1
            num/=3
        }else{
            console.log(num , +1)
            num=num+1
            num/=3
        }
    }
    return num
}
console.log(Gameof3(100))
}
 gameOfThree(100)

 //soloution 2 
function gameOfThree(n){
    if(n%3===0){
        console.log(n , 0)
        n=n/3
    } else if(n%3==1){
        console.log(n , -1)
        n=n-1
        n=n/3
    }else if (n%3==2){
        console.log(n , +1)
        n=n+1
        n=n/3
    }

    if(n!==1){
        gameOfThree(n)
    }
    
}
gameOfThree(100)

                         ////// **Magic Squares** //////

 //soloution 1

// define a function takes array as parameter 
// define a variable wtih initial value 15 
// define two variables to hold the sum of the diagonals elements 
// condition to check if the variables are equal to 15 
// false , return false 
// for loop to iterate through the array 
// condition to check if the rows sun is equal to 15 
// false return false 
 // true , for loop start from 0 and finish at 2 
 // condition to check if the sum of coloumns is equal to 15 
 //true return true 
 // false return false 

//  function magicsquare (arr){
//     let sum = 15
//     let diagonal1=arr[0]+arr[4]+arr[8]
//     let diagonal2= arr[2]+arr[4]+arr[6]
//     if(diagonal1!==15 || diagonal2!==15 ){
//         return false 
//     }
//     for(let i=0 ; i<arr.length ; i+=3){
//         if (arr[i]+arr[i+1]+arr[i+2]!==sum){ 
//             return false
//         }
//     }
//     for(let i=0 ; i<=2 ; i++){
//         if(arr[i]+arr[i+3]+arr[i+6]!==sum){
//             return false 
//         }
//     }
//     return true
//  }
 
// console.log(magicsquare(array))
// }





                         ////// **Search and Replace** //////
  
let st = 'quick Brown Fox jumped on the lazy dog'
st.toLowerCase
function SearchandReplace (string , before , after ){
     let arr=string.trim().split(' ')
     for (let i=0 ; i<arr.length ; i++){
        if(arr[i].toLowerCase()==before.toLowerCase()){
            if(arr[i][0]==arr[i][0].toUpperCase()){
                arr[i]=after[0].toUpperCase()+after.slice(1)
            }else{
                arr[i]=after
            }
        }
     }
     return arr.join(' ')
}
console.log(SearchandReplace(st,  'brown' ,'yellow'))

                         ////// **Sum of all primes** //////
  function sumPrime(num){
    let sum=0
    for(let i=num ; i>=2 ; i--){
        let isprime=true
            for(let j=i-1 ; j>=2 ; j--){
                if(i%j==0){
                    isprime=false
                    break
                }
            }
        if(isprime==true){
            sum=sum+i
        }
    }
    return sum
  }
  console.log(sumPrime(10))

                           ////// **Sum of odd Fibonatchi** //////

function FibOdd(num){ 
    let seq=0
    let seq1=1
    let seq2=0
    let sum=0
    for(let i=0 ; i<=num ; i++){
        seq2=seq1
        seq1=seq
        seq=seq1+seq2
        i=seq
        if(seq<=num && seq%2!==0 ){
            sum+=seq
        }
    }
    return sum
}
console.log(FibOdd(10))

//solution 2 
function FibOdd(num){ 
    let seq=0
    let seq1=1
    let seq2=0
    let sum=0
    while (seq<=num)
    { seq2=seq1
        seq1=seq
        seq=seq1+seq2
        if(seq<=num && seq%2!==0 ){
            sum+=seq
        }}
  
    return sum
}
console.log(FibOdd(10))



 */

