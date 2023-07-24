// array is dynamically growable & shrinkable 
// i.e. array does not have any fixed length
// u can store homogenous as well as hetrogenous data type 
var a1 = [4, 5, 8, 9];
var a2 = [7, 8, 9];
var a3 = [];
var a4 = [2.5, 'Sumit', true];
var a5 = [10, 'Sumit'];
// for(let i=0;i<a1.length;i++){
//     console.log("Array is "+a1[i]);
// }
// console.log(a1);
// console.log(a1.join("  "));
// console.log(a1.join());
// a2.forEach((myvalue,i,arr)=>{
//     console.log("Array value is "+myvalue+" Index is "+i+" Full array is "+arr)
// })
// Rest Parameter Function
// function display(str:string,...item:number[]){
//     console.log(str);
//     console.log(item)
// }
// display("sumit",10,20,30,56);
//push & pop
// We can add data dynamically into the array 
// It works on LIFO Principal => Last in First Out 
var a = [];
a.push(10);
console.log(a);
a.push(78, 90, 100);
console.log(a);
var res = a.pop();
console.log(a);
console.log("poped value is " + res);
