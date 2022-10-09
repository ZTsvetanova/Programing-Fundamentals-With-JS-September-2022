function commonElements(firstArray, secondArray){

    
    let firstLength = firstArray.length;
    let secondLength = secondArray.length;


    for(let first = 0; first<firstLength; first++){
        let firstElement = firstArray[first];
        for(let second = 0; second<secondLength; second++){
            let secondElement = secondArray[second];
            if(firstElement===secondElement){
                console.log(firstElement)
            }
        }
    }
}
commonElements(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)