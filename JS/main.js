var header_class = document.getElementsByClassName("header");
$(document).ready(function () {
    $("#expand_header").click(function () {
        $("#header").toggleClass("on");
    })
});
$("#fullpage").on("mouseenter", function () {
    setTimeout(function () {
        $("#header").removeClass("on")
    },0)
});

var mySwiper = new Swiper('.swiper-container', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

new fullpage('#fullpage', {
    navigation: true,
    navigationTooltips: ['STRAT', 'EX1', 'EX2', 'EX3', 'EX4', 'EX5', 'EX6'],
    scrollingSpeed: 500,
    scrollBar: true,
});