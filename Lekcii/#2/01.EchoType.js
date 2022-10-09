function echoType (input){

let parametar = input;
let type = typeof parametar;
console.log(type);

if (type == 'number' || type == 'string'){
    console.log(parametar)
}else{
    console.log("Parameter is not suitable for printing")
}

}
echoType(7)