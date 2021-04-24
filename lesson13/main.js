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
    console.log(`${x++} zwiększone po wywołaniu, ${x} już zwiększone wywołane, ${++x} zmienna zwiększona i wywołana już po zwiększeniu`);
    // Mati, mam nadzieję, że o to chodziło w tym zadaniu. :D
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