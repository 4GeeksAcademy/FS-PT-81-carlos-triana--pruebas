
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (eur) =>{
    return (eur*oneEuroIs['USD'])
}
console.log(fromEuroToDollar(1))


const fromDollarToYen = (dollar) => {fromEuroToDollar(dollar)*oneEuroIs['JPY']
    return (dollar*oneEuroIs['JPY'])
}
console.log(fromDollarToYen(1))


const fromYenToPound = (yenes) => {fromDollarToYen(yenes)*oneEuroIs['GBP']
    return (yenes*oneEuroIs['GBP'])
}
console.log(fromYenToPound(1))


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}