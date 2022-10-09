function reverseAnArrayOfNumbers(number, arrayOfNumbers) {

    let newArray = [];

    for (i = 0; i < number; i++) {
        newArray.push(arrayOfNumbers[i])
    }

    let saveToResult = '';

    for(n=newArray.length-1; n>=0; n--){
        
        saveToResult += `${newArray[n].toString()} `

    }

    console.log(saveToResult)
}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])