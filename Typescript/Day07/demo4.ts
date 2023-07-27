//json Object 
// java script Object notation 
// data should be in key & value format 
let jsonobj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande',
    country:{
        cid:1,
        cname:'India'
    },
    month:["Jan",'May','Dec']
}

// 1 using dot operator
// 2 using square operator

// 1 using dot operator

console.log(`
    ID          :: ${jsonobj.id}
    First Name  :: ${jsonobj.fname}
    Last Name   :: ${jsonobj.lname}
    Country Name:: ${jsonobj.country.cname}
    Month       :: ${jsonobj.month.join("  ")}
`);

// 2 using square operator
// console.log(`
// ---------- Square Bracket Syntax--------------
//     ID          :: ${jsonobj["id"]}
//     First Name  :: ${jsonobj['fname']}
//     Last Name   :: ${jsonobj['lname']}
// `);

