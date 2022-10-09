function simpleCalculator(numOne, numTwo, operator) {

    let sumAfterCalculate = 0;

    switch (operator) {
        case 'multiply':
            sumAfterCalculate = numOne * numTwo;
            break;
        case 'divide':
            sumAfterCalculate = numOne / numTwo;
            break;
        case 'add':
            sumAfterCalculate = numOne + numTwo;
            break;
        case 'subtract':
            sumAfterCalculate = numOne - numTwo;
            break;
    }

    function printTheResult(sum){
        console.log(sumAfterCalculate)
    }
    printTheResult(sumAfterCalculate)
}
simpleCalculator(5, 5, 'multiply')