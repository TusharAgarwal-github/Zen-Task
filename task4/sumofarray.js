const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
const final = a.map(item => {
	return (sum = sum + item)
})
console.log(final[final.length - 1])
