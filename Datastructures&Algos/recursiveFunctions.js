// Basecase
// Different Inputs

// Recursive function - non-iterative

function countDown(num) {
	if (num <= 0) {
		console.log("All Done!");
		return;
	}

	console.log(num);
	num--;
	countDown(num);
}

countDown(2);

// Non-recursive - Iterative

function countDownLoop(num) {
	for (var i = num; i > 0; i--) {
		console.log(i);
	}
	console.log("All Done!");
}

countDownLoop(6);

// CODE 2

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}
sumRange(100);
