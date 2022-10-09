function arrayRotation(array, rotations){

    for(i=0; i<rotations; i++){
        let numberToMoveBack = array.shift();
        array.push(numberToMoveBack)
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)