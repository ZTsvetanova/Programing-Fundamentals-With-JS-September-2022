function sumOfOddNumbers(number) {

    let sumOfOddNumbers = Number(0);
    let count = Number(0);

   for (let n = 1; count!=number; n++) {
   
         if (n % 2) {
             console.log(n);
             sumOfOddNumbers += n;
             count++;
  
     }
   }
    console.log(`Sum: ${sumOfOddNumbers}`)
}
sumOfOddNumbers(9)