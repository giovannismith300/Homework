//this code waas cread by Giovanni Smith

function fibnum(){
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum)
    console.log(secondNum)
    for(i = 0; i< 8; i++){
        newNum = firstNum + secondNum;
        console.log(newNum)
        firstNum = secondNum;
        secondNum = newNum
    }
}

fibnum()