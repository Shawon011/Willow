// plugin active
$(document).ready(function(){
    new WOW().init();
});



// Start Nav bar
$(document).ready(function(){
    $(".dopdown").click(function(){
        $(".sub-menu").stop().fadeToggle()
    });
});

$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".navigation .menu").stop().slideToggle(500)
    })
});
// Start Nav bar



// Testimonial section start
$('.testimonial-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// service-overview page Start

// studio section Start
$('.studio-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})