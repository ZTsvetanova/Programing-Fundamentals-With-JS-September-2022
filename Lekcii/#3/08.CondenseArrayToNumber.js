function condenseArrayToNumber(arrayOfNumbers) {

    let firstNumber = 0;
    let secondNumber = 0;
    let sumOfNumbers = 0;
    let arrayToSaveTheElements = [];

    for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers.length === 1) {
            console.log(Number(arrayOfNumbers[0]));
            break;
        }
        firstNumber = arrayOfNumbers[i];
        if (i + 1 !== arrayOfNumbers.length) {
            secondNumber = arrayOfNumbers[i + 1];
        } else {
            firstNumber = 0;
            secondNumber = 0;
        }
        sumOfNumbers = firstNumber + secondNumber;
        if (sumOfNumbers !== 0) {
            arrayToSaveTheElements.push(sumOfNumbers);
        }
        if (arrayToSaveTheElements.length === arrayOfNumbers.length - 1) {
            arrayOfNumbers = arrayToSaveTheElements;
            arrayToSaveTheElements = [];
            i = -1;
        }
      
    }
}


condenseArrayToNumber([5])
condenseArrayToNumber([2,10,-3,])
condenseArrayToNumber([5,0,4,1,2])