
// //define function takes number as a parameter
// //while until n>=1
// //if condition to check if the nuber divided by 3 
// //false check the remainder if ==1 substract 1 , if 2 add 1 
// //divide by 3 
// //true divide it by 3 

// function gameOfThree(n){
//     while(n>1){
//         if(n%3==1){
//             console.log(n , -1)
//             n=n-1
//             n=n/3
//         }else if (n%3==2){
//             console.log(n , 1)
//             n=n+1
//             n=n/3
//         } else if(n%3==0){
//             console.log(n , 0)
//             n=n/3
//         }  
//     }
//     console.log(n)
// }

//  gameOfThree(100)

// function gameOfThree(n){
//     if(n%3===0){
//         console.log(n , 0)
//         n=n/3
//     } else if(n%3==1){
//         console.log(n , -1)
//         n=n-1
//         n=n/3
//     }else if (n%3==2){
//         console.log(n , +1)
//         n=n+1
//         n=n/3
//     }

//     if(n!==1){
//         gameOfThree(n)
//     }
    
// }
// gameOfThree(100)

// define an array 
// define two variables to hold the sum of each diameter
//condition to check if we have a mach
// if true  console tru , if false consol false 

// arr = [
//     1,2,3,
//     4,5,6,
//     7,8,9
// ]
// let dia1= arr[0]+arr[4]+arr[8]
// let dia2=arr[2]+arr[4]+arr[6]
// if(dia1==dia2){
//     console.log(true)
// }else {
//     console.log(false)
// }





 //define a functin takes array as a parameter 
 //for loop to itterate through the array elelmts
 //for loop to controle the number of comparisons i have 
 //if codition to copare two array elemnts
 //if true switch the elements position
 //if false nth 

//  arr = [5 ,1 ,9 ,4, 3 ,7]
//  function bubble(arr){
//     let temp=0
//     for(let i=0 ; i<arr.length ; i++){
//         console.log(arr , i)
//         for(let j=0 ; j<arr.length-i ; j++){
//             console.log(arr[j] , arr[j+1])
//             if(arr[j]>arr[j+1]){
//                 temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 console.log(arr)
//             }
//         }
//     }
//     return arr
//  }

// console.log(bubble(arr))




//function takes three parameters strings 
//convert the string to an array 
//for loop to loop through the array
//if condition to check witch element match the second string parameter 
//if true we find a match replace it with the third string / parameter

// let st= 'quick brown fox jumped over the lazy dog'

// function replace(st , before , after){
//      let arr=st.trim().toLowerCase().split(' ')
//      let upbefore=before.toLowerCase()
//      for(let i=0 ; i<arr.length ; i++){
//         if(arr[i]===upbefore){
//             // arr[i]=after
//             arr.splice(i,1,after)
//         }
//      }
//      return arr.join(' ')
// }
// console.log(replace(st,'Fox','cat'))


//function takes number as a parameter
//define variable to hold the sum of numbers
//define empty array 
//for loop start from 2 end at the givin number 
//define variable to determine if the number is prime 
//for loop from 2 to the givin number 
//condition to check if the number is prime 
//true set prime to false  
//condition if prime value is true push it to the array
// for of to iterate through the array 
//add the number to the variable sum
//print sum

// unction sumPrimes(num) {
//     let sum = 0;
//     let arr = [];
  
//     for (let i = 2; i <= num; i++) {
//       let isPrime = true;
  
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break; // exit the inner loop if not prime
//         }
//       }
  
//       if (isPrime) {
//         arr.push(i);
//       }
//     }
      
//       for (i of arr) {
//           sum+=i
//       }
//     return sum;
//   }
  
//   console.log(sumPrimes(977));


//   function sumPrime(num){
//     let sum=0
//     for(let i=num ; i>=2 ; i--){
//         let isprime=true
//             for(let j=i-1 ; j>=2 ; j--){
//                 if(i%j==0){
//                     isprime=false
//                     break
//                 }
//             }
//         if(isprime==true){
//             sum=sum+i
//         }
//     }
//     return sum
//   }
//   console.log(sumPrime(10))


//define two variables , an e mpty array and a variable to hold the sum of numbers
//define function takes number parameter 
//define two variable , numbers 
//while loop start from 0 to the number value  
//condition to check if the number is odd
//if true add the number to sum
//ptint sum


// function FibOdd(num){ 
//     let seq=0
//     let seq1=1
//     let seq2=0
//     let sum=0
//     for(let i=0 ; i<=num ; i++){
//         seq2=seq1
//         seq1=seq
//         seq=seq1+seq2
//         if(seq<=num && seq%2!==0 ){
//             sum+=seq
//         }
//     }
//     return sum
// }
// console.log(FibOdd(10))




//function takes arry as parameter 
//define two variables , one to hold the min number index , the other one to do the switch
//for loop to iterate through the array
//for loop to make the comparisions through the array   
//condtition to fin the min number (index)
//switch position to put the small number in the beginning

// let arr=[29, 72, 98, 13, 87, 66, 52, 51, 36]
// x=[13,72,98,29,...]
// function SelectionSort(arr){
//     let Minindex
//     let temp
//     for(let i=0 ; i<arr.length ; i++){
//         Minindex=i
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[j]<arr[Minindex]){
//                 Minindex=j
//             }
//         }
//         temp=arr[i]
//         arr[i]=arr[Minindex]   
//         arr[Minindex]=temp           
//     } 
//     return arr
// }
// console.log(SelectionSort(arr))
