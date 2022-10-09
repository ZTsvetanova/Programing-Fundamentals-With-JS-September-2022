function requiredReading(numberOfPages, pagesInOneHour, daysToReadBook){

    let needHours = numberOfPages/pagesInOneHour;
    let needHoursToOneDay = needHours/daysToReadBook;
    console.log(needHoursToOneDay)

}
requiredReading(212,
    20 ,
    2 
    )