'use strict'
let page = 1
let info = null
const $btnNext = document.getElementById('next')
const $btnPrev = document.getElementById('prev')
const $nav = document.querySelector('.nav')
const $actualPage = document.getElementById('actual-page')
const $allPages = document.getElementById('all-pages')
const $list = document.getElementById('lista')

const main = async () => {
	const createCharactersList = async () => {
		const characters = await characterList()
		// characters.results.length = 10
		// jeśli odkomentujesz linijke wyżej, to wyświetli 10 kart postaci. ;)
		info = characters.info
		$list.innerHTML = ''
		$actualPage.innerText = page
		characters.results.forEach(character => kartaPostaci(character))
	}

	const nextPage = () => {
		if (info.next === null) {
			$btnNext.textContent = 'Jesteś na ostatniej stronie'
			return
		}
		if (page > 0) {
			$btnPrev.textContent = 'Poprzednia strona'
		}
		page++
		createCharactersList()
	}
	const previousPage = () => {
		if (info.prev === null) {
			$btnPrev.textContent = 'Jesteś na pierwszej stronie'
			return
		}
		if (info.next !== info.pages) {
			$btnNext.textContent = 'Następna strona'
		}
		page--
		createCharactersList()
	}
	$nav.addEventListener('click', e => {
		if (e.target === $btnNext) {
			nextPage()
		} else if (e.target === $btnPrev) {
			previousPage()
		}
	})
	// $btnPrev.addEventListener('click', () => {
	//     previousPage();
	// })
	// $btnNext.addEventListener('click', () => {
	//     nextPage();
	// })
	// Dodałem funkcję przewijania stron poprzez naciśnięcie strzałek lewo/prawo przy pomocy "e" i rozkminiłem, że można w ten sposób również zrobić przewijanie przy pomocy kliknięcią i dzięki temu, mam jedno nasłuchiwanie na event, zamiastw dwóch. Ale nie wiem, czy to nie przerost formy nad treścią, więc daj znać w feedbacku co o tym sądzisz. ;]
	document.addEventListener('keyup', e => {
		if (e.key === 'ArrowRight') {
			nextPage()
		} else if (e.key === 'ArrowLeft') {
			previousPage()
		}
	})
	async function characterList() {
		try {
			const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
			const json = await data.json()
			return json
		} catch (err) {
			alert(new Error(err))
		}
	}
	characterList().then(obj => {
		const $list = document.getElementById('char-number')
		$list.innerHTML = obj.info.count
		$allPages.innerHTML = obj.info.pages
	})

	function kartaPostaci(data) {
		const $card = document.createElement('div')
		$card.classList = 'card'
		const $img = document.createElement('img')
		$img.src = data.image
		$img.alt = `${data.name} avatar`
		$img.classList = 'card__img'

		const $container = document.createElement('div')
		$container.classList = 'card__container'

		const $name = document.createElement('h2')
		$name.innerHTML = data.name

		const $species = document.createElement('p')
		$species.innerHTML = data.species

		$card.appendChild($img)
		$container.appendChild($name)
		$container.appendChild($species)
		$card.appendChild($container)
		$list.appendChild($card)
	}
	createCharactersList()
}
main()
