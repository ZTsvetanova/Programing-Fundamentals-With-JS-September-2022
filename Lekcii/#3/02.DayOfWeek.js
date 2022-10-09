function dayOfWeek(number) {

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let i = 0; i < 7; i++) {
        if (number - 1 === i) {
            console.log(weekDays[i])
        }
    }
    if (number > 7) {
        console.log('Invalid day!')
    }
}
dayOfWeek(7)