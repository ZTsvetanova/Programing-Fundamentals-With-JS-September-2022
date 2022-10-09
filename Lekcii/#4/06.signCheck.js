function signCheck(numOne, numTwo, numThree ){

    let count = 0;

    function one(numOne){
        if(numOne<0){
            count++
        }
    }
    one(numOne)

    function two(numOne){
        if(numTwo<0){
            count++
        }
    }
    two(numTwo)

    function three(numOne){
        if(numThree<0){
            count++
        }
    }
    three(numThree)

    function check(count){

        if(count%2===0){
            console.log('Positive')
        }else{
            console.log('Negative')
        }
    }
    check(count)

}
signCheck(-6,-12,-14)