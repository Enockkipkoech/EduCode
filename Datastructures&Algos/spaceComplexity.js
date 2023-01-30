// Space Complexity - counting the amount of memory used by an algorithm
// Space complexity is usually measured in bytes or kilobytes based on variables, data structures, and function calls
// Space complexity is usually measured in Big O notation
// o(1) - constant space

const sum = (arr) => {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}

	return total;
};

sum([10, 3, 90, 1]);

// o(n)
const doubleArray = (arr) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
};

doubleArray([1, 5, 10]);
