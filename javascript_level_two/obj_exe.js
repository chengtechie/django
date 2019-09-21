// Part 6 - Objects Exercise

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function() {
        console.log(this.name.length)
    },
    lastName: function() {
        console.log(this.name.split(" ")[1])
    }
  }

alert("Name is " + employee.name + ", Job is " 
    + employee.job + ", Age is " + employee.age)
