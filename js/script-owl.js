$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            items: 2,
        margin:30,
        loop: true,
        nav:true,
        navText: ["<img src='img/arrow-left.svg'>","<img src='img/arrow-right.svg'>" ],

        responsiveClass:true,
            responsive : {
                // breakpoint from 0 up
                320 : {
                    items : 1,
                    margin: 0
                },
                768 : {
                    items : 2,
                    margin: 30
                }
            }
    }

    );
});