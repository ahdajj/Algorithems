// Bubble sort
let arr =[6,22,14,5,9];
for (let i=0 ; i<arr.length ; i++){
    for (let j=0 ; j<arr.length-1-i ; j++){
        let temp;
        if (arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
    
}
console.log(arr)


// Selection Sort
let arr = [5,3,7,55,12,1,16];
for (let i = 0 ; i<arr.length ; i++){
    let min = i  ;
    let temp  ;
    for ( let j = i; j<arr.length ; j++){
        if (arr[j] < arr[min]){
            min = j;
    } 
    temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
    console.log(arr)
    
}
console.log(arr)

