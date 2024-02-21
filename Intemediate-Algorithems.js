
                      /////////////** Monday **/////////////

// function takes an array as parameter
// define empty array
// for loop to iterate through the main array
// variable to hold the max number
// for loop to iterate throught the subarrais
// if condition to check if max less than the current subarray element 
// if yes max=current element
// add the bigest numner to the empty array
// return the new array 

// let x= [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// function largestOfFour(arr){
//     let newarr=[]
//     for(let i of arr){
//         let Max=i[0]
//         for(let j of i){
//             if (j>Max){
//                 Max=j
//             }
//         }
//         newarr.push(Max)
//     }
//     return newarr
// }
// console.log(largestOfFour(x))

                       /////or/////
// function largestOfFour(arr){
//     let newarr=[]
//     for(let i of arr){
//         newarr.push(i.reduce(function (a,b){
//            if(a<b){
//             a=b
//            }
//            return a
//         }
//         ))
//     } 
//     return newarr
// }
// console.log(largestOfFour(x))

                          /////or/////
// function largestOfFour(arr){
//     return arr.map(function(i){
//         console.log(i)
//         return Math.max.apply(null,i)
//     })
// }

// console.log(largestOfFour(y))


                      /////////////** Tuesday **/////////////
                      
//function takes a string as parameter
//convert the string to array 
//define varaible to hold the max word length
//for loop to iterate through the array
//condition if to compare the length of the current element with max word length
//if true max word length = current element length
//return max


// let x="The quick brown fox jumped over the lazy dog"
// function FindLongest(st){
//           let word=st.split(' ')
//           let Max=0
//           for(let i=0 ; i<word.length; i++){
//             if (Max<word[i].length){
//                 Max=word[i].length
//             }
//           }
//         return Max
// }
// console.log(FindLongest(x))


                      /////////////** Wednesday **/////////////

// function take a string as parameter
//convert the string to array and put it in variable 
// for loop to iterate through the array word by word 
//we use methods charat , to upper case , slice , tolower case to make the first litter uper case 
//change the array to string using join

// let x='sHoRt AnD sToUt'
// function titleCase(st){
//     let word=st.split(' ')
//     for(let i=0 ; i<word.length; i++){
//         word[i]=word[i][0].toUpperCase()+word[i].slice(1).toLowerCase()
//     }
//     return word.join(' ')
// }
// console.log(titleCase(x))

                              ////or////

// function titl(st){
//     let arr=st.toLowerCase().split(' ')
//     let m=[]
//     for(let i of arr){
//         i=i[0].toUpperCase()+i.slice(1)
//         m.push(i)
//     }
//     return m.join(' ')
// }
// console.log(titl(x))



                      /////////////** Thursday **/////////////

//function take array as parameter
//define two variables min , max
//variable sum 
//for loop starting from min ending at max
//adding numbers to sum 
//return sum

// let x=[6,2]

// function large (arr){
//     let min=Math.min(...arr)
//     let max=Math.max(...arr)
//     let sum=0
//     for(let i=min ; i<=max ; i++){
//         console.log(i)
//         sum = sum+i
//     }
//     return sum
// }
// console.log(large(x))
                              ////or////
// function sumall(arr){
//     let sum=0
//     for(let i=Math.min(...arr) ; i<=Math.max(...arr) ; i++){
//         sum+=i
//     }
//     return sum
// }
                              ////or////
// function sumall(arr){
//   let sum=0 
//   if(arr[0]<arr[1]){
//     for(let i = arr[0] ; i<=arr[1] ; i++){
//         sum+=i
//     }
//     return sum
//   }else  if(arr[0]>arr[1]){
//     for(let i = arr[1] ; i<=arr[0] ; i++){
//         sum+=i
//     }
//     return sum
//   }
// }


                      /////////////** Friday **/////////////

//define function fib with parameter number 
//define three variables represent the current fibonatchi number and the previous two numbers
//for loob start from 0 and end at number value
//condition to assin the first two numbers in fibonatchi sequence
//then shift the value of each varible and assin the new value of the current fibonatchi number  
//

// function fib(n){
// let seq1 =0
// let seq2 =0
// let seq3 =0
// for(let i=0 ; i<=n ; i++){
//     if(i==0||i==1){
//         seq1=1
//     }else{
//         seq3=seq2
//         seq2=seq1
//         seq1=seq2+seq3
//     }
// }
// }
// console.log(fib(7))









