function equalArrays(arrayOne, arrayTwo){

    let correctPosition = 0;
    let incorrectPosition = 0;
    let sumOfNumbers = 0;
    let incorrectPoint = 0;

    for(i=0; i<arrayOne.length; i++){
        arrayOne[i] = Number(arrayOne[i])
    }

    for(k=0; k<arrayTwo.length; k++){
        arrayTwo[k] = Number(arrayTwo[k])
    }

    for(z=0; z<arrayOne.length; z++){

        if(arrayOne[z] === arrayTwo[z]){
            correctPosition++;
            sumOfNumbers += arrayOne[z];
        }else{
            incorrectPosition++;
            incorrectPoint = Number([z]);
            break;
        }
    }

    if(incorrectPosition === 0){
        console.log(`Arrays are identical. Sum: ${sumOfNumbers}`)
    }else{
        console.log(`Arrays are not identical. Found difference at ${incorrectPoint} index`);
    }
}
equalArrays(['7','2','3','4','7'], ['1','2','4','4','5'])