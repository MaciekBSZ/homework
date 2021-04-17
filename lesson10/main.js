// 1
function sum(x, y, z) {
    return x + y + z;
}

function areaOfATriangle(a, h) {
    return `Pole trójkąta to ${a * h/2} czyli ma on ${a} długości podstawy i ${h} wysokości`
}

function drivingLicenceAge(age, ageOfExam) {
    return `Osoba ma ${age} lat, zdała prawo jazdy w wieku ${ageOfExam} lat, więc prawo jazdy posiada od ${age - ageOfExam} lat.`
}

function tripCost(fuelUsage, distanse) {
    return `Za jazde samochodem na dystansie ${distanse} kilometrów zużyjemy ${distanse * fuelUsage/100} litrów paliwa`
}

function parentsKids(name, age, kids) {
    return `${name} ma ${age} lata i ${kids} dzieci`
}
// 2
const myArray = [1, 3, 5];

function returnArr(arr) {
    return arr;
}

function secondElementOfArray(arr) {
    return arr[1];
}

function arrayLength(arr) {
    return `Przekazana tablica ma ${arr.length} elementy, a elementem nr 3 jest ${arr[2]}`
}

let emptyArray = [];

function addElementsToArray(arr) {
    arr.push("jakiś randomowy string");
    return arr;
}

const firstPerson = {
    name: 'Anna',
    secondName: 'Iksińska',
    age: 30,
}

function personName(person) {
    return person.name;
}

function personalDetails(name, secondName, age, heightInCm) {
    return `${name} ${secondName}, ma ${age} lat i ${heightInCm} cm wzrostu`
}

function changedAge(object, newAge) {
    object.age = newAge;
    return object.age;
}
//  3
function drivingLicense(age, license) {
    return age < 18 || license === false ? "Nie ma prawa jazdy" : "Możesz jeździć"
}

function shopping(string) {
    if (string === "Kup") {
        return "Widzę, że chcesz zrobić zakupy";
    } else if (string === "Sprzedaj") {
        return "Możesz tutaj swobodnie sprzedawać";
    } else {
        return "Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj";
    }
}

function number(x) {
    if (x > 0) {
        return `${x} jest większe od 0`;
    } else if (x < 0) {
        return `${x} jest mniejsze od 0`;
    } else if (x === 0) {
        return "Liczba jest równa 0";
    } else {
        return "Wpisz jakąś liczbe";
    }
}

function modulo(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return "FizzBuzz"
    } else if (x % 3 === 0) {
        return "Fizz";
    } else if (x % 5 === 0) {
        return "Buzz";
    } else {
        return "Wybierz liczbe podzielną przez 3 lub 5";
    }
}

function canWatchMovie(age, permission) {
    return age > 15 || permission ? "Możesz obejrzeć film! :)" : "Lepiej idź spać :(";
}

function yesNo(argument) {
    return argument ? 'Tak' : "Nie";
}

function modulo2(x) {
    if (x % 2 === 0 || x === 0) {
        return "Liczba jest parzysta";
    } else {
        return "Liczba jest nieparzysta";
    }
}
// 4
const car = {
    brand: 'Mercedes',
    model: 'Eclass',
    yearOfProduction: 2003,
    isCabrio: false
}

function carCheck(object) {
    const currentYear = (new Date).getFullYear();
    if (object.yearOfProduction > currentYear) {
        return 'Nie wyprodukowano tego auta :(';
    } else {
        return `Samochód marki ${object.brand}, model ${object.model} wyprodukowano w ${object.yearOfProduction} roku i ${(object.isCabrio ? "jest to kabriolet" : "nie jest to kabriolet")}`;
    }
}

const newArr = [1, 2, 3, 5, "blablabla"];
const emptyArr = [];

function arrayCheck(array) {
    return array.length > 0 ? `Tablica ma ${array.length} elementów` : 'Tablica jest pusta';
}

const randomPerson = {
    name: 'Grzegorz',
    secondName: 'Brzęczyszczykiewicz',
    age: 50,
    likesReadingBooks: true,
    likesWatchingTV: true,
    haveTV: true
}
const randomBook = {
    bookName: 'Digital Tower',
    genre: 'Thriller',
    pages: 400
}

function bookPersonCheck(person, book) {
    if (person.likesReadingBooks) {
        return `Cześć ${person.name}, polecam Ci przeczytać książkę ${book.bookName} ma tylko ${book.pages} stron i wciąga jak chomik gruszke!`
    } else if (person.likesReadingBooks === false && person.haveTV) {
        return 'Idź pooglądać telewizje'
    } else {
        return "Nie wiem co Ci zaproponować."
    }
}