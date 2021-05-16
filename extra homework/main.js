'use strict'
const rentalCarCompany = [{
        name: 'audi',
        allCarsNumber: 70,
        carsToRent: 30,
        price: 140,
    },
    {
        name: 'fiat',
        allCarsNumber: 120,
        carsToRent: 120,
        price: 90,
    },
    {
        name: 'bwm',
        allCarsNumber: 50,
        carsToRent: 50,
        price: 430,
    },
    {
        name: 'ferrari',
        allCarsNumber: 3,
        carsToRent: 1,
        price: 1200,
    },
    {
        name: 'mustang',
        allCarsNumber: 13,
        carsToRent: 3,
        price: 650,
    },
    {
        name: 'mercedes',
        allCarsNumber: 22,
        carsToRent: 12,
        price: 340,
    },
]

const sortedNames = obj => {
    const names = obj.sort((a, b) => a.name.localeCompare(b.name));
    console.log(names);
}

const filteredByPrice = obj => {
    const priceLowerThan400 = obj.filter(el => el.price < 400);
    console.log(priceLowerThan400);
}

const sortedByPrice = obj => {
    const priceFromLowestToHighest = obj.sort((x, y) => x.price - y.price);
    console.log(priceFromLowestToHighest);
};

const allCarsAvalible = obj => {
    const avalibleAllCars = obj.filter(el => el.carsToRent === el.allCarsNumber);
    console.log(avalibleAllCars);
};
const fromHighestAvailabilityToLowest = obj => {
    const avalibleCars = obj.sort((x, y) => y.carsToRent - x.carsToRent);
    console.log(avalibleCars);
};
const canIRentACarForAWeek = obj => {
    const rentForA3500 = obj.filter(el => 3500 / el.price > 7)
    console.log(rentForA3500);
};
const mostOfterRent = obj => {
    const rentedMostOften = obj.sort((x, y) => (y.allCarsNumber / y.carsToRent) - (x.allCarsNumber / x.carsToRent)).slice(0, 3);
    console.log(rentedMostOften);
};
sortedNames(rentalCarCompany);
filteredByPrice(rentalCarCompany);
sortedByPrice(rentalCarCompany);
allCarsAvalible(rentalCarCompany);
fromHighestAvailabilityToLowest(rentalCarCompany);
canIRentACarForAWeek(rentalCarCompany);
mostOfterRent(rentalCarCompany);