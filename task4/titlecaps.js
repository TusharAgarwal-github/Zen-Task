const str = ['javascript is interesting']
let ss = str.toString().split(' ')
const newstr = ss
	.map(word => word.charAt(0).toUpperCase() + word.substring(1))
	.join(' ')
console.log(newstr)
