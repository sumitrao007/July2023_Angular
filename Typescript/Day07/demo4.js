//json Object 
// java script Object notation 
// data should be in key & value format 
var jsonobj = {
    id: 9,
    fname: 'Sumit',
    lname: 'Raokhande',
    country: {
        cid: 1,
        cname: 'India'
    },
    month: ["Jan", 'May', 'Dec']
};
// 1 using dot operator
// 2 using square operator
// 1 using dot operator
console.log("\n    ID          :: ".concat(jsonobj.id, "\n    First Name  :: ").concat(jsonobj.fname, "\n    Last Name   :: ").concat(jsonobj.lname, "\n    Country Name:: ").concat(jsonobj.country.cname, "\n    Month       :: ").concat(jsonobj.month.join("  "), "\n"));
// 2 using square operator
// console.log(`
// ---------- Square Bracket Syntax--------------
//     ID          :: ${jsonobj["id"]}
//     First Name  :: ${jsonobj['fname']}
//     Last Name   :: ${jsonobj['lname']}
// `);
