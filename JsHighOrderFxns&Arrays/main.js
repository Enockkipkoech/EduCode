const companies = [
	{ name: "Company One", category: "Finance", start: 1981, end: 2004 },
	{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
	{ name: "Company Three", category: "Auto", start: 1999, end: 2007 },
	{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
	{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
	{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
	{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
	{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
	{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
// filter
// map
// sort
// reduce

// for loop
for (i = 0; i < companies.length; i++) {
	console.log(companies[i]);
}

//forEach
companies.forEach((company, index) => {
	console.log(index, company.name);

	return company;
});

// filter - Get 21 and Older
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 21) {
		canDrink.push(ages[i]);
	}
}
console.log(canDrink);

const canDrink2 = ages.filter((age) => {
	if (age >= 21) {
		console.log(age);
		return true;
	}
});
console.log(canDrink2);

const canDrink3 = ages.filter((age) => age >= 21);
console.log(canDrink3);

// filter retail companies
const retailCompanies = companies.filter((company) => {
	if (company.category == "Retail") {
		return true;
	}
});
console.log(retailCompanies);

//Get 80s companies
const eightiesCompanies = companies.filter((company) => {
	if (company.start >= 1980 && company.start <= 1989) {
		return true;
	}
});
console.log(eightiesCompanies);

// Companies that lasted more than 10 yrs

const companiesLasted10yrs = companies.filter(
	(company) => company.end - company.start >= 10,
);
console.log(companiesLasted10yrs);

// Map
//create array of company names
const companyNames = companies.map((company) => {
	return company.name;
});
console.log(companyNames);

// Printing multiple values
const testMap = companies.map(
	(company) => `${company.name} [${company.start}- ${company.end}]`,
);
console.log(testMap);

const agesSquared = ages.map((age) => Math.sqrt(age));
const agesMultiply = ages.map((age) => age * 10);

console.log(agesSquared);
console.log(agesMultiply);

// Multiple Mapping

const multiMap = ages
	.map((age) => Math.sqrt(age))
	.map((age) => age ** 2)
	.map((age) => age.toFixed());

console.log(multiMap);

// sort - companies by start year
const sortedCompanies = companies.sort((c1, c2) => {
	if (c1.start > c2.start) {
		return 1;
	} else {
		return -1;
	}
});

console.log(sortedCompanies);

// sorting items using ternary Operator
const sortedItems = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedItems);

// // sort ages
const sortedAgesDesc = ages.sort((a, b) => b - a); // Descending order
const sortedAgesAsc = ages.sort((a, b) => a - b); // Ascending order

console.log(sortedAgesDesc);
console.log(sortedAgesAsc);

// Reduce
// Add all ages using forLoop

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}
console.log(ageSum);

const ageSumReduce = ages.reduce((age, total) => {
	return total + age;
}, 0);
console.log(ageSumReduce);

const ageSumReduceArrowFxn = ages.reduce((age, total) => total + age, 10); // with start index of 10
console.log(ageSumReduceArrowFxn);

// Get Total years of all companies
const totalYears = companies.reduce((total, company) => {
	return total + (company.end - company.start);
}, 0);

console.log(totalYears);

// Arrow function Refactoring
const totalYearsArrowFxn = companies.reduce(
	(total, company) => total + company.end - company.start,
	0,
);
console.log(totalYearsArrowFxn);

// Combined Methods

const combinedAges = ages
	.map((age) => age * 2)
	.filter((age) => age >= 40)
	.sort((a, b) => a - b)
	.reduce((a, b) => a + b, 0);

console.log(combinedAges);
