//Shallow Copy & deep Copy
let a=50;
let b=a;
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


let arr=[10,20,30];

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

//here we create deep copy of array 
let [...arr1]=arr;
console.log(`
    arr = ${arr}
    arr1= ${arr1}
`);

arr1[1]=800;

console.log(`
    arr = ${arr}
    arr1= ${arr1}
`);