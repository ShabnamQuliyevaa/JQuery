$(function(){

$('.img').click(function(){

let x = $(this).attr('src');


$('#sekil').attr('src', x)
});


$('#sekil').click(function(){

    $(".pic").fadeTo("slow", 0.7);

    $(this).css({
        'height' : '100vh'
    })
});



// $('#sekil').toggle(function(){
    
// })



});