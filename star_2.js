
function printStar(num){

let pattern = "";

for (let i = 1; i <= num; i++) {

  for (let j = 1; j <= num - i; j++) {
    pattern += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
}
printStar(10);







 
// function printStar(num){
//     let star=""
//     for(i=1;i<=num;i++){
//         for (j=1; j<= num - i; j++){
//             star += " ";
//         }
//         for (k=0; k<2*i-1; k++){
//             star +="*";
//         }
//         star += "\n";
 
//     }
//     console.log(star);
// }
 
// printStar(5);
