/*
                         ////// **MONDAY** //////

// 1.Print 1 - 135
  for ( let i=1 ; i<=135; i++){
    console.log(i)
  }

// 2.Print Odd Numbers 1 - 135
for ( let i=1 ; i<=135; i++){
  if(i%2){
    console.log(i)
  }
}

// 3. Sum of Printed Numbers
let sum = 0
for ( let i=1 ; i<=135; i++){
  sum+=i
   console.log(`Number is : ${i} sum is ${sum}`)
}

// 4. Print the elements of an array
let X = [1,4,2,12]
for(let i of X){
console.log(i)
}
   //or//
for(let i=0 ; i<X.length ; i++){
  console.log(X[i])
} 

// 5. Find Max
let X=[-2,-1,-10,-4]
let Max=X[0]
for(let i of X){
  if(i>Max){
    Max=i
  }
}
console.log(Max)
      or//
for(let i=0 ; i<X.length ; i++){
  if(i>Max){
        Max=i
      }
}
console.log(Max)

// 6. Get Average
let X=[2,1,3]
let sum=0
let av=0
for(let i of X){
  sum+=i
}
av=sum/X.length
console.log(av)

//7. Eliminate the Negatives
let X=[2,-1,4,-3]
for ( let i = 0 ; i<X.length ; i++){
  if (X[i]<0){
      X[i]=0
  }
}
console.log(X)


//8. Number to String
let X= [1,-4,0,-1]
for(let i=0 ;  i<X.length; i++) {
  if(X[i]<0){
    X[i]='Turing'
  }       
} 
console.log(X)


                         ////// **TUESDAY** //////

//1. Addition
for(let i=200 ;i<=2700;i++ ){
  if((i%3==0 || i%5==0) && !(i%3==0 && i%5==0)){
    console.log(i)
  }
}


//2. Shift the Values
let x= [2,1,6,4,-7]
let m=[]
for(let i=0 ; i<=(x.length)-1; i++)
{
m.unshift(x[i])
} 
console.log(m)
              //or//
let x= [2,1,6,4,-7]
for(let i=0 ; i<(x.length/2) ; i++){
  let shift
  shift=x[i]             
  x[i]=x[x.length-i-1]    
  x[x.length-i-1]=shift 
  console.log(shift,x[i],x[x.length-i-1]) 
  console.log(x)
}


//3. FizzBuzz
let x=[]
for(let i=1 ; i<=135;i++){
  x[i]=0
  if(i%3==0 && i%5==0){
    x[i]='fizzbuzz'
  }else if(i%3==0){
    x[i]='fizz'
  }else if(i%5==0){
    x[i]='buzz'
  }else{
    x[i]=i
  }
}
console.log(x)


//4. Fibonacci
let fib=[]
for(let i=0 ; i<=100; i++){
  if(i==0){
    fib[i]=0    
  }else if (i==1){
    fib[i]=1  
  }else{
    fib[i]=fib[i-1]+fib[i-2]
  }
}
console.log(fib)
                 //or//
let fib=[]
for(let i=0 ; i<=100; i++){
  if(i==0 || i==1){
    fib[i]=i    
  }else{
    fib[i]=fib[i-1]+fib[i-2]
  }
}
console.log(fib)


//5. Remove the Negative
let x=[1,1,-2,4,-2,2,-10,-11]  
for(let i=0 ; i<x.length ; i++){
  if(x[i]<0){
     x.splice(i,1)
     i=i-1             // because splice will change the array length which causes the loop to skip one element
  }
}
console.log(x)
              //or//
let x=[1,1,-2,4,-2,2,-10,-11]  
let y=[]
for(let i=0 ; i<x.length ; i++){
  if(x[i]>0){
     y.push(x[i])
  }
}
console.log(y)


//6. Communist Censorship
let arr=['hello','welcom','hi','day']
let word='day'
let m = ''
for ( i of word){
    m+='*'
}
for(let i=0 ; i<=arr.length ; i++){
  if(arr[i]==word){
    arr[i]=m
  }
}
console.log(arr)

                         ////// **WEDNESDAY** //////
                    
//Factorialize
function Factorialize(n){
  let factorl = 1
  for(let i = n ; i>0 ; i--){
      factorl*=i
  }
  return factorl
}
console.log(Factorialize(10))


                         ////// **THURSDAY** //////

//palindrome
function palindrome(word){
    let st = word.split(' ').join('').toLocaleLowerCase()
    for(let i=0 ; i<st.length/2 ; i++ ){
        if(st[i]!=st[st.length-1-i]){
            return false
        } 
    }
    return true
}
let x = 'helleh'
console.log(palindrome(x))

                         ////// **FRIDAY** //////

//3rd Highest Number in Array
const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
for(let i=0 ; i<x.length; i++){
    if(x[i]>first){
        third=second
        second=first
        first=x[i]
    }else if(x[i]>second){
        third=second
        second=x[i]
    } else if(x[i]>third){
        third=x[i]
    }
}
console.log(third)
*/
