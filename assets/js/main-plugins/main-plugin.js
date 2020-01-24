/*global console, $*/


/* start of menu plugin ================*/

$(function () {

    "use strict";

    // variabls

    var menu = $(".menu"),
        navs = $(".navs"),
        times = $(".menu .fa-times"),
        bars = $(".menu .fa-bars");

    // hidding the main navs

    navs.css("left", "-270px");
    navs.css("opacity", "0");
    times.hide();

    // first : on click the bars icon

    bars.click(function bars_click() {

        navs.animate({
            left : "0px",
            opacity : "1",
            marginTop : "-4px"
        }, 700);
        bars.hide(50);
        times.show(100);
        menu.animate({left : "205px"}, 800).end();

    });

    // second when click the times icon

    times.click(function () {

        navs.animate({
            left : "-270px",
            opacity : "0",
            marginTop : "-4px"
        }, 500);
        times.hide(50);
        bars.show(100);
        menu.animate({left : "0px"}, 400);

    });

    // when click a link disappear the navs

    $(".navs .links li a").click(function () {

        navs.animate({
            left : "-270px",
            opacity : "0",
            marginTop : "-4px"
        }, 500);
        times.hide(50);
        bars.show(100);
        menu.animate({left : "0px"}, 400);

    });
});

/* end of menu plugin */

/* start of chooose color plugin =====================*/

$(function () {

    "use strict";

    $(".choose .colors ul li").click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value")); // change the attr value

    });

});

/* end of chooose color plugin */

/* start of choose plugin ==================*/

$(function () {

    "use strict";
    
    // variables 
    
    var colors = $(".choose .colors"),
        times = $(".choose .fa-times"),
        gear = $(".choose .fa-gear"),
        choose = $(".choose");

    // hide colors panal

    colors.hide();
    times.hide();

    // first : when click the gear icon

    gear.click(function () {

        choose.animate({
            right : "200px"
        }, 600);
        colors.fadeToggle(600);
        gear.hide(100);
        times.show(50);

    });

    // second : when click the times icon

    times.click(function () {

        choose.animate({
            right : "0"
        }, 600);
        colors.fadeToggle(600);
        gear.show(100);
        times.hide(50);

    });

});

/* end of choose plugin */

/*  start of site scroll parallex ================*/

$(function () {
    
    "use strict";
    
    //Cache the window object
    var $window = $(window);

    //Parallax background effect
    $('section[data-type="section"]').each(function () {

        var section = $(this);	//assigning the object

        $(window).scroll(function () {

            //scroll the background at var speed
            //the yPos is a negative value because we're scrolling it UP!

            var yPosition = -($window.scrollTop() / section.data('speed')),

            //Put together our final background position
                coords = '50% ' + yPosition + 'px';

            //Move the background
            section.css({ backgroundPosition: coords });

        }); //end window scroll

    });
});

/*  end of parallex scroll */

/* start of fire fullScreen header ===================*/

$(function () {

    "use strict";

    // first make the header = window height

    $(".header .container-fluid .grap-slider .carousel").height($(window).height());

    // then make it resizable

    $(window).resize(function () {

        $(".header .container-fluid .grap-slider .carousel").height($(window).height());

    });

});

/* end of fire fullScreen header */

/* start of progress plugin =====================*/

$(function () {
   
    "use strict";

    $(".resume .skills .skill .prog-cont, .resume .skills .skill .prog-2, .resume .skills .skill .prog-3, .resume .skills .skill .prog-4, .resume .skills .skill .prog-5").css("width", "0");
    $(".resume .skills .skill .prog-cont, .resume .skills .skill .prog-2, .resume .skills .skill .prog-3, .resume .skills .skill .prog-4, .resume .skills .skill .prog-5").css("opacity", "0");

    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= $(".header").height() + $(".about").height() - 240) {

            // animate the progress bars
            $(".resume .skills .skill .prog-cont, .resume .skills .skill .prog-2, .resume .skills .skill .prog-3, .resume .skills .skill .prog-4, .resume .skills .skill .prog-5").css("opacity", "1");

            $(".resume .skills .skill .prog-cont").animate({width : "95%"}, 2200);
            $(".resume .skills .skill .prog-2").animate({width : "80%"}, 2200);
            $(".resume .skills .skill .prog-3").animate({width : "75%"}, 2200);
            $(".resume .skills .skill .prog-4").animate({width : "70%"}, 2200);
            $(".resume .skills .skill .prog-5").animate({width : "80%"}, 2200);
        }
        
    });
    
});

