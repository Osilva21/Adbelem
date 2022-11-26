$(document).ready(function(){


    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause: true,
        margin:10,
        lazyLoad: true,
        nav:true,
        dots:false,
        responsive:{
            100:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
         }
    })

});

