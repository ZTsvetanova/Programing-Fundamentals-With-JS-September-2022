function matrix(number){

    let row = '';

    for(r=0; r<number; r++){
        for(c=0; c<number; c++){
         row += `${number} `;         
        }
        console.log(row);
        row = '';
    }
}
matrix(7)