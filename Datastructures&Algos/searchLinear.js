function linearSearch(arr, value) {
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === value) return arr.indexOf(value);
	}
	return -1;
}

let arr = ["Black", "Best", "Goodness", 1, 1000];
linearSearch(arr, 1000);
