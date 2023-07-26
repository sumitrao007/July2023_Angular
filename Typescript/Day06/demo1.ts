
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

let str:string[]=["Core Java",'Spring Boot','Advanced java','HTML,CSS,Js','Angular 12 ','AWS','Docker','Jenkings'];

let temp=str.slice(1,6);
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
let temp1=str.slice();
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

let a=[45,63,89,70];

let [t1,t2,t3,t4]=a;

console.log(`
    t1 => ${t1}
    t2 => ${t2}
    t3 => ${t3}
    t4 => ${t4}
`);

let [s1,...arr]=a;
console.log(`
    s1 => ${s1}
    arr => ${arr}
   
`);

let [,s2,s3,]=a;
console.log(`
    s2 = ${s2}
    s3 = ${s3}
`);
