//Exercise 1: 
// function printPositives(arr) {
//     var newArr = [];
//     arr.forEach(function(num) {
//         // num > 0 ? newArr.push(num) : false;
//         if (num > 0) {
//             newArr.push(num);
//         }
//     });
//     return newArr;
// }
// var myArr = [12, -3, -4, 18];
// console.log(printPositives(myArr));

//Exercise 2: do the same thing using filter
function getPositives(arr) {
    var newArr = arr.filter(function(num) {
        return num > 0;
    });
    return newArr;
}
var myArr = [12, -3, -4, 18];
console.log(getPositives(myArr));