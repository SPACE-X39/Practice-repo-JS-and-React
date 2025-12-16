/*function newFunction(){
    console.log("My Name is Ashutosh");
    console.log("I am learning JS");
}
newFunction();*/
//sum of two numbers using function
/*function sum(a, b){
    console.log(a+b);
}
sum(20, 25);*/
//sum of 2 integers using return value
/*function newSum(a ,b){
    s=a+b;
    return s;
}
val=newSum(20,35);
console.log(val);*/
//Multiplication using arrow function
/*function mul(a, b){
    return a*b;
}
let arrowMul=(a, b)=>{
    return a*b;
};*/
//practice question: creating a function that takes a string as an argument and returns the number of vowels in the string
/*function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char==="u"){
            count++;
        }
    }
    return count;
}
let val2 = countVowels("ashutosh");
console.log(val2);*/
//forEach loop in array
/*let arr = ["ashu","aj","kanha"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
})*/
//Practice question to print the square of each value using forEach for an given array of numbers
/*let num = [2,4,6,8];
num.forEach((val)=>{
    console.log(val*val);
})*/
//filter method for even numbers
/*let num =[11,24,23,19,44];
let newNum = num.filter((val)=>{
    return val%2===0;
})
console.log(newNum);*/
//practice question filter the marks of the student above 80 using reduce method
/*let marks = [81,78,40,39,93,85];
const newMark = marks.filter((val)=>{
    return val>80;
})
console.log(newMark);*/
