function perfectNumber(number) {

    let divisors = [];

    // syzdavane na masiv ot delitelite

    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i)
        }
    }
  

    //sybirane na elementite ot masiva

    let lengthOfArray = divisors.length;
    let sumOfDivisors = 0;

    for (let s = 0; s < lengthOfArray; s++) {
        sumOfDivisors += divisors[s];
    }

    if (sumOfDivisors === number) {
        console.log(`We have a perfect number!`)
    } else {
        console.log(`It's not so perfect.`)
    }
}
perfectNumber(28)