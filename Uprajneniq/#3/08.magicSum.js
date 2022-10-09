function magicSum(arrayOfNumbers, number) {

    let lengthOfArray = arrayOfNumbers.length;
    let firstNumber = 0;
    let secondNumber = 0;

    for (let i = 0; i < lengthOfArray - 1; i++) {
        firstNumber = arrayOfNumbers[i]
        for (let s = 1; s < lengthOfArray; s++) {
            if (s > i) {
                secondNumber = arrayOfNumbers[s];
                if (firstNumber + secondNumber === number) {
                    console.log(`${firstNumber} ${secondNumber}`)
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)