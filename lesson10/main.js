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
        return "Wybierz liczbe podzielną przez 3 lub 5"
    }
}