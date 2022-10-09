function addAndSubtract(arrayOfNumbers) {

    let lengthOfArray = arrayOfNumbers.length
    let sumOfNumbersInArray = 0;
    let sumOfNumbersOfNewArray = 0;

    for (let old = 0; old < lengthOfArray; old++) {
        sumOfNumbersInArray += Number(arrayOfNumbers[old])      //sum of numbers of array
    }
    //odd or even
    for (let i = 0; i < lengthOfArray; i++) {
        let index = Number(i);

        if (arrayOfNumbers[i] % 2 === 0) {
            arrayOfNumbers[i] = arrayOfNumbers[i] + index;   //even-add index position
        } else {
            arrayOfNumbers[i] = arrayOfNumbers[i] - index;   //odd-subtract index position
        }
    }

    for (let n = 0; n < lengthOfArray; n++) {
        sumOfNumbersOfNewArray += Number(arrayOfNumbers[n])      //sum of number of modification array
    }

    console.log(arrayOfNumbers);
    console.log(sumOfNumbersInArray);
    console.log(sumOfNumbersOfNewArray);
}
addAndSubtract([5, 15, 23, 56, 35])