/*global console, $*/

/* start of intro plugin =====================*/

$(function () {

    "use strict";

    $("body").height($(window).height());

    $(window).resize(function () {

        $("body").height($(window).height());

    });

});

/* end of intro plugin */

/* start of retina.js =====================*/

retinajs();

/* end of retina.js */

/* start of typed plugin =====================*/

$(function(){

    "use strict";

    // select the element

    $(".container-fluid .header .container .row .text h2").typed({
        strings: ['<span class="yellow">Welcome On</span> Representer <span class="green">BE</span>'],
        typeSpeed : 30,
        showCursor: false
    });

});

/* end of typed plugin */

/* start of funnyText =====================*/

$(document).ready(function() {
    $(".container-fluid .header .container .row .text p").funnyText({
        speed: 150,
        borderColor: '#000',
        activeColor: '#00B16A',
        color: '#fff',
        fontSize: '22px',
        direction: 'both'
    });
});

/* end of funnyText */

/* start of spinner plugin =====================*/

$(window).load(function () {

    "use strict";

    // fadeOut the spinner in 2.5 second

    $(".spin-container").fadeOut(2000);

});

/* end of spinner plugin */
