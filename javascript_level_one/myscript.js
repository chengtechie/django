// alert("Welcome")
// var deposit = prompt("How much would you like to deposit?")
// alert("You've deposited: " + deposit)
// console.log("You are cool!")

// "1" == 1 true
// "1" === 1 false
// triple equals -> includes data type
// !!(1===1) true

var isTeamMember = true
var firstName = prompt("First name:")
var lastName = prompt("Last name:")
var age = prompt("Age: ")
var height = prompt("Height: ")
var pet = prompt("Pet name: ")
if (firstName[0] !== lastName[0]) {
    isTeamMember = false
}
if (age < 20 || age > 30) {
    isTeamMember = false
}
if (height < 170) {
    isTeamMember = false
}
if (pet[pet.length - 1] !== 'y') {
    isTeamMember = false
}
if (isTeamMember) {
    console.log("Welcome team")
} else {
    console.log("Duh")
}

