//creating an intresting game of hitting the target palnet
//first creating an object class of planets
const planet={
    p1:"Mercury",
    p2:"Venus",
    p3:"Earth",
    p4:"Mars",
    p5:"Jupiter",
    p6:"Saturn",
    p7:"Uranus",
    p8:"Neptune"
}
//crearting a prompt for user input
let target = prompt("Enter name of the target planet:");
//creating a loop to deal with continous wrong answers
do{
   target = prompt("You entered the wrong planet anme, please try again:");
}while(target!==planet["p6"]);
console.log("You have succesfully hit the taget");

