function triplesOfLatinLetters(number) {

    for (let first = 0; first < number; first++) {

        for (let second = 0; second < number; second++) {

            for (let third = 0; third < number; third++) {

                let simbolOfFirstChar = String.fromCharCode(97 + first);
                let simbolOfSecondChar = String.fromCharCode(97 + second);
                let simbolOfThirdChar = String.fromCharCode(97 + third);
                let sumOfSimbol = simbolOfFirstChar + simbolOfSecondChar + simbolOfThirdChar;

                console.log(sumOfSimbol);
            }
        }
    }
}
triplesOfLatinLetters(4)