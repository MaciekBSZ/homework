// 1
const firstName = "Karol";
let age = 40;
let isOpen = true;
let stringBoolean = 'true';
let stringNumber = '100';
// 2
console.log('Michał');
console.log('Hello Ania');
console.log(4);
console.log(false);
// 3
console.log(firstName);
console.log(age);
console.log(isOpen);
console.log(stringBoolean);
console.log(stringNumber);
// 4
console.log(2 + 2);
console.log(`Michał`, 'Kowalski');
console.log(2 + 2 * 2);
// 5
const x = 1;
const y = 4;
const add = x + y;
console.log(`'wynik', ${add}`);
// 6
let number = 1;
number = 'number';
number = false;
console.log(number);
// 7
function taskAdd() {
    return 2 + 2;
}

function taskString() {
    return 'Hello World!';
}

function taskTrue() {
    return true;
}

function taskModulo() {
    return 6 % 4;
}

function taskPower() {
    return 3 ** 4;
}

function taskHello() {
    return 'Hello, ' + 'How are you?'
}

function taskMultiply() {
    return 5 * 60;
}

function taskMultiply2() {
    return 3 * 3600;
}

function taskMultiplyDivide() {
    return 10 * 9 / 2;
}

function taskSubtraction() {
    return 200 - 10;
}


// 8
const numbers = [1, 2, 3];
const cars = ['Mercedes', 'Audi', 'Trabant', 'Fiat', 'Wołga'];
const booleans = [true, false, true];
const emptyArray = [];
const array = [1, '666', true, 'false', 'Jakieś zdanie'];
console.log(array[1]);
const myArray = ['Lorem', 'Ipsum', 24];
console.log(`Moja tablica składa się z ${myArray.length} elementów`);
let newArray = [];
newArray.push("Pewnie że wiem ;)")
console.log(newArray);
// 9
const newObject = {};
const person = {
    name: 'Iza',
}
const personDetails = {
    name: 'Maciej',
    lastName: 'Ułanowicz',
    age: 31,
    drivingLicense: true,
}
console.log(personDetails.age);
console.log(personDetails);
// 10
function addNumbers(x, y) {
    return x + y;
}

function loggedInscription(text) {
    return `${text}`;
}
// Dodałem pseudo zabezpieczenie, dzięki czemu zawsze wyswietla się napis, czyli string.

function boolean(value) {
    return Boolean(value);
}

function modulo(x, y) {
    return x % y;
}

function power1(x, y) {
    return x ** y;
}

function twoStrings(firstString, secondString) {
    return `${firstString}${secondString}`
}
// Jako dwa złączone stringi zrozumiałem, że maja być po prostu sklejone bez odstępu.

function minutesToSeconds(minutes) {
    return minutes * 60;
}

function hoursToSeconds(hours) {
    return hours * 3600;
}

function areaOfATriangle(x, y) {
    return x * y * 0.5;
}

function yearsToDays(years) {
    return years * 365;
}

function power2(x) {
    return x ** x;
}

function longerTriangleSide(side1, side2) {
    return side1 + side2 - 1;
}

function hello2(name) {
    return `Cześć, ${name}!`;
}

function age2(year) {
    return 2021 - year;
}

function score(twoPoint, threePoint) {
    return 2 * twoPoint + 3 * threePoint;
}
