
function sumDigits(sum) {
    var value = sum,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

    console.log(sum);
}

sumDigits(2124);


///////////////////////////////////////////////////////////////////////////////////////////////////



function getInnerSumOfDigits(num){
    var numStr = num.toString()
    // 1. Check if unner digits are present.
    if(numStr.length<3){
        console.log(-1);
        return;
    }
    // 2. Run Loop.
    let sum=0;
    for(let i=1; i<=numStr.length-2; i++){
        sum+Number(numStr[i]);
    }
    console.log(sum);
}

getInnerSumOfDigits(123456);
getInnerSumOfDigits(12);
getInnerSumOfDigits(7071);
getInnerSumOfDigits(123);