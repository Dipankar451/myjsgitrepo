

// Dipankar

function checkOrder(a, b, c){
    if(a<b && b<c){
        console.log("Increasing Order");
    }
    else if(a>b &&b>c){
        console.log("Decreasing Order");
    }
    else{
        console.log("neither increasing nor decreasing");
    }
}
checkOrder(12, 20, 30);
checkOrder(50, 45, 31);
checkOrder(12, 60, 30);

