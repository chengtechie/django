var jsObj = {
    a:"hello", 
    b:[1,2,3], 
    c:{
        inside:['a','b']
    }
}
// jsObj['a'] = "hello"
// jsObj['b'] = [1,2,3]
// jsObj['c']['inside'][1] = 'b'

// console.dir(jsObj) -> print it as JSON

for (key in jsObj) {
    console.log(key) // print a, b...
    console.log(jsObj[key]) // print "hello", [1,2,3]
}

var myObj = {
    name: "Cheng",
    greet: function() {
        console.log("Hello " + this.name)
    }
}

// myObj.greet() -> prints Hello Cheng