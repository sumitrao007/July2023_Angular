//splice
// u can add a data on particular location 
// let a:number[]=[10,20,30];
// a.splice(1,0,60);
// console.log(a);
// a.splice(2,0,75,45,36);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(1,2);
// console.log(a);
// a.splice(0,1,200);
// console.log(a);
// a.splice(1,1,500,600);
// console.log(a);
//slice 
// it copy a section of data from an array & return a new array 
var str = ["Core Java", 'Spring Boot', 'Advanced java', 'HTML,CSS,Js', 'Angular 12 ', 'AWS', 'Docker', 'Jenkings'];
var temp = str.slice(1, 6);
// console.log(`
//     Original Array 
//     ${str}
//     ----------------------
//     Copied array 
//     ${temp}
// `);
// let temp1=str.slice(1);
// console.log(`
//     Original Array 
//     ${str}
//     ----------------------
//     Copied array 
//     ${temp1}
// `);
var temp1 = str.slice();
// console.log(`
//     Original Array 
//     ${str}
//     ----------------------
//     Copied array 
//     ${temp1}
// `);
// map method
// element by element operation perform 
// let a:number[]=[2,3,4,5,6];
// let sqrArr=a.map((myvalue,i)=>{
//     if(i==2){
//         return (myvalue*myvalue);
//     }else{
//         return myvalue;
//     }
// });
// console.log(a);
// console.log(sqrArr);
//destructing of array 
var a = [45, 63, 89, 70];
var t1 = a[0], t2 = a[1], t3 = a[2], t4 = a[3];
console.log("\n    t1 => ".concat(t1, "\n    t2 => ").concat(t2, "\n    t3 => ").concat(t3, "\n    t4 => ").concat(t4, "\n"));
var s1 = a[0], arr = a.slice(1);
console.log("\n    s1 => ".concat(s1, "\n    arr => ").concat(arr, "\n   \n"));
var s2 = a[1], s3 = a[2];
console.log("\n    s2 = ".concat(s2, "\n    s3 = ").concat(s3, "\n"));
