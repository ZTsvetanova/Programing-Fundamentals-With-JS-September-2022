function printAndSum(firstNumber, secondNumber){

    let sumOfNumbers = 0;
    let numbers = ''

    for (let n=firstNumber; n <= secondNumber; n++) {    
        numbers += `${n} `
        sumOfNumbers +=n;  
    }
    console.log(numbers);
    console.log(`Sum: ${sumOfNumbers}`)

}
printAndSum(5, 10)