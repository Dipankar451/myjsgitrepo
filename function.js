
// why do we use it?
// how do we use it?
// where to use it?

//var x = 10;
//var y = 20;
//var result = x+y;
//console.log(result);



// how to create a function?
// circular brakests are used to take inputs of the function.
// curly brackets are used to define the body of the function.

function addTwoNumbers(x, y){
    var result = (x +y);
    // return is used to return output to caller.
    return result;
}

// how to call a function?
// circular brackets are used to pass parameters

var output = addTwoNumbers(10, 20);
console.log(output);

output = addTwoNumbers(20, 40);
console.log(output);

console.log("result is ", addTwoNumbers(20, 50));


console.log(10 === +'10')