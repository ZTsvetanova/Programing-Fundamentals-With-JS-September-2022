function rounding(number, specific){

    if(specific>=15){
        specific=15;
    }

    console.log(parseFloat(number.toFixed(specific)))

}
rounding(3.14159265358979323846264338327953578943567, 17)