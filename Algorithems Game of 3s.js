function gameOfThree(x){
    if(x%3 === 0){
        x/=3;
        console.log(`${x} 0`)
    }else {
        console.log(`${x} +1`)
        x+=1;   
    }
    if(x !== 1){
        gameOfThree(x)
    }
}
gameOfThree(13)