/* end of progress plugin */

/* start of arrow down plugin ====================*/

$(function () {

    "use strict";

    $(".header .arrow-down").click(function () {

        $("html, body").animate({

            scrollTop : $(".about").offset().top

        }, 1200);

    });


});

/* end of arrow down plugin */

/* start of arrow top plugin =====================*/

$(function () {

    "use strict";

    var scrollButton = $(".arrow-top");

    $(window).scroll(function () {

        // define if it show or hidden

        if ($(this).scrollTop() >= $(this).height()) {

            scrollButton.show();
        } else {

            scrollButton.hide();
        }

    });

    // animate it

    scrollButton.click(function () {

        $("body, html").animate({ scrollTop : 0}, 900);
    });

});

/* end of arrow top plugin */


/* start of Smooth Scroll in the internal links plugins : ====================*/

$(document).ready(function () {

    "use strict";

    $('a[href^="#t-"]').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        // animate the destance to target link

        $('html, body').stop().animate({

            'scrollTop': $target.offset().top

        }, 2000, 'swing', function () {

            window.location.hash = target;
        });
    });
});


/* end of Smooth Scroll in the internal links plugins : */

/* start of portfolio plugin =======================*/

$(document).ready(function () {

    "use strict";


    $(".portfolio .port-slider button").click(function () {

        //check if the element has class active

        if ($(".portfolio .port-slider button:first-child").hasClass("active")) {

            $(".portfolio .port-slider button:first-child").removeClass("active");
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }

    });


});

// magnific popup 

$(function () {

    "use strict";

    $(".image-popup").magnificPopup({

        type : "image",
        image : {
            verticalFit : false
        },
        zoom : {
            enabled: true,
            duration: 350
        },
        gallery : {
            enabled : true
        }

    });

});


/* start of portfolio plugin */

/* start of testimonials plugin ====================*/

$(function () {

    "use strict";
    
    var leftArrow = $(".testimonials .row .content .fa-chevron-circle-left"),
        rightArrow = $(".testimonials .row .content .fa-chevron-circle-right");

    // show and hide the arrows

    function checkClients() {

        if ($(".testimonials .row .content .testi:first").hasClass("active")) {

            leftArrow.fadeOut(100);
        } else {

            leftArrow.fadeIn(100);
        }

        if ($(".testimonials .row .content .testi:last").hasClass("active")) {

            rightArrow.fadeOut(100);
        } else {

            rightArrow.fadeIn(100);
        }

    }

    $(".my-theme").css("color", "#f00");

    checkClients();

    //start slider

    $(".testimonials .row .content i").click(function () {

        if ($(this).hasClass("fa-chevron-circle-right")) {

            $(".testimonials .row .content .active").fadeOut(300, function () {

                $(this).removeClass("active").next(".testi").removeClass("hidden").addClass("active").fadeIn();

                checkClients();

            });
        }

        if ($(this).hasClass("fa-chevron-circle-left")) {

            $(".testimonials .row .content .active").fadeOut(300, function () {

                $(this).removeClass("active").prev(".testi").removeClass("hidden").addClass("active").fadeIn();

                checkClients();

            });
        }

    });

});

/* end of testimonials plugin */

/* start of typed plugin =====================*/

$(function () {

    "use strict";

    // select the element

    $("#header .carousel .carousel-inner .item .carousel-caption .lead").typed({
        strings: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        typeSpeed : 8,
        loop : true,
        showCursor: false
    });

});

/* end of typed plugin */

/* start of spinner plugin =====================*/

// $(window).load(function () {

//     "use strict";

//     // fadeOut the spinner in 2.5 second
    
//     $(".spin-container").fadeOut(2000);

// });

/* end of spinner plugin */

/* start of wow.js =====================*/

new WOW().init();

/* end of wow.js */

/* start of retina.js =====================*/

retinajs();

/* end of retina.js */

