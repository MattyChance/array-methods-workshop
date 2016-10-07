// Exercise 1: 
function printPositives(arr) {
    var newArr = [];
    arr.forEach(function(num) {
        // num > 0 ? newArr.push(num) : false;
        if (num > 0) {
            newArr.push(num);
        }
    });
    return newArr;
}
// var myArr = [12, -3, -4, 18];
// console.log(printPositives(myArr));

//Exercise 2: do the same thing using filter
function getPositives(arr) {
    var newArr = arr.filter(function(num) {
        return num > 0;
    });
    return newArr;
}
// var myArr = [12, -3, -4, 18];
// console.log(getPositives(myArr));

//Exercise 2B: Filter array, print numbers from the filtered array
var myArr = [23, 5, -3, -8, 0, 1];

function keepPositive (arr) {
    var filteredArr = arr.filter(function(num) {return num > 0;});
    return filteredArr.forEach(function(num) {console.log(num);});
}
// var output = keepPositive(myArr);
// console.log(output);

//Exercise 3: AHAHAHAHA It's really only one line! :D
function filterArray (func, arr) {
    return arr.filter(func);
}

// var myArr = [23, 5, -3, -8, 0, 1];

// function func (num) {
//   return num > 0;
// }

// var output = filterArray(func, myArr);
// console.log(output);

//Exercise 4: return the longest word in a string using reduce
function getLongest(str) {
    var strToArr = str.split(" "); 
    return strToArr.reduce(function(str1, str2){
        // console.log('prev, next', str1, str2);
        if (str1.length > str2.length) {
          return str1;
        } else {
          return str2;
        }
    },"");
}

// var myStr = 'watermelon is my favourite fruits dude';
// var output = getLongest(myStr);
// console.log(output);

//Exercise 5: using reduce to return the number of vowels in a string
function countVowels(str) {
    var strToArr = str.split('');
    // console.log(strToArr);
    var arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
    var keepVowels = strToArr.reduce(function(count, letter) {
        if (arrOfVowels.indexOf(letter) > -1) {
            return count += 1;
        } else {
            return count += 0;
        }
    }, 0);
    return keepVowels;
}

// var myStr = 'The quick brown fox';
// var output = countVowels(myStr);
// console.log(output);

//Exercise 6: object of two properties: high and low
function highLow (arr) {
    // var initialValue = {
    //     highest: -Infinity,
    //     lowest: +Infinity
    // };
    // console.log(initialValue);
    var result = arr.reduce(function (finalObj, newValue) {
        if (newValue > finalObj.highest) {
            finalObj.highest = newValue;
        } else if (newValue < finalObj.lowest) {
            finalObj.lowest = newValue;
        }
        return finalObj;
    }, {highest: -Infinity, lowest: +Infinity});
    //why does not work if i put in initialValue.highest
    return result;
}

// var arrNums = [3, 4, 9, 1, -8, 23];
// var output = highLow(arrNums);
// console.log(output);

//Exercise 7: return the higest, second highest, lowest, and second lowest numbers
/*
function highLowTwo(arr) {
    return arr.reduce(function() {
        
    });
}
var arrNums = [3, 4, 9, 1, -8, 23];
var output = highLowTwo(arrNums);
console.log(output);
*/

//Exercise 8: countChars
function countChars(str) {
    str = str.replace(/\s/g, '');
    var myArr = str.split("");
    return myArr.reduce(function(finalObj, letter) {
        if (!finalObj[letter]) {
            finalObj[letter] = 1;
        }
        else {
            finalObj[letter] += 1;
        }
        return finalObj;
    }, {});
}
var myStr = 'hello world';
var output = countChars(myStr);
// console.log(output);

//if we dunno the property of an object, we need to use dynamic [] quotation

//Exercise 9:peopleById: take an array of people
//return an object where each person is keyed by their unique ID.
//using a for loop
/*
var newObj = {};
var prop = [];

for (var i = 0; i < arr.length; i++) {
  prop.push(arr[i].id);
  if(!newObj[prop[i]]) {
    newObj[prop[i]] = arr[i];
  }
}

console.log(newObj);
*/
//using reduce
var arrPplContact = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
];

function peopleById (arr) {
    
    var finalOutput = arr.reduce(function(prev, curr, idx) {
        /*what i need to do is to use reduce function on an array
        and eventually get an object that has each array value's (an object)
        property"id"'s value and then assign each array's element to that value
        */
        /*reduce function works on each element in the array; in this case,
        what will be the parameters 
        //make an object with only arrays' elements' id
        */
        prev[arr[idx]['id']]= arr[idx]; 
        //wowowowow one line!! after knowing the dynamic nature of []notation!
        
        return prev;
    }, {})
    return finalOutput;
}
// console.log(peopleById(arrPplContact));

//Exercise 10: Expansion on exercise 9 
function peopleByFirstName(arr) {
    //we want to produce same object but organized by firstname
    var contactBook = arr.reduce(function(prev, curr, idx){
        //object is composed of keys of firstName
        //key.value is an array filled with an object
        var objKey = curr['firstName'];
        if (!prev[objKey]) {
            prev[arr[idx]['firstName']] = [];
            prev[arr[idx]['firstName']].push(curr);
        }
        else {
            (prev[arr[idx]['firstName']]).push(curr);
        }
        
        return prev;

    }, {})
    return contactBook;
}

var output = peopleByFirstName(arrPplContact);
console.log(output);