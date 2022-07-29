function schoolPlay(temperature, Raining){
    if (temperature>=20 && temperature<=25 && !Raining){
        console.log("Children can go to the park");
    }
    else if(temperature>=18 && temperature<=20 && Raining){
        console.log("Children can't go to the park");
    }
    else {
        console.log("Children can stay at play home");
    }
}

schoolPlay(22, false);
schoolPlay(19, true);
schoolPlay(40, false);


