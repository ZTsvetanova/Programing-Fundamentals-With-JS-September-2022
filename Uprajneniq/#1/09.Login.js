function login(input) {

    let username = input[0];
    let index = 1
    let pass = input[index];
    let passA = (username.length - 1);
    let position = '';
    let correctPass = '';
    let count = 1;

    for (let a = passA; a >= 0; a--) {

        position = username.charAt(a)

        correctPass += position;


    }
    //console.log(correctPass)

    while (pass !== correctPass && count < 4) {
        console.log(`Incorrect password. Try again.`);
        count++;
        index++;


    }
    //console.log(pass)
    pass = input[index];
    if (pass === correctPass) {
        console.log(`User ${username} logged in.`)

    } else {
        console.log(`User ${username} blocked!`);

    }
}
login(['sunny',
    'rainy',
    'cloudy',
    'sunny',
    'not sunny'])
login(['Acer',
    'login',
    'go',
    'let me in',
    'recA'])