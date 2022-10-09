function specialNumbers(num){
 
    let n = Number(num);
    let sum = 0
    let isTrue = false
 
    for (let i = 1; i <= n; i++) {
        let firstGigit = parseInt(i / 10)

        let secGigit = parseInt(i % 10)
       
       sum = firstGigit + secGigit
       if (sum == 5 || sum == 7 || sum == 11) {
           isTrue = true
             console.log(`${i} -> True`)
       } else {
           isTrue = false
             console.log(`${i} -> False`)
       }    
    }
}
specialNumbers(15)