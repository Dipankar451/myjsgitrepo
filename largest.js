//dipankar

// program to find the largest among three numbers
const number1 = (50);
const number2 = (45);
const number3 = (75);
let largest;

// check the condition
if(number1 >= number2 && number1 >= number3) {
    largest = number1;
}
else if (number2 >= number1 && number2 >= number3) {
    largest = number2;
}
else {
    largest = number3;
}

// display the result
console.log("The largest number is " + largest);

// second syntax for find the largest number

function findLargest(number){
    const number1 = (50);
    const number2 = (45);
    const number3 = (75);
    let largest;

    // check the condition
    if(number1 >= number2 && number1 >= number3) {
        largest = number1;
    }
    else if (number2 >= number1 && number2 >= number3) {
        largest = number2;
    }
    else {
        largest = number3;
    }
}
// display the result
console.log("The largest number is " + largest);


// grading system

function gradeCard(score){
    if(score>=90){
        console.log("A");
    }
    else if(score>79 && score<90){
        console.log("B");
    }
    else if(score>59 && score<80){
        console.log("C");
    }
    else if(score>32 && score<60){
        console.log("D");
    }
    else {
        console.log("F");
    }
}
gradeCard(90);
gradeCard(82);
gradeCard(63);
gradeCard(52);
gradeCard(32);












