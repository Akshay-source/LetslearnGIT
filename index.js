// 1. Ways to print in javascript
//document.write('this is document write')
// 2. Javasciprt console API
// console.log('hello world',4+6,'another log');
// console.warn('this is a warning')
// console.error('this is an Error')

// 3. Javascript variables
// --> containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in javascript
// Numbers 
var num1 = 455;
var num2 = 12.56

// Strings
var str1 = 'this is a string';
var str2 = "this is also a string";

// Objects
var marks = {
    xyz: 34,
    shubham: 78,
    akki: 99
}

// Booleans
var a = true
var b = false
// console.log(b,a);

var und;
// console.log(und);

var n = null;
// console.log(n);

// At a very high level there are 2 types of datatypes in javascript
// 1. primitive data types: undefined,null,number,boolean,symbol,strings
// 2. reference data types: arrays and objects

var arr = [1, 2, 'akshay', 3, 4, 5]
// console.log(arr);

// Operators in javascript
// Arithematic operators
var a = 54;
var b = 76;
// console.log('the value of a+b is',a+b);

// Assignment operators
var c = b;
c += 2;
// console.log(c);

// Comparison operators
var x = 190;
var y = 200;
// console.log(x<y);

// Logical operators
// console.log(true || true); // logical OR
// console.log(true && true); // logical AND
// console.log(!false)  //logical NOT

// Functions in javascript
// DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6)
c2 = avg(10, 16)

// console.log(c1,c2);

// Conditionals in Javascript
var age = 24;
if (age > 8) {
    // console.log('your are not a kid')
}
else {
    // console.log('you are a kid')
}

// function myfun(x){
//     if(x>18){
//         console.log('you can vote');
//     }
//     else{
//         console.log('you cannot vote');
//     }
// }

// // result = myfun(16);


// For loops

var arr = [1, 2, 3, 4, 5, 6, 7];
// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach(function (element) {
    // console.log(element);
})



// const ac = 0;
// ac = ac + 1;

// let j = 0;

// // while (j < arr.length) {
// //     console.log(arr[j]);
// //     j++;
// // }


// do {
//     console.log(arr[j]);
//     j++;

// } while (j<arr.length)


//break and continue
// var arr = [1, 2, 3, 4, 5, 6, 7];
// for(var i = 0;i<arr.length;i++){
//     if(i==2){
//         continue;
//         break;
//     }
//     console.log(arr[i]);
// }













