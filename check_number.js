// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));


function positive_negative(num){
    if (num>0){
        console.log(" positive ");
    }
    else if(num<0){
        console.log("negative ");
    }
    else {
        console.log(" zero ");
    }
}

positive_negative(10);
positive_negative(-10);
positive_negative(0);