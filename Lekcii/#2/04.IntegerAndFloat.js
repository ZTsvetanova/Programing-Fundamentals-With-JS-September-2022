function integerAndFloat(firstNumber, secondNumber, thirdNumber){

    let sumOfNumbers = firstNumber+secondNumber+thirdNumber;

    sumOfNumbers%1===0 ? sumOfNumbers+= ' - Integer' : sumOfNumbers+= ' - Float';

    console.log(sumOfNumbers)
}
integerAndFloat(100.1, 200, 303)