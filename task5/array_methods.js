let request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send()
request.onload = function () {
	let data = JSON.parse(this.response)

	let continent = data.filter(item => item.region === 'Asia')
	console.log('continent', continent)

	let population2 = data.filter(item => item.population <= 200000)
	console.log('population2', population2)

	data.forEach(item =>
		console.log(item.name + ' ' + item.capital + ' ' + item.flag)
	)

	let totalpopulation = data.reduce((acc, item) => acc + item.population, 0)
	console.log('totalpopulation', totalpopulation)

	let asiapopulation = continent.reduce((acc, item) => acc + item.population, 0)
	console.log('asiapopulation', asiapopulation)

	data.forEach(item => {
		item.currencies.forEach(e => {
			if (e.code === 'USD') {
				console.log(item.name)
			}
		})
	})
}
