function factorialDivision(firstNumber, secondNumber){

    let factorialOfFirstNum = firstNumber;
    let factorialOfSecondNum = secondNumber;

    for(f=1; f<firstNumber;f++){

        let firstMultiplier = (firstNumber-f);
        factorialOfFirstNum = firstMultiplier*factorialOfFirstNum; 
    }
    

    for(s=1; s<secondNumber; s++){

        let secondMultiplier = (secondNumber-s);
        factorialOfSecondNum = secondMultiplier*factorialOfSecondNum; 
    }
    console.log((factorialOfFirstNum/factorialOfSecondNum).toFixed(2))
    

}
factorialDivision(6, 2)