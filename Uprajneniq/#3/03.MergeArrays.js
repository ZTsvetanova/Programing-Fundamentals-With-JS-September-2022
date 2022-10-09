function mergeArrays(firstArray, secondArray) {

    let firstLength = firstArray.length;
    let sumOfElements = ''
    let thirdArray = [];

    for (let first = 0; first < firstLength; first++) {
        let firstElement = firstArray[first];
        let secondElement = secondArray[first];

        if (first % 2 === 1) {
            sumOfElements = firstElement + secondElement
        } else {
            sumOfElements = Number(firstElement) + Number(secondElement)
        }
        thirdArray.push(sumOfElements)
    }
    console.log(thirdArray.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)