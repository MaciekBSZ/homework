// 1
const firstLoopFirstTask = (startNumber, condition) => {
    if (startNumber < condition) {
        for (i = startNumber; i <= condition; i++) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (i = startNumber; i >= condition; i--) {
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
        for (i = startNumber; i <= condition; i += 2) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (i = startNumber; i >= condition; i -= 4) {
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
        for (i = startNumber; i <= condition; i *= 2) {
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
for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Wyświetlono liczbę ${i}`);
    }
}

for (i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(`Wyświetlono liczbę ${i}`);
    }
}
for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`Wyświetlono liczbę ${i}`);
    } else {
        console.log('Liczba nieparzysta');
    }
}
for (i = 1; i <= 30; i++) {
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
for (i = 100; i > 0; i -= 5) {
    if (i % 10 === 0) {
        console.log(`${i} jest podzielne przez 10`);
    }
}

// 3
console.log('Zadanie nr. 3');

const countdownToZero = endNumber => {
    for (i = 0; i <= endNumber; i++) {
        console.log(`Aktualnie jest cyfra ${i}`);
    }
}
const countdownToFifteen = startNumber => {
    if (startNumber < 15) {
        for (i = startNumber; i <= 15; i++) {
            console.log(`Aktualnie jest cyfra ${i}`);
        }
    } else if (startNumber > 15) {
        for (i = startNumber; i >= 15; i--) {
            console.log(`Aktualnie jest cyfra ${i}`);
        }
    } else {
        console.log('Podaj liczbę inną niż 15');
    }
}
// Generalnie to jest ta sama funkcja którą zadeklarowałem w pierwszym zadaniu.
const randomLoop = (startNumber, condition) => {
    if (startNumber < condition) {
        for (i = startNumber; i <= condition; i++) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (i = startNumber; i >= condition; i--) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log("Podaj inne argumenty");
    }
}

const threeArgumentLoop = (startNumber, condition, iteration) => {
    if (startNumber < condition) {
        for (i = startNumber; i <= condition; i += iteration) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else if (startNumber > condition) {
        for (i = startNumber; i >= condition; i -= iteration) {
            console.log(`Aktualna liczba to ${i}`);
        }
    } else {
        console.log('Podaj inne wartości');
    }
}
// 4