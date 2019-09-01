'use strict';

console.log('test')

// narcistic function
function narcistic(number) {
	// 1634 = 4 digits
	// use math.pow
	let f = []

	let times = number
	let checkLength = 22
	let digits = Math.pow(number, times)

	// let gers = Math.sqrt(number, times)

	for (var i = 0; i < digits.length; i++) {
		console.log(digits[i].length)
		if (digits ==  times) {
			return true
		} else {
			return false
		}
	}

	if (number === digits) {
		console.log(number, "false")
		return false
	} else {
		console.log(number, "true")
		return true
	}
}

narcistic(121)