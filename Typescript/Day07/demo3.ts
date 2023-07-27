//Functions that return multiple values (JS interview Question)

function operation(a:number,b:number){
    return [a+b,a-b,a*b];
}

let [add,sub,mul]=operation(10,3);

console.log(`
    Add => ${add}
    Sub => ${sub}
    Mul => ${mul}
`);
