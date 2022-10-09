function equalSums(arrayOfNumbers){

    let lengthArray = Number(arrayOfNumbers.length);
    let leftSum = 0;
    let rightSum = 0;
    let indexOfNumber = '';

    for(let i=0; i<lengthArray; i++){
        for(let l = 0; l<i; l++){
            
            leftSum += arrayOfNumbers[l];
        }
        for(let r = lengthArray-1; r>i; r--){
            rightSum += arrayOfNumbers[r]
        }

        if(leftSum===rightSum){
            indexOfNumber = Number(i)
            console.log(`${indexOfNumber}`)
        }


        // console.log(leftSum);
        // console.log(rightSum);
        // console.log('---');
        leftSum=0;
        rightSum=0;
    }
    if(indexOfNumber===''){
        console.log(`no`)
    }
}
equalSums([10, 4, 7])