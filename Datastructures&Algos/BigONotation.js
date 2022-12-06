// Counting Up and Down
const countingUpAndDown = (n) => {
	console.log("Going Up!");
	for (let i = 0; i < n; i++) {
		console.log(i);
	}

	console.log("From Top! Going Down!");
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}

	console.log("At the bottom. Bye!");
};

countingUpAndDown(7);

// Nested for loops
const nestedForLoop = (n) => {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
};

nestedForLoop(2);

// Print at least 5

const printAleast5 = (n) => {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
};
printAleast5(10);
