function divisibleByThree(){

    for (let n = 1; n <=100; n++) {
        let number = n%3
        if(number===0){
            console.log(n);
        }
        
    }

}
divisibleByThree()