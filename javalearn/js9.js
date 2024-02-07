var firstname = prompt("Your First name: ")
var lastname = prompt("Your last name: ")
var age = prompt("Whats's your age: ")
var Height = prompt("Height please: ")
var petname = prompt("What's Your pet name: ")
alert("Thank you so much for the information.")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petnameCond = null;

//Name Cond...
if (firstname[0] === lastname[0]) {
    nameCond = true;
} else {
    nameCond = false;
}

//age Cond...
if (age >20 && age < 30){
    ageCond = true;
} else {
    ageCond = false;
}

//Height Cond...
if (Height >= 170){
    heightCond = true;
} else {
    heightCond = false;
}

//petname Cond...
if (petname[petname.length-1] === "y" ){
    petnameCond = true;
} else {
    petnameCond = false;
}

if (nameCond && ageCond && heightCond && petnameCond) {
    console.log("Welcome Spy Bro...")
}else {
    console.log("Sorry,Nothing to see here")
}