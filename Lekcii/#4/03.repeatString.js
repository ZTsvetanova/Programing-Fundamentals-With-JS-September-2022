function repeatString(string, repeat){

    let sumOfString = '';

    for(let c=1; c<=repeat; c++){
        sumOfString += string;
    }
    console.log(sumOfString)

}
repeatString("String", 2)