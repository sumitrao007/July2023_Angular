//array of Object 
var arrobj = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 50
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ["Feb", "July", "Nov"],
        result: [
            {
                subj: "M1",
                marks: 45
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 59
            }
        ]
    },
    {
        id: 6,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["March", "Aug", "Oct"],
        result: [
            {
                subj: "M1",
                marks: 60
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 70
            }
        ]
    }
];
// console.log(`
//     ID          :: ${arrobj[1].id}
//     First Name  :: ${arrobj[1].fname}
//     Last Name   :: ${arrobj[1].lname}
// `)
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    ID          :: ".concat(arrobj[i].id, "\n    First Name  :: ").concat(arrobj[i].fname, "\n    Last Name   :: ").concat(arrobj[i].lname, "\n    Country Name:: ").concat(arrobj[i].country.cname, "\n    Month       :: ").concat(arrobj[i].month.join("  "), "\n    ------------Result-------------------\n"));
    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //             Subject :: ${arrobj[i].result[j].subj}
    //             Marks   :: ${arrobj[i].result[j].marks}
    //     `)
    // }
    arrobj[i].result.forEach(function (item) {
        console.log("\n                Subject :: ".concat(item.subj, "\n                marks   :: ").concat(item.marks, "\n        "));
    });
}
