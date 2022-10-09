function maxNumber(arrayOfNumbers) {

    let lengthOfArray = arrayOfNumbers.length;
    let result = ''

    for (let i = 0; i < lengthOfArray; i++) {
        let number = arrayOfNumbers[i];
        for (let n = i; n < lengthOfArray; n++) {
            let rightNumber = arrayOfNumbers[n+1];
            if (rightNumber >= number) {
                break;
            }
            if (n === lengthOfArray - 1) {
                result += `${number.toString()} `
            }
        }
    }
    console.log(result)
}
maxNumber([14, 24, 24, 3, 19, 15, 17])