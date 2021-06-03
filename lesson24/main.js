'use strict'
fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => {
        res.results.forEach(({
            name
        }) => {
            console.log(name);
        })

    })
    .catch(err => console.log('Kurdefaja, błąd!', err))


const cartoonNames = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const json = await res.json()
        const imiona = json.results.map(({
            name
        }) => name)
        return imiona
    } catch (err) {
        console.log('O nie! I tutaj jakiś babol.', err);
    } finally {
        console.log('End!');
    }
}

(async () => {
    const names = await cartoonNames()
    for (let i in names) {
        console.log(names[i]);
    }
})()
// Tak, wiem, że powyższy podpunkt można było napisać w jednej funkcji, ale chciałem sobie przećwiczyć pisanie w dwóch oddzielnych funkcjach. ; )


const showCharacter = (number = 1) => {
    fetch(`https://rickandmortyapi.com/api/character/${number}`)
        .then(res => res.json())
        .then(res => {
            console.log(`Character name is ${res.name} and it's a ${res.species.toLowerCase()}`);
        })
        .catch(err => alert('Something went wrong!', err))
}