function evenAndOddSubtraction(numbers) {

    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (i = 0; i < numbers.length; i++) {

        let char = numbers[i];
        if (char % 2 === 0) {
            sumOfEven += char;
        } else {
            sumOfOdd += char;
        }
    }
    console.log(sumOfOdd - sumOfEven)
}
evenAndOddSubtraction([1,2,3,4,5,6])