console.log("Hello Big O Notation: addUpTo n snippets!");

// 0(n) Linear
// First Option
const addUptoN = (n) => {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		total += i;
	}
	return total;
};

console.log(addUptoN(1000000));

// Second Option

const addUptoN_2 = (n) => {
	let result = (n * (n + 1)) / 2;
	return result;
};
addUptoN_2(6);

// Using Timer to evaluate speed of code execution

let t1 = performance.now();
addUptoN_2(1000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
