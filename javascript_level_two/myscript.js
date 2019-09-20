function timesTwo(num) {
    return num * 2
}

// hello() -> execute the function
// hello -> return the function

var v = "Global V"
var stuff = "Global stuff"

function fun(stuff) {
    console.log(v)
    stuff = "Local stuff"
    console.log(stuff)
}

fun()
console.log(stuff)