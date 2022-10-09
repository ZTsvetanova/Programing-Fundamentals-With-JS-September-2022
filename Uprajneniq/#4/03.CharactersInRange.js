function charactersInRange(firstChar, secondChar) {

    let firstNumber = firstChar.charCodeAt();         
    let secondNumber = secondChar.charCodeAt();

    let smallNumber = 0;
    let bigNumber = 0;

    let concatenationSum = ''

    if (firstNumber < secondNumber) {               
        smallNumber = firstNumber;
        bigNumber = secondNumber;
    } else {
        smallNumber = secondNumber;
        bigNumber = firstNumber;
    }

    function loop(smallNumber, bigNumber) {              
        for (let i = smallNumber + 1; i < bigNumber; i++) {

            let numberToChar = String.fromCharCode(i);
            concatenationSum += `${numberToChar} `
        }
    }
    loop(smallNumber, bigNumber)

    console.log(concatenationSum)

}
charactersInRange('C','#')