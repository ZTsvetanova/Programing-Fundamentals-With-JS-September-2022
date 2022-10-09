function triangleOfNumbers(number) {

    for (let a = 1; a <= number; a++) {
        let row = ''
        for (let b = 1; b <= a; b++) {
            row += `${a} `
        }
        console.log(row)
    }
}
triangleOfNumbers(3)