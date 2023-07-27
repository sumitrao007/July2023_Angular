//Shallow Copy & deep Copy
var a = 50;
var b = a;
// console.log(`
//     a = ${a}
//     b = ${b}
// `);
// b=600;
// console.log(`
// -----------------
//     a = ${a}
//     b = ${b}
// `);
var arr = [10, 20, 30];
// let arr1=arr;
// console.log(`
//     arr = ${arr}
//     arr1= ${arr1}
// `);
// arr1[2]=500;
// console.log(`
//     arr = ${arr}
//     arr1= ${arr1}
// `);
var arr1 = arr.slice(0);
console.log("\n    arr = ".concat(arr, "\n    arr1= ").concat(arr1, "\n"));
arr1[1] = 800;
console.log("\n    arr = ".concat(arr, "\n    arr1= ").concat(arr1, "\n"));
