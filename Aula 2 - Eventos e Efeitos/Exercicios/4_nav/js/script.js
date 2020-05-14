//1. Faça com que os elementos dentro do menu aparecem quando o mouse passar por eles.
//2. Os elementos devem desaparecer quando o mouse não estiver passando por eles

$(document).ready(function(){
    $('li').hover(function(){

        $(this).find('.menu2').slideToggle();
    })

    

})