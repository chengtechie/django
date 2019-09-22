var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

headOne.addEventListener('mouseover', function() {
    headOne.textContent = "Mouse currently over"
    headOne.style.color = 'red'
})

headOne.addEventListener('mouseout', function() {
    headOne.textContent = 'Hover me'
    headOne.style.color = 'black'
})

headTwo.addEventListener('click', function() {
    headTwo.textContent = 'Clicked'
    headTwo.style.color = 'blue'
})

headThree.addEventListener('dblclick', function() {
    headThree.textContent = 'I was double clicked'
    headThree.style.color = 'red'
})