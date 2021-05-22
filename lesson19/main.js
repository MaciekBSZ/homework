const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = array.reduce((acc, el) => {
    return acc + el;
})
console.log(`Suma liczb ze zbioru liczb ${array.join(', ')} wynosi ${sum}`);

const even = array.reduce((acc, el) => {
    if (el % 2 === 0) {
        acc += el;
    }
    return acc;

}, 0)
console.log(`Suma liczb parzystych z zbioru liczb ${array.join(', ')} wynosi ${even}`);

const sumPlus10 = array.reduce((acc, el) => {
    return acc + el;
}, 10)

console.log(`Suma liczb ze zbioru liczb ${array.join(', ')} powiększona o 10 wynosi ${sumPlus10}`);
// Jeśli podamy initialvalue, to stanie się ona accumulatorem, a jeśli nie podamy tej wartosci, to acc będzie pierwszą wartością z tablicy.

// Index zawsze będzie wynosił 0, bez znaczenia czy podamy initialValue, czy nie.

function reduceLoop(reduceFunction, initialValue) {
    let value = initialValue;
    for (let i in array) {
        const item = array[i];
        value = reduceFunction(value, item);
    }
    return value;
}
const sumArr = reduceLoop(function (acc, next) {
    return acc + next;
}, 0);
console.log(sumArr);


const someArray = [11, 3, 5, 31, 31, 54, 23, 14];


const someObj = someArray.some(el => {
    return el > 50;
});

const everyObj = someArray.every(el => {
    return el > 2;
});
console.log('someObj', someObj, 'everyObj', everyObj);

// Funkcja some zwraca true, jeśli chociaż JEDEN element z tablicy spełnia warunek, a funkcja every zwraca true tylko, jeśli KAŻDY element spełnia warunek.


const modulo7 = obj => {
    const trueFalse = obj.some(el => {
        return el % 7 === 0 ? true : false;
    })
    trueFalse ? console.log('w tablicy znajduje się element podzielny przez 7! :)') : console.log('w tablicy nie ma elementu podzielnego przez 7 :(');
}
modulo7(someArray);

const someLoop = (obj, condition) => {
    for (let i in obj) {
        if (obj[i] > condition) {
            return true
        }
    }
    return false
}
const everyLoop = (obj, condition) => {
    for (let i in obj) {
        if (obj[i] <= condition) {
            return true
        }
    }
    return false
}

const randomArray = [1, 42, 55, 22, 'bakłażan', 2, 'rododendron', 'musztarda', true, false, false, 24];

const arraySum = (obj, initialValue = 0) => {
    const sumNumArr = obj.filter(el => typeof el === 'number').reduce((acc, el) => {
        return acc + el;
    }, initialValue)
    console.log(sumNumArr);
}
const minusFunction = (obj, initialValue = 0) => {
    const value = obj.reduce((acc, el) => {
        return acc - el
    }, initialValue);
    console.log(value);
}

const minusFunction2 = (obj, initialValue = 0) => {
    obj.reduce((acc, el) => {
        console.log(`Wynik odejmowania cyfr ${el} i ${obj[acc + 1]} wynosi  ${el - obj[acc + 1]}`);
        return acc + 1;
        // W ostatnim wywala mi undefined. Wiem czemu, ale nie wiem jak to poprawić. :/
    }, initialValue);
}

// Nie wiem, czy dobrze zrozumiałem polecenie, czy ta funkcja miała odejmować po kolei od siebie cyfry, czy każdą poprzednia cyfre od kolejnej, wiec zrobiłęm dwie. :D

const lookingForANumber = (obj, number) => {
    const someNum = obj.some(el => {
        return el === number;
    })
    return someNum;
}

function Car(model, yearOfProduction, color) {
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.color = color;
    this.drive = () =>
        console.log('WRUM!');
}

const merol = new Car('E-klasa', 2010, 'srebrny');
const smieciarka = new Car('Śmieciowóz5000', 2021, 'czarny-mat');

// Słowo "New" tworzy nowy element na podstawie wcześniej zadeklarowanego konstruktora

Car.prototype.tankFuel = function () {
    console.log(`${this.model} potrzebuje tankowanka!`);
}
Car.prototype.stop = function () {
    console.log('Gdzie jedziesz?!');
}