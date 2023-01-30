// String Reversal

function reverse(str) {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
reverse(
	"THESE PROBLEMS ARE SIGNIFICANTLY HARDER THAN THE EARLIER PROBLEMS.THIS SECTION IS FOR PEOPLE WHO ENJOY PAIN AND MISERY. YOU DO NOT NEED TO ATTEMPT ANY OF THESE PROBLEMS IF YOU DO NOT WANT TO! ",
);

// PALINDROME CHECKER
function isPalindrome(str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) {
		return isPalindrome(str.slice(1, -1));
	} else {
		return false;
	}
}

isPalindrome("meme");

// some Recurve function

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }
// someRecursive("123")

//FLATTEN

function flatten(oldArr) {
	var newArr = [];
	for (var i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}
flatten([1, 2, 3, ["Enock"], ["Bree"]]);

// CAPITALIZE ARRAY OF WORDS

function capitalizeWords(Array){
  if(Array.length == 1) {
      return [Array[0].toUpperCase()]
  }
  let result = capitalizeWords(Array.slice(0,-1));
  result.push(Array.slice(Array.length-1)[0].toUpperCase())
  return result
}

capitalizeWords(["plan", "Strategize","EXECUTE"])

// Capitalize first letter

function capitalizeFirstWord(word){
  if(word.length == 1) return word.toUpperCase()
  let firstLetter = word.charAt(0)
  let remainingChars = word.substring(1);
  return firstLetter.toUpperCase() + remainingChars.toLowerCase()
}

capitalizeFirstWord('nGeni.IO')

// capitalizeFire Solution

function capitalizeEachLetter(array) {
if (array.length === 1) {
  return [array[0][0].toUpperCase() + array[0].substr(1)];
}
const res = capitalizeEachLetter(array.slice(0, -1));
const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
res.push(string);
return res;
}
capitalizeEachLetter('EvERyChArAcTeR')


//Stringify Numbers

function stringifyNumbers(obj){
  var newObj = {}
  for(var key in obj){
      if(typeof obj[key] === 'number'){
          newObj[key]=obj[key].toString();
      }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
          newObj[key] = stringifyNumbers(obj[key]);
      } else {
          newObj[key] = obj[key]
      }
  }
  return newObj
}
let obj1 = {
  Name:"Name",
  Age: 30,
  place: {
      code:345640500
  }
}

stringifyNumbers(obj1);

// CollectStrings 
function CollectStrings(obj){
  var stringsArray = []

  //helper function
  function gatherStrings(Object){
      for(var key in Object){
          if(typeof Object[key] === 'string'){
              stringsArray.push(Object[key])
          } else if(typeof Object[key] === 'object'){
              return gatherStrings(Object[key]);
          } 
          // else{
          //     if(typeof Object[key] === 'string'){
          //     return stringsArray.push(Object[key])
          //     }
          // }
      }
  }

  //helper call
  gatherStrings(obj)
  return stringsArray    
}

let _obj2 = {
  Name:"Jina",
  Age: 30,
  Locale:"Subulbul",    
  place: {
      code:345640500,
      name:"Place Flani",
      descr: {
      gen:"Tester",
      spec: 1
  },
  },
 
  }

CollectStrings(_obj2)

// CollectStrings - PURE RECURSION METHOD

function CollectStringsRecursive(obj){
  var stringsArray =  []
  for(var key in obj){
      if(typeof obj[key] === 'string'){
          stringsArray.push(obj[key])
      } else if(typeof obj[key] === 'object'){
          stringsArray = stringsArray.concat(CollectStringsRecursive(obj[key]))
      }
  }

  return stringsArray;
}

let obj3 = {
  Name:"The Nodes G",
  Age: 24,
  Locale:"Kales",    
  place: {
      code:345640500,
      name:"Place Mufti",
      descr: {
      gen:"White sand and Beaches",
      spec: 1
  },
  },
 // CAPITALIZE ARRAY OF WORDS

// capitalizeFire Solution

function capitalizeEachLetter(array) {
if (array.length === 1) {
  return [array[0][0].toUpperCase() + array[0].substr(1)];
}
const res = capitalizeEachLetter(array.slice(0, -1));
const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
res.push(string);
return res;
}
capitalizeEachLetter('EvERyChArAcTeR')


//Stringify Numbers

function stringifyNumbers(obj){
  var newObj = {}
  for(var key in obj){
      if(typeof obj[key] === 'number'){
          newObj[key]=obj[key].toString();
      }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
          newObj[key] = stringifyNumbers(obj[key]);
      } else {
          newObj[key] = obj[key]
      }
  }
  return newObj
}
let obj = {
  Name:"Name",
  Age: 30,
  place: {
      code:345640500
  }
}

stringifyNumbers(obj);

// CollectStrings 
function CollectStrings(obj){
  var stringsArray = []

  //helper function
  function gatherStrings(Object){
      for(var key in Object){
          if(typeof Object[key] === 'string'){
              stringsArray.push(Object[key])
          } else if(typeof Object[key] === 'object'){
              return gatherStrings(Object[key]);
          } 
          // else{
          //     if(typeof Object[key] === 'string'){
          //     return stringsArray.push(Object[key])
          //     }
          // }
      }
  }

  //helper call
  gatherStrings(obj)
  return stringsArray    
};

let obj2 = {
  Name:"Jina",
  Age: 30,
  Locale:"Subulbul",    
  place: {
      code:345640500,
      name:"Place Flani",
      descr: {
      gen:"Tester",
      spec: 1
  },
  },
 
  }

CollectStrings(obj2)

// CollectStrings - PURE RECURSION METHOD

function CollectStringsRecursive(obj){
  var stringsArray =  []
  for(var key in obj){
      if(typeof obj[key] === 'string'){
          stringsArray.push(obj[key])
      } else if(typeof obj[key] === 'object'){
          stringsArray = stringsArray.concat(CollectStringsRecursive(obj[key]))
      }
  }

  return stringsArray;
};

let _objNested= {
  Name:"The Nodes G",
  Age: 24,
  Locale:"Kales",    
  place: {
      code:345640500,
      name:"Place Mufti",
      descr: {
      gen:"White sand and Beaches",
      spec: 1
  },
  },
 
  }  

CollectStringsRecursive(_objNested)