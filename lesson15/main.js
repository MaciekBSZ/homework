// 1
const firstLoopFirstTask = (startNumber, condition) => {
    if (startNumber < condition) {
        for (let i = startNumber; i <= condition; i++) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (let i = startNumber; i >= condition; i--) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log("Podaj inne argumenty");
    }
}
firstLoopFirstTask(1, 9);
console.log('Kolejna pętla');
firstLoopFirstTask(5, 15);
console.log('Kolejna pętla');
firstLoopFirstTask(9, 1)
console.log('Kolejna pętla');
firstLoopFirstTask(0, -10);
const secondLoopFirstTask = (startNumber, condition) => {
    if (startNumber < condition) {
        for (let i = startNumber; i <= condition; i += 2) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (let i = startNumber; i >= condition; i -= 4) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log("Podaj inne argumenty");
    }
}
secondLoopFirstTask(1, 20);
console.log('Kolejna pętla');
secondLoopFirstTask(10, -10);
const thirdLoopFirstTask = (startNumber, condition) => {
    if (startNumber > 0) {
        for (let i = startNumber; i <= condition; i *= 2) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log('Podaj pierwszą liczbę większą nić 0, bo inaczej przeglądarka wpadnie w limbo ;)');
    }
}
thirdLoopFirstTask(1, 100);

// Dwa ostatnie podpunkty mogłem napisać zwykłą pętlą, ale już wolałem iśc za ciosem i napisać całe zadanie tak samo.  ;)

// 2
console.log("Zadanie nr. 2");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Wyświetlono liczbę ${i}`);
    }
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(`Wyświetlono liczbę ${i}`);
    }
}
const evenOdd = i => {
    console.log(i % 2 === 0 ? `Wyświetlono liczbę ${i}` : 'Liczba nieparzysta');
}
for (let i = 1; i <= 10; i++) {
    evenOdd(i);
}

const fizzBuzz = i => {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz ${i}`);
    } else if (i % 3 === 0) {
        console.log(`Fizz ${i}`);
    } else if (i % 5 === 0) {
        console.log(`Buzz ${i}`);
    } else {
        console.log(`${i}`);
    }
}
for (let i = 1; i <= 30; i++) {
    fizzBuzz(i);
}

for (let i = 100; i > 0; i -= 5) {
    if (i % 10 === 0) {
        console.log(`${i} jest podzielne przez 10`);
    }
}

// 3
console.log('Zadanie nr. 3');

const countdownToZero = endNumber => {
    for (let i = 0; i <= endNumber; i++) {
        console.log(`Aktualnie jest cyfra ${i}`);
    }
}
const countdownToFifteen = startNumber => {
    if (startNumber < 15) {
        for (let i = startNumber; i <= 15; i++) {
            console.log(`Aktualnie jest cyfra ${i}`);
        }
    } else if (startNumber > 15) {
        for (let i = startNumber; i >= 15; i--) {
            console.log(`Aktualnie jest cyfra ${i}`);
        }
    } else {
        console.log('Podaj liczbę inną niż 15');
    }
}
// Generalnie to jest ta sama funkcja którą zadeklarowałem w pierwszym zadaniu.
const randomLoop = (startNumber, condition) => {
    if (startNumber < condition) {
        for (let i = startNumber; i <= condition; i++) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (let i = startNumber; i >= condition; i--) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log("Podaj inne argumenty");
    }
}

const threeArgumentLoop = (startNumber, condition, iteration) => {
    if (startNumber < condition) {
        for (let i = startNumber; i <= condition; i += iteration) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (let i = startNumber; i >= condition; i -= iteration) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log('Podaj inne wartości');
    }
}
// 4
console.log('Zadanie nr. 4');
const arr = ['Jabłko', 'Pyra', 'Kartofel', 'Ziemniak', 'Pomarańcza'];
arr.forEach((el, i) => console.log(`${i+1} elementem tablicy jest ${el}`))
const names = ['Maciek', 'Bartek', 'Michał', 'Mateusz', 'Mariusz', 'Arek'];
names.forEach(el => (console.log(`Siemanko ${el}!`)));
const objects = [{
        model: 'Mercedes',
        color: 'srebrny'
    },
    {
        model: 'Ford',
        color: 'czerwony'
    },
    {
        model: 'Alfa-romeo',
        color: 'czarna'
    }
]

