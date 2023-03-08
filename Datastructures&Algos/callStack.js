function takeShower() {
	return "Not Showering Today!";
}

function eatBrekfast() {
	let meal = cookFood();
	return `Eating ${meal}`;
}

function cookFood() {
	let items = ["Oatmeal", "EgssOmlette", "Protein Shake"];
	return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
	takeShower();
	eatBrekfast();
	console.log("Okay, ready to attack!");
}

wakeUp();
