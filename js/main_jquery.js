$(document).ready(function(){
    'use strict';
    //funcionamiento del modo sanguche-movil
    $('.movil').on('click',function(){
      $('.navegador').slideToggle();
      // $('div.logo img').css({'margin-bottom':'20px'});
    });
    //fin del modo sanguche-movil

    $('#myCarousel').carousel({
    interval: 5000
    });

    //CODIGO CAROUSEL INICIO
    $('.carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    //CODIGO CAROUSEL FIN
});
