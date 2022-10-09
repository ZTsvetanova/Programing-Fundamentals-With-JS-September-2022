function loadingBar(percent){

    let readyOfAll = '';
    if(percent === 100){
        readyOfAll = '100% Complete!'
    }else{
        readyOfAll = 'Still loading...'
    }

    let quantityPercentSymbol = percent/10;
    let quantityPointsSymbol = 10-quantityPercentSymbol;
    let charsOfPercent = '%'.repeat(quantityPercentSymbol);
    let charsOfPoints = '.'.repeat(quantityPointsSymbol)
  
   

    if(percent<100){
        console.log(`${percent}% [${charsOfPercent}${charsOfPoints}]`);
        console.log(`${readyOfAll}`)
    }else{
        console.log(`${readyOfAll}`)
    }
}
loadingBar(100)