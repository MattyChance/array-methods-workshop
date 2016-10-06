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
