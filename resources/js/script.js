$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Navigation header buttons scroll */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });


    /* Navigation anchor tags scroll */
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 1000, 'linear')
    })


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200); // jQuery slideToggle: Display or hide the matched element with a sliding motion.

        if (icon.attr('name') === "menu") {
            icon.attr('name', 'close');
        } else {
            icon.attr('name', 'menu');
        }
    });
});


/* 
    Bug: Preventing the user from opening the navigation in the desktop view (as it disappears here), 
         if it was previously closed in the mobile view. 
    Fix (below): We need to modify the 'display' property of .js--main-nav back to 'block' instead of 'none' here!   
*/
$(window).resize(function () {

    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon ion-icon');

    /* 
        Theoritically using below (window.width) should work, but the browsers zoom % is creating a 'Dead Zone' of pixels. 
        And the style is not changing from 'none' to 'block' until after +/-782 px; as opposed to 767!

        So using a different approach by tracking a change in style (float: left/right) which happens at 767px in media queries,
        and re-setting the 'display' property on .js--main-nav as needed 
    */
    // if ($(window).width() > 767) { 
    if ($('.main-nav').css("float") == "right") {
        nav.css("display", "block");
        icon.attr('name', 'close');
    } else {
        nav.css("display", "none");
        icon.attr('name', 'menu');
    }

});