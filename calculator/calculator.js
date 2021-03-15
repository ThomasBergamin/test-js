function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (params) {
	let sum = 0
	for(const number of params){
		sum += number;
	}
	return sum
}

function multiply (params) {
	let total = 1
	for(const number of params){
		total *= number;
	}
	return total
}

function power(num1, num2) {
	return Math.pow(num1, num2)
}

function factorial(num) {
	if(num===0){
		return 1;
	} else {
		let numbersBelow = [];
		for(i=num-1; i>0; i--){
			numbersBelow.unshift(i);
		}
		let total = num;
	
		for(const number of numbersBelow){
			total *= number;
		}
		return total;
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}