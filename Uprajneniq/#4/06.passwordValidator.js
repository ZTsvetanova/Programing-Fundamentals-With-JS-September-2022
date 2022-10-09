function pass(pass) {

    let errorCount = 0;
    let count = 0;


    let lengthOfPass = pass.length;
    if (lengthOfPass > 10 || lengthOfPass < 6) {
        console.log("Password must be between 6 and 10 characters")
        errorCount++;
    }

    let toUpperCase = pass.toUpperCase();
    let digitsCount = 0;

    for (let i = 0; i < lengthOfPass; i++) {

        let charOfPass = toUpperCase[i];
        let numberOfChar = charOfPass.charCodeAt();

        if (numberOfChar > 47 && numberOfChar < 58) {
            digitsCount++;
        }

        if (!(numberOfChar >= 48 && numberOfChar <= 57) && !(numberOfChar >= 65 && numberOfChar <= 90)) {

            if (count === 0) {
                console.log("Password must consist only of letters and digits");
                errorCount++;
                count++;
            }
        }
    }

    if (digitsCount < 2) {
        console.log("Password must have at least 2 digits")
        errorCount++;
    }

    if (errorCount === 0) {
        console.log(`Password is valid`)
    }

}
pass('MyPa$$123')