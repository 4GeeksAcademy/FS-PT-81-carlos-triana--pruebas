const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test("un euro beberia ser 1.07 dollar",() =>{
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected); 
})

test("un dollar deberia ser 156.5 yenes",() =>{
    const expected = 5.5 * 156.5;
    expect(fromDollarToYen(5.5)).toBe(expected);
})

test("un yen no deberia ser 1 pound",() =>{
    const expected = 10 * 0.87;
    expect(fromYenToPound(10)).toBe(expected);
})
