//optional parameter functions

function add1(a:number,b?:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Value of a+b is "+(a+b!));//NAN => Not a number
}

// add1(10);

// add1(10,4);

function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//45
    console.log("Value of b is "+b);//10
    console.log("Value of a+b is "+(a!+b!));//55
}

// add2();
// add2(45);
// add2(45,10);

//default parameter functions

function add3(a:number,b:number=10){
    console.log("Value of a is "+a);//4
    console.log("Value of b is "+b);//55
    console.log("Value of a+b is "+(a!+b!));//59
}

// add3(4)
// add3(4,55);

function add4(a:number=2,b?:number){
    console.log("Value of a is "+a);//2
    console.log("Value of b is "+b);//undefined
    console.log("Value of a+b is "+(a!+b!));//nan
}

// add4(40,9);

// add4();