// 1

const car = {
    carBrand: 'Mercedes',
    model: 'E-class',
    yearOfProduction: 2003
}
const list = (carBrand, model, yearOfProduction) => {
    return `Samochod ${carBrand} ${model} wyprodukowano w ${yearOfProduction} roku`
}

const objFunction = obj => {
    return `Samochód ${obj.carBrand} model ${obj.model} wyprodukowano w ${obj.yearOfProduction} roku`;
}


// 2
const {
    carBrand,
    model,
    yearOfProduction
} = car;
console.log(car.carBrand);
console.log(car.model);
console.log(car.yearOfProduction);
// 3
const des = () => {
    const {
        carBrand,
        model,
        yearOfProduction
    } = car;
    return `Samochod ${carBrand} ${model} wyprodukowano w ${yearOfProduction} roku`;
}

// 4
const incrementation = () => {
    let x = 5;
    console.log(`${x} zadeklarowane`);
    console.log(`${x++} w tej linijce zwiększona zmienna x została najpierw wywołana, a potem powiększona i dopiero przy kolejnym wywołaniu zmiennej zostanie "wydrukowana" powiększona wartość ${x}`);
    console.log(`${x} z poprzedniego podpunktu`);
    console.log(`W tej linijce ${x} z poprzedniego podpunktu zostanie najpierw zwiększone, a dopiero potem "wydrukowane" w console.logu z już powiększoną wartością ${++x}`);
    // A teraz w skrócie :D
    x = 5;
    console.log(`${x++} zwiększone po wywołaniu, ${x} już zwiększone wywołane, ${++x} zmienna zwiększona przed wywołaniem i wywołana już po zwiększeniu`);
    // Wiem na czym polega różnica, ale nie jestem pewien czy dobrze wytłumaczyłem. :D
}
// 5
const kosz = () => {
    const aktualnyWynik = {
        wynik: 0,
        pokazLicznik() {
            if (aktualnyWynik.wynik > 1 && aktualnyWynik.wynik <= 4) {
                console.log(`Aktualny wynik to ${aktualnyWynik.wynik} punkty`);
            } else if (aktualnyWynik.wynik === 1) {
                console.log(`Aktualny wynik to 1 punkt`);
            } else {
                console.log(`Aktualny wynik to ${aktualnyWynik.wynik} punktów`);
            }
        }
    }

    function rzutZaDwa() {
        aktualnyWynik.wynik += 2;
    }

    function rzutZaTrzy() {
        aktualnyWynik.wynik += 3;
    }

    return {
        stan: aktualnyWynik.pokazLicznik,
        rzutZaDwa,
        rzutZaTrzy,
    }

}
const basket = kosz();
basket.rzutZaDwa();
basket.rzutZaDwa();
basket.rzutZaTrzy();
basket.stan();
// 6
const pralka = {
    device: 'Pralka',
    washingMachineName: 'Samsung',
    howManyFunctions: 55,
    information() {
        return `Urządzenie ${this.device.toLowerCase()}, marki ${this.washingMachineName} posiada ${this.howManyFunctions} funkcji`
    }
}
// 7
// Kopia, czyli kopiujemy wartość z jednej zmiennej do drugiej, ale przy zmianie pierwszej zmiennej nie zmieniamy wartości w skopiowanej zmiennej. Tak wiem, masło maślane. :D Kopiować możemy typy proste np. liczby, stringi.

let x = 1;
let y = x;
console.log(`x przed zmianą ${x} y przed zmianą ${y}`);
x = 2;
console.log(`x po zmianie ${x} y bez zmian ${y}`);
// Referencja, czyli wskazujemy miejsce w pamięci komputera w którym zapisany jest dany element, do którego przypisujemy kolejny, lecz podczas edycji pierwotmego elementu, zmieniamy również drugi element. Typy referencyjne to typy złożone np. tablice, obiekty.

const arr = [1, 2, 3, 4];
const arr2 = arr;
console.log(`Pierwsza tablica przed zmianą ${arr}, druga tablica przed zmianą ${arr2}`);
arr.push(5, 6, 7);
console.log(`Pierwsza tablica po zmianie ${arr}, druga tablica po zmianie ${arr2}`);