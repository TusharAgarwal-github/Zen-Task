const arr = ['carecar', 1344, 12321, 'did', 'cannot']

const palin = num => {
	let a = [],
		b = num.toString()
	let i = 0,
		j = b.length - 1
	for (i; i < b.length; i++) {
		a[i] = b[j--]
	}

	let c = a.join().replace(/,/g, '')

	if (c === b) {
		return true
	} else {
		return false
	}
}
let data = arr.filter(item => {
	return palin(item)
})
console.log(data)