objects.forEach(({
        model,
        color
    }) =>
    console.log(`A oto przed Państwem ${color} ${model}!`));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(i => {
    if (i % 2 === 0) {
        console.log(`Wyświetlono cyfre ${i}`);
    }
})
const randomElements = [1, true, 'false', false, 4, 1, 5, 7, 'blablabka', 'randomowy', 'string'];
randomElements.forEach(el => {
    if (typeof el === 'string') {
        console.log(`Wyświetlono ${el}`);
    }
})

const newNuberArr = randomElements.filter(el => typeof el === 'number')

console.log('Zadanie nr. 5');

const arrNum = [5, 10, 15, 24, 7];
const arrSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Suma wynosi ${sum}`);
}

const oddEven = arr => {
    const even = arr.filter(el => el % 2 === 0)
    const odd = arr.filter(el => el % 2 !== 0)
    console.log(`Tablica parzysta ${even}`);
    console.log(`Tablica nieparzysta ${odd}`);
}


const randomString = "Rozrewolweryzowany";
const otherRandomString = "Banana";
const containsYOrNot = string => {
    string.includes('y') || string.includes('Y') ? console.log('Jest Y!') : console.log('nie ma');
}

const multiply = number => {
    let sum = number;
    for (let i = number - 1; i >= 1; i--) {
        sum *= i
    }
    console.log(sum)
}

const emptyArr2 = [];
const arrString = ['Lorem', 'Ipsum', 'Dolor', 'Cośtam', 'Ojtam'];
const arrNumber = [2, 4, 6, 1, 2, 6, 7, 1];

const concatenation = (arr, parameter) => {
    const check = arr[1];
    if (arr.length === 0) {
        console.log("Pusta tablica!");
    } else {
        if (parameter === 'string' && typeof check === 'string') {
            console.log(arr.join(''));
        } else if (parameter === 'number' && typeof check === 'number') {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log(`Suma cyfr ${arr.join(", ")} wynosi ${sum}`);
        } else {
            console.log("Parametr/y nieprawidłowy/e");
        }
    }
}


const drivers = [{
        name: 'Maciek',
        lastName: 'Ułanowicz',
        hasCar: true,
        hasDrivingLicence: true,
    },
    {
        name: 'Eustachy',
        lastName: 'Obsztyfitykulczykiewicz',
        hasCar: true,
        hasDrivingLicence: false,
    },
    {
        name: 'Kunegunda',
        lastName: 'Ab',
        hasCar: false,
        hasDrivingLicence: false,
    },
    {
        name: 'Zenobiusz',
        lastName: 'Bakłażanski',
        hasCar: false,
        hasDrivingLicence: true
    },
]

const drivingHome = obj => {
    if (obj[i].hasDrivingLicence && obj[i].hasCar) {
        console.log(`${obj[i].name} ma prawo jazdy i samochod, więc może Cie podwieźć z imprezy :)`)
    } else if (obj[i].hasDrivingLicence && obj[i].hasCar === false) {
        console.log(`${obj[i].name} ma prawo jazdy ale nie ma samochodu więc nie możę cię odwieźć z imprezy :/`)
    } else if (obj[i].hasDrivingLicence === false && obj[i].hasCar) {
        console.log(`${obj[i].name} ma samochod, ale nie ma prawa jazdy, wiec też Cie nie odwiezie :(`)
    } else {
        console.log(`${obj[i].name} nie ma prawa jazdy ani samochodu wiec jak ma Cię odwieźć? :/`)
    }
}

for (i = 0; i < drivers.length; i++) {
    drivingHome(drivers);
}
const anotherNumbersArray = [2, 5, 6, 2, 4];
const anotherStringArray = ['Jakieś', 'Randomowe', 'Stringi'];
const anotherEmptyArray = [];
const addElementToArray = (arr, element) => {
    if (arr.length === 0) {
        console.log("Tablica jest pusta!");
    } else {
        if (arr.includes(element)) {
            console.log("Element jest w tablicy!");
        } else {
            arr.push(element)
            console.log(`Nie było elementu ${element} w tablicy, ale nie martw się! Dodałem go! I teraz tablica wygląda tak ${arr.join(", ")} :)`);
        }
    }
}