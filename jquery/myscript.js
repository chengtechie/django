$('h1').on('dblclick',function() {
    $(this).toggleClass('turnBlue')
})
// first input element
$('input').eq(0).keypress(function(event) {
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue')
    }
})
// second input element
$('input').eq(1).on('click', function() {
    $('.container').fadeOut(3000)
})