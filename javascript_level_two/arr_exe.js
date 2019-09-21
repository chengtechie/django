// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
    roster.push(name)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(name) {
    var index = roster.indexOf(name)
    roster.splice(index, 1)
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
    var a = 0
    while (a < roster.length) {
        console.log(roster[a])
        a++
    }
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var quit = false
while (!quit) {
    var input = prompt("Action:")
    if (input === "add") {
        var name = prompt("Name:")
        addNew(name)
    } else if (input === "remove") {
        var name = prompt("Name:")
        remove(name)
    } else if (input === "display") {
        display()
    } else {
        quit = true
    }
}
console.log("Bye!")