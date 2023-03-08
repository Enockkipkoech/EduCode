// recursion function

// $! = 4*3*2*1

// Factorial iterartively
function factorial(num) {
	let total = 1;
	for (let i = num; i > 1; i--) {
		total *= i;
	}
	return total;
}
factorial(4);

// Factorial Recursively

function factorialRecursive(num) {
	if (num === 1) return 1;
	return num * factorialRecursive(num - 1);
}
factorialRecursive(10);

// Helper method recursion
// collect odd values from an array of inputs

function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		//base case
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);

	return result;
}

collectOddValues([1, 6, 2, 0, 7, 12, 122, 133]);

// PURE RECURSION
function collectOddValuesRecursively(arr) {
	let newArr = [];
	if (arr.length === 0) {
		return newArr;
	}
	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValuesRecursively(arr.slice(1)));
	return newArr;
}

collectOddValuesRecursively([1, 2, 3, 4, 5, 6, 7, 8, 9]);
