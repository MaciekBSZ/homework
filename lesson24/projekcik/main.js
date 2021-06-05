let page = 1
let info = null

const main = async () => {
    const $btnNext = document.getElementById('next')
    const $btnPrev = document.getElementById('prev')
    const $actualPage = document.getElementById('actual-page')
    const $allPages = document.getElementById('all-pages')
    const createCharactersList = async () => {
        const characters = await characterList()
        characters.results.length = 10
        info = characters.info
        console.log(characters);
        const $list = document.getElementById('lista')
        $list.innerHTML = ''
        $actualPage.innerText = page
        characters.results.forEach((character) => kartaPostaci(character))
    }


    $btnPrev.addEventListener('click', async () => {
        if (info.prev === null) {
            $btnPrev.textContent = "Jesteś na pierwszej stronie"
            return
        }
        if (info.next !== null) {
            $btnNext.innerHTML = "Następna strona"
        }
        page--
        createCharactersList()
    })
    $btnNext.addEventListener('click', async () => {
        if (info.next === null) {
            $btnNext.innerHTML = "Jesteś na ostatniej stronie"
            return
        }
        if (page > 0) {
            $btnPrev.innerHTML = "Poprzednia strona"
        }
        page++
        createCharactersList()
    })
    async function characterList() {
        try {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const json = await data.json()
            return json
        } catch (err) {
            alert(new Error(err));
        }
    }
    characterList().then((obj) => {
        const $list = document.getElementById('char-number');
        $list.innerHTML = obj.info.count
        $allPages.innerHTML = obj.info.pages
    })

    function kartaPostaci(data) {
        const $card = document.createElement('div')
        $card.classList = 'card'
        const $img = document.createElement('img')
        $img.src = data.image
        $img.alt = `${data.name} avatar`

        const $container = document.createElement('div')
        $container.classList = 'container'

        const $name = document.createElement('h4')
        $name.innerHTML = data.name

        const $species = document.createElement('p')
        $species.innerHTML = data.species

        $card.appendChild($img)
        $container.appendChild($name)
        $container.appendChild($species)
        $card.appendChild($container)
        document.getElementById('lista').appendChild($card)
    }
    createCharactersList()
}
main()