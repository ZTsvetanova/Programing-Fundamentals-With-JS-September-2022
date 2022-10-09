function vacantion(groupOfPeople, typeOfGroup, dayOfTheWeek) {

    let totallPrice = 0;
    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfTheWeek === "Friday") {
                price = 8.45;
            } else if (dayOfTheWeek === "Saturday") {
                price = 9.80;
            } else if (dayOfTheWeek === "Sunday") {
                price = 10.46;
            }
            totallPrice = price * groupOfPeople;
            if (groupOfPeople >= 30) {
                totallPrice = totallPrice * 0.85
            }
            break;
        case "Business":
            if (groupOfPeople >= 100) {
                groupOfPeople = groupOfPeople - 10;
            }
            if (dayOfTheWeek === "Friday") {
                price = 10.90;
            } else if (dayOfTheWeek === "Saturday") {
                price = 15.60;
            } else if (dayOfTheWeek === "Sunday") {
                price = 16;
            }
            totallPrice = price * groupOfPeople;
            break;
        case "Regular":
            if (dayOfTheWeek === "Friday") {
                price = 15;
            } else if (dayOfTheWeek === "Saturday") {
                price = 20;
            } else if (dayOfTheWeek === "Sunday") {
                price = 22.50;
            }
            totallPrice = price * groupOfPeople;
            if (groupOfPeople >= 10 && groupOfPeople <=20) {
                totallPrice = totallPrice * 0.95
            }
            break;

    }
    console.log(`Total price: ${totallPrice.toFixed(2)}`)

}
vacantion(40,
    "Regular",
    "Saturday"
    )