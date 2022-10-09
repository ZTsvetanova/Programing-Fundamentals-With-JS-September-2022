function reverseInPlace(arrayOfStrings) {

    for (let i = 0; i < arrayOfStrings.length / 2; i++) {

        let saveTheString = arrayOfStrings[i];

        arrayOfStrings[i] = arrayOfStrings[arrayOfStrings.length - 1 - i];
        arrayOfStrings[arrayOfStrings.length - 1 - i] = saveTheString;

    }
    console.log(arrayOfStrings.join(' '))

}
reverseInPlace(['33', '123', '0', 'dd', 'abv'])