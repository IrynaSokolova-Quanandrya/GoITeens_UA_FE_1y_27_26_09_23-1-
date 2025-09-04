/*
 * - HTTP-запити в браузері
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методи
 *  - статус відповіді коди
 *  - postman
 *  - Заголовки
 *  - MIME-типи
 *  - Параметри запиту
 * - Документація REST API
 * - Обробка 404 з fetch
 * - Аутентифікація
 * - Заголовки
 * - https://pokeapi.co/
 * - [https://pixabay.com/api/docs/]
 * - [https://openweathermap.org/api]
 * - [https://newsapi.org/]
 */
function fetchPokemonById(pokemonId) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res =>
		res.json()
	)
}

fetchPokemonById(1)
	.then(pokemon => console.log(pokemon))
	.catch(() => {
		console.log('Oops!')
		alert('Щось пішло не так(((')
	})

const url = 'https://newsapi.org/v2/everything?q=flowers'
const options = {
	headers: {
		'X-Api-Key': '3ce63eea477043d7a470d2b21dc5ab4b',
	},
}

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// const refs = {
// 	form: document.querySelector('.js-search-form'),
// 	container: document.querySelector('.js-card-container'),
// 	btn: document.querySelector('.js-search-btn'),
// 	search: document.querySelector('.js-search'),
// }
// console.log(refs)

// refs.btn.addEventListener('click', () => {
// 	fetchPokemonById(refs.search.value).then(pokemon => {
// 		const pokemonCard = `<div class="card">
//   <div class="card-img-top">
//     <img src="${pokemon.sprites.front_default}" alt="">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Ім'я:${pokemon.name}</h2>
//     <p class="card-text">Вага: ${pokemon.weight}</p>
//     <p class="card-text">Зріст: ${pokemon.height} </p>

//     <p class="card-text"><b>Вміння</b></p>
//     <ul class="list-group"></ul>
//       <li class="list-group-item"></li>
//     </ul>
//   </div>
// </div>`

// 		refs.container.innerHTML = pokemonCard
// 	})
// })

// refs.form.addEventListener('submit', onFormSubmit)

// function onFormSubmit(e) {
// 	e.preventDefault()
// 	console.log(e)
// 	const form = e.currentTarget

// 	const value = form.elements.query.value

// 	fetchPokemonById(value).then(pokemon => {
// 		const pokemonCard = `<div class="card">
//   <div class="card-img-top">
//     <img src="" alt="">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Ім'я: </h2>
//     <p class="card-text">Вага: </p>
//     <p class="card-text">Зріст: </p>

//     <p class="card-text"><b>Вміння</b></p>
//     <ul class="list-group"></ul>
//       <li class="list-group-item"></li>
//     </ul>
//   </div>
// </div>`
// 	})

// 	e.reset()
// }

// function fetchPokemonById(pokemonId) {
// 	return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res =>
// 		res.json()
// 	)
// }

// /**
//      * <div class="card">
//   <div class="card-img-top">
//     <img src="" alt="">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Ім'я: </h2>
//     <p class="card-text">Вага: </p>
//     <p class="card-text">Зріст: </p>

//     <p class="card-text"><b>Вміння</b></p>
//     <ul class="list-group"></ul>
//       <li class="list-group-item"></li>
//     </ul>
//   </div>
// </div>
//      */
// fetch('https://pokeapi.co/api/v2/ability/48/')
// 	.then(result => {
// 		return result.json()
// 	})
// 	.then(pokemon => {
// 		console.log(pokemon.name)
// 		return 5 + 5
// 	})
// 	.then(res1 => {
// 		console.log(res1)
// 	})
// 	.then(res2 => {
// 		console.log(res2)
// 	})
