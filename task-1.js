// narcistic number 
var narcisisticNumber = function(number) {
	var sum = 0;
	for (var i = 0; i < number; i++) {
		sum += Math.pow(i, 2);
	}
	return sum;
}

console.log(narcisisticNumber(5));
