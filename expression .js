
// functions in js
// 1. Functions play very important role in javascript



var x = 10;

// Create a  function. => Function Expression.
const add = function(a, b){
    console.log(a+b);
}

function addPrintMessage(funadd, message){
    funadd (10, 20);
    console.log(message);
}

addPrintMessage(add, "Hello there");

