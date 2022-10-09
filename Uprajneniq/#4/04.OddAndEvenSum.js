function oddAndEvenSum(number){

    let numberToString = number.toString();

    let lengthOfString = numberToString.length;
    let evenSum = 0;
    let oddSum = 0;

    for(let i=0; i<lengthOfString; i++){

        let stringToNumber = Number(numberToString[i]);

        if(stringToNumber%2===0){
            evenSum += stringToNumber;
        }else{
            oddSum += stringToNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(3495892137259234)