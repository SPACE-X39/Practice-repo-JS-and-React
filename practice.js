/*create an array of objects as inpout and returns with user's
detals whether they are elligible to vite or not*/
function elligible(users){
    return users.age>= 18;
}
const users = [{
    fName:"Ashutosh",
    age:22,
    gender:"Mr."
},{
    fName:"Suraj",
    age:17,
    gender:"Mr."
},{
    fName:"Kishan",
    age:12,
    gender:"Mr."
},{
    fName:"Neha",
    age:24,
    gender:"Mrs."
}];
const result = users.filter(elligible);
console.log(result);
