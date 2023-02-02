function binarySearch(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	console.log(start, middle, end);

	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;

		middle = Math.floor((start + end) / 2);
	}
	console.log(start, middle, end);
	console.log(arr[middle], `Element Position`, middle);
	return arr[middle] === elem ? middle : -1;
}
let arr = [2, 5, 15, 20, 29, 37, 41, 58];
binarySearch(arr, 1);
