const a = [5, 7, 6, 8, 9]
const b = [3, 6, 2, 1, 0]

let c = a.sort((a, b) => {
	return a - b
})
let d = b.sort((a, b) => {
	return a - b
})
if (a.length % 2 === 0) {
	c = (c[c.length / 2] + c[c.length / 2 - 1]) / 2
	d = (d[d.length / 2] + d[d.length / 2 - 1]) / 2
} else {
	c = c[Math.floor(c.length / 2)]
	d = d[Math.floor(d.length / 2)]
}
console.log((c + d) / 2)
