function sumEvenNumbers(arrayOfStrings){

    let result = 0;

    for(i=0; i<arrayOfStrings.length; i++){

        let stringToNumber = Number(arrayOfStrings[i]);

        if(stringToNumber%2===0){
            result += stringToNumber
        }
    }
    
    console.log(result);
}
sumEvenNumbers(['1','2','3','4','5','6'])