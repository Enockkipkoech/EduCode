// Power eg 5^0 = 1 | 5^2 = 25 | 5^3=125

function power(base, exponent) {
	//Base case
	if (exponent == 0) {
		return 1;
	}

	let result = base * power(base, exponent - 1);
	return result;
}

power(10, 3); // 125

// Factorial  eg  4*3*2*1

function factorial(num) {
	//Base case
	if (num < 1) {
		return 1;
	}

	let result = num * factorial(num - 1);
	return result;
}
factorial(7);

// Product of array recursively

function productOfArray(arr) {
	let result = 1;
	//base case
	if (arr.length == 1) {
		return result * arr[0];
	}
	if (arr.length == 0) {
		return 0;
	}

	for (i = 0; i < arr.length; i++) {
		result *= arr[i];
	}

	return result;
}

productOfArray([5, 2, 3, 12]);

// Option2
function prodOfArr(arr) {
	if (arr.length == 0) {
		return 1;
	}
	return arr[0] * prodOfArr(arr.slice(1));
}

prodOfArr([1, 3, 6, 5]);

// reduce Option 2
function reduceRecursive(arr) {
	let result = arr.reduce((a, b) => a * b);
	return result;
}

reduceRecursive([1, 2, 45]);

// Range

function Range(x, y) {
	let result = [];
	if (x == y) {
		return result;
	}
	result.push(x);
	return result.concat(Range(x + 1, y));
}
Range(1, 100);

// option2
function recursiveRange(x) {
	if (x == 0) return 0;
	return x + recursiveRange(x - 1);
}
recursiveRange(5);

// FIBONACCI
function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}
fib(10);

function fibSequence(n) {
	let n1 = 0;
	let n2 = 1;
	let nextterm = n1 + n2;
	console.log(n1);
	console.log(n2);

	while (nextterm <= n) {
		console.log(nextterm);
		n1 = n2;
		n2 = nextterm;
		nextterm = n1 + n2;
	}
}

fibSequence(15);
