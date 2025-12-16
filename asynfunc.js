/*const fs = require("fs");
function content(err,data){
    console.log(data);
}
fs.readFile("a.txt","utf8",content);
fs.readFile("b.txt","utf8",content);
console.log("done");*/

function timeout(){
    console.log("click it");
}
console.log("hii");
setTimeout(timeout,1000);
console.log("welcome");
let c=0;
for(let i =0;i<10000;i++){
    c=c+1;
}
console.log("Expensive opertation");