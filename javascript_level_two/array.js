// JS array is mutable, can take mix data types
// JS string is immutable

var myArr = ['one', 'two', 'three']
var lastItem = myArr.pop() // 'three'
myArr.push('new') // push at the end of the array

// array iteration
// for (item of myArr) {
//     console.log(item)
// }

function addAwesome(name) {
    console.log(name + " is awesome")
}
myArr.forEach(addAwesome)