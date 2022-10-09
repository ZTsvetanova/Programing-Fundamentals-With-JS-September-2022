function addAndSubtract(first, second, last){

    let sum = 0; 
    let sumAfterAdd = 0;

    function add(first, second){

        sumAfterAdd = first+second;
        return sumAfterAdd;
    }
    add(first, second)

    function subtract(first, second){

        sum = first - second;
        console.log(sum)

    }
    subtract(sumAfterAdd, last)

}
addAndSubtract(23, 6, 10 )