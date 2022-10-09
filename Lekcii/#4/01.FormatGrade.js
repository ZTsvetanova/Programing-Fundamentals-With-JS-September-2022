function formatGrade(grade) {

    let gradeWithWord = '';

    function CheckTheGrade(grade) {
        if (grade < 3) {
            gradeWithWord = 'Fail';
        } else if (grade < 3.5) {
            gradeWithWord = 'Poor';
        } else if (grade < 4.5) {
            gradeWithWord = 'Good';
        } else if (grade < 5.5) {
            gradeWithWord = 'Very good';
        } else {
            gradeWithWord = 'Excellent'
        }
        return gradeWithWord;
    }
    CheckTheGrade(grade)
    function printTheGrade(gradeWithWord) {

        if (gradeWithWord === 'Fail') {
            console.log('Fail (2)')
        } else {
            console.log(`${gradeWithWord} (${grade.toFixed(2)})`)
        }
    }
    printTheGrade(gradeWithWord)
}
formatGrade(5.4)