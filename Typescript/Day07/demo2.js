//Swapping variables without using 3rd variables (Js interview Question)
// 1 addition & substraction
// 2 multiplication & division
// 3 xor 
var _a;
// 4 array destructing 
var a = 85;
var b = 90;
console.log("\n    Before Swapping----\n     a = ".concat(a, "\n     b = ").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n    After Swapping----\n     a = ".concat(a, "\n     b = ").concat(b, "\n"));
