function amazingNumbers(number) {

    number = number.toString();
    let sumOfChar = 0;

    for (let i = 0; i < number.length; i++) {
        sumOfChar += Number(number[i]);
    }

    let result = sumOfChar.toString().includes('9');

    console.log(result ?
        `${number} Amazing? True` :
        `${number} Amazing? False` );
}
amazingNumbers(55333)