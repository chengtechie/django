// restart game
var restartBtn = document.querySelector('#restartBtn')
// grab all squares
var squares = document.querySelectorAll('td')
// clear all squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = ''
    }
}
restartBtn.addEventListener('click', clearBoard)
// check square marker
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X'
    } else if (this.textContent === 'X') {
        this.textContent = 'O'
    } else if (this.textContent === 'O') {
        this.textContent = ''
    }
}
// for loop to add event listeners to all teh squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker)
}