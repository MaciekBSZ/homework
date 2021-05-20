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

// Jeśli podamy initialValue w tablicy, to pierwszy element będzie miał index równy 0.

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
// Funkcja some zwraca true, jeśli chociaż JEDEN element z tablicy spełnia warunek, a funkcja every zwraca true tylko, jeśli KAŻDY element spełnia warunek.
console.log('someObj', someObj, 'everyObj', everyObj);


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
            return console.log(`W tablicy ${obj} znajduje się element większy niż ${condition}`);
        }
    }
    return console.log(`W tablicy ${obj} nie znajduje się element większy niż ${condition}`);
}
const everyLoop = (obj, condition) => {
    for (let i in obj) {
        if (obj[i] < condition) {
            return console.log(`W tablicy ${obj} nie każdy element jest większy niż ${condition}`);
        }
    }
    return console.log(`W tablicy ${obj} każdy każdy element jest większy niż ${condition}`);
}

const randomArray = [1, 42, 55, 22, 'bakłażan', 2, 'rododendron', 'musztarda', true, false, false, 24];

const arraySum = (obj, initialValue = 0) => {
    const sumNumArr = obj.filter(el => typeof el === 'number').reduce((acc, el) => {
        return acc + el;
    }, initialValue)
    if (initialValue === 0) {
        console.log(`Suma liczb z tablicy ${obj.join(', ')} wynosi ${sumNumArr}`);
    } else if (initialValue > 0) {
        console.log(`Suma liczb z tablicy ${obj.join(', ')} powiększona o ${initialValue} wynosi ${sumNumArr}`);
    } else {
        console.log('Podaj inną wartość inicjalizującą');
    }
}
const minusFunction = (obj, initialValue = 0) => {
    const value = obj.reduce((acc, el) => {
        return acc -= el;
    }, initialValue);
    console.log(value);
}
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
    console.log(`Samochód ${this.model} wyprodukowany w ${this.yearOfProduction} posiada bak o pojemności 100litrów`);
}
Car.prototype.stop = function () {
    console.log('Czas na tankowanko!');
}