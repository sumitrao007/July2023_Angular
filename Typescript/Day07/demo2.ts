//Swapping variables without using 3rd variables (Js interview Question)
// 1 addition & substraction
// 2 multiplication & division
// 3 xor 

// 4 array destructing 

let a=85;
let b=90;

console.log(`
    Before Swapping----
     a = ${a}
     b = ${b}
`);

[a,b]=[b,a];

console.log(`
    After Swapping----
     a = ${a}
     b = ${b}
`)
