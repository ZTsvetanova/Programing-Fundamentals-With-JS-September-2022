function sumDigits(number) {

    let numberToString = number.toString();
    let sumOfDigits = 0;
    let lengthOfString = numberToString.length;

    for (let a = 0; a < lengthOfString; a++) {

        let numberOfPosition = Number(numberToString[a]);
        sumOfDigits += numberOfPosition
    }

    console.log(sumOfDigits)

}
sumDigits(245678)