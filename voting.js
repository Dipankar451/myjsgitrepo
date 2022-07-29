// voting age check

function votingAge(age){
    if (age>=18) {
       return true;
    }
    else{
        return false;
    }
}

console.log(votingAge(20));

console.log(votingAge(15));



