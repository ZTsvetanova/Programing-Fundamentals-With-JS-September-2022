function maxSequenceOfEqualElements(arrayOfNumbers) {

    let lengthOfArray = arrayOfNumbers.length;
    let firstNumber = 0;
    let secondNumber = 0;
    let firstSum = [];
    let secondSum = [];

    for (let i = 0; i < lengthOfArray; i++) {

        firstNumber = arrayOfNumbers[i];
        secondNumber = arrayOfNumbers[i + 1]

        if (firstSum.length === 0) {
            firstSum.push(firstNumber)
        }

        if (firstNumber === secondNumber) {
            firstSum.push(secondNumber)
        } else {
            firstSum = [];
        }
        if (firstSum.length > secondSum.length) {
            secondSum = firstSum;
            
        }
        if(secondNumber!==arrayOfNumbers[i+2]){
            firstSum = []
        }
    }
    console.log(secondSum.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 1, 2, 3, 1, 3, 3])