function palindromeIntegers(arrayOfNumbers){
    
    let lengthOfArray = arrayOfNumbers.length;

    for(let i=0; i<lengthOfArray; i++){

        let number = arrayOfNumbers[i];
        let numberAsString = number.toString();
        let reverseStringToArray = numberAsString.split('').reverse().join('');
        
       if(numberAsString == reverseStringToArray){
       console.log(`true`);
       }else{
        console.log(`false`);
       }
    }
}
palindromeIntegers([123,323,421,121])