//Exercise one: 
function printPositives(arr) {
    var newArr = [];
    arr.forEach(function(num) {
        // num > 0 ? console.log(num) : arr.splice(arr.indexOf(num), 1);
        if (num > 0) {
            newArr.push(num);
        }
    });
    return newArr;

}
// var myArr = [12, -3, -4, 18];
// console.log(printPositives(myArr));

