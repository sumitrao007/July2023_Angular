//Anonymous Functions
// function does not have any name 
// it execute there itself 

let temp1=function (){
    console.log("Anonymous Functions")
}

// temp1();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(7,3);
// console.log("Result is "+res);

//fat arrow functions/ Arrow function
// it is advanced version of Anonymous Functions
// it execute there itself 

   let temp3= ()=>{
        console.log("U r in fat arrow function ")
    }

    // temp3();

  let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    let op=temp4(5,5);

    // console.log("Out put is "+op)



